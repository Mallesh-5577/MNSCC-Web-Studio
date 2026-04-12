import { cn } from "@/lib/utils";
import { Eye, ThumbsDown, ThumbsUp } from "lucide-react";
import { useEffect, useState } from "react";

type ReactionChoice = "like" | "dislike" | null;

interface CounterState {
  views: number;
  likes: number;
  dislikes: number;
}

interface ReactionBarProps {
  className?: string;
}

const COUNTER_NAMESPACE = "mnscc-web-studio";
const VIEW_KEY = "views";
const LIKE_KEY = "likes";
const DISLIKE_KEY = "dislikes";
const LOCAL_REACTION_KEY = "mnscc-reaction-choice-v1";
const LOCAL_VIEW_KEY = "mnscc-view-tracked-v1";
const LOCAL_REACTION_SYNC_KEY = "mnscc-reaction-synced-v1";
const LOCAL_VIEWS_COUNT_KEY = "mnscc-local-views-count-v1";
const LOCAL_LIKES_COUNT_KEY = "mnscc-local-likes-count-v1";
const LOCAL_DISLIKES_COUNT_KEY = "mnscc-local-dislikes-count-v1";

interface ReactionSnapshot {
  choice: ReactionChoice;
  counts: CounterState;
}

let snapshot: ReactionSnapshot = {
  choice: null,
  counts: { views: 0, likes: 0, dislikes: 0 },
};
let initPromise: Promise<void> | null = null;
const listeners = new Set<(next: ReactionSnapshot) => void>();

function emitSnapshot() {
  listeners.forEach((listener) => listener(snapshot));
}

function subscribe(listener: (next: ReactionSnapshot) => void): () => void {
  listeners.add(listener);
  listener(snapshot);
  return () => {
    listeners.delete(listener);
  };
}

function getLocalCount(key: string): number {
  const value = localStorage.getItem(key);
  if (!value) return 0;
  const parsed = Number.parseInt(value, 10);
  return Number.isFinite(parsed) ? parsed : 0;
}

function incrementLocalCount(key: string): number {
  const next = getLocalCount(key) + 1;
  localStorage.setItem(key, String(next));
  return next;
}

async function getCounterValue(key: string): Promise<number> {
  const response = await fetch(`https://api.countapi.xyz/get/${COUNTER_NAMESPACE}/${key}`);
  if (!response.ok) {
    // CountAPI returns 404 for keys that don't exist yet.
    if (response.status === 404) return 0;
    throw new Error(`Failed to get counter for ${key}`);
  }
  const data = (await response.json()) as { value?: number };
  return data.value ?? 0;
}

async function hitCounterValue(key: string): Promise<number> {
  const response = await fetch(`https://api.countapi.xyz/hit/${COUNTER_NAMESPACE}/${key}`);
  if (!response.ok) {
    // Keep UI working even if API is temporarily unavailable.
    return 0;
  }
  const data = (await response.json()) as { value?: number };
  return data.value ?? 0;
}

function initCountersOnce() {
  if (initPromise) return initPromise;

  initPromise = (async () => {
    const savedChoice = localStorage.getItem(LOCAL_REACTION_KEY);
    if (savedChoice === "like" || savedChoice === "dislike") {
      snapshot = { ...snapshot, choice: savedChoice };
      emitSnapshot();
    }

    try {
      const alreadyTracked = localStorage.getItem(LOCAL_VIEW_KEY) === "1";

      if (!alreadyTracked) {
        localStorage.setItem(LOCAL_VIEW_KEY, "1");
        incrementLocalCount(LOCAL_VIEWS_COUNT_KEY);
      }

      // Migrate older local data: if user was already tracked before fallback keys existed.
      if (alreadyTracked && getLocalCount(LOCAL_VIEWS_COUNT_KEY) === 0) {
        localStorage.setItem(LOCAL_VIEWS_COUNT_KEY, "1");
      }
      if (savedChoice === "like" && getLocalCount(LOCAL_LIKES_COUNT_KEY) === 0) {
        localStorage.setItem(LOCAL_LIKES_COUNT_KEY, "1");
      }
      if (
        savedChoice === "dislike" &&
        getLocalCount(LOCAL_DISLIKES_COUNT_KEY) === 0
      ) {
        localStorage.setItem(LOCAL_DISLIKES_COUNT_KEY, "1");
      }

      const localViews = getLocalCount(LOCAL_VIEWS_COUNT_KEY);
      const localLikes = getLocalCount(LOCAL_LIKES_COUNT_KEY);
      const localDislikes = getLocalCount(LOCAL_DISLIKES_COUNT_KEY);

      const views = alreadyTracked
        ? await getCounterValue(VIEW_KEY)
        : await hitCounterValue(VIEW_KEY);

      let [likes, dislikes] = await Promise.all([
        getCounterValue(LIKE_KEY),
        getCounterValue(DISLIKE_KEY),
      ]);

      // Reconcile legacy reactions that were stored locally but not reflected remotely.
      const isReactionSynced = localStorage.getItem(LOCAL_REACTION_SYNC_KEY) === "1";
      const shouldRecoverLike = savedChoice === "like" && likes === 0;
      const shouldRecoverDislike = savedChoice === "dislike" && dislikes === 0;

      if (!isReactionSynced && (shouldRecoverLike || shouldRecoverDislike)) {
        if (savedChoice === "like") {
          likes = await hitCounterValue(LIKE_KEY);
        } else if (savedChoice === "dislike") {
          dislikes = await hitCounterValue(DISLIKE_KEY);
        }
        localStorage.setItem(LOCAL_REACTION_SYNC_KEY, "1");
      }

      let nextLikes = Math.max(localLikes, likes);
      let nextDislikes = Math.max(localDislikes, dislikes);

      if (savedChoice === "like") {
        nextLikes = Math.max(nextLikes, 1);
      }
      if (savedChoice === "dislike") {
        nextDislikes = Math.max(nextDislikes, 1);
      }

      snapshot = {
        ...snapshot,
        counts: {
          views: Math.max(snapshot.counts.views, views, localViews),
          likes: Math.max(snapshot.counts.likes, nextLikes),
          dislikes: Math.max(snapshot.counts.dislikes, nextDislikes),
        },
      };
      emitSnapshot();
    } catch {
      const localViews = getLocalCount(LOCAL_VIEWS_COUNT_KEY);
      const localLikes = getLocalCount(LOCAL_LIKES_COUNT_KEY);
      const localDislikes = getLocalCount(LOCAL_DISLIKES_COUNT_KEY);

      snapshot = {
        ...snapshot,
        counts: {
          views: Math.max(snapshot.counts.views, localViews),
          likes: Math.max(snapshot.counts.likes, localLikes),
          dislikes: Math.max(snapshot.counts.dislikes, localDislikes),
        },
      };
      emitSnapshot();
    }
  })();

  return initPromise;
}

async function submitReactionOnce(nextChoice: Exclude<ReactionChoice, null>) {
  if (snapshot.choice) return;

  snapshot = {
    choice: nextChoice,
    counts: {
      ...snapshot.counts,
      likes: snapshot.counts.likes + (nextChoice === "like" ? 1 : 0),
      dislikes: snapshot.counts.dislikes + (nextChoice === "dislike" ? 1 : 0),
    },
  };
  localStorage.setItem(LOCAL_REACTION_KEY, nextChoice);
  localStorage.setItem(LOCAL_REACTION_SYNC_KEY, "0");
  if (nextChoice === "like") {
    incrementLocalCount(LOCAL_LIKES_COUNT_KEY);
  } else {
    incrementLocalCount(LOCAL_DISLIKES_COUNT_KEY);
  }
  emitSnapshot();

  try {
    const updatedCount = await hitCounterValue(
      nextChoice === "like" ? LIKE_KEY : DISLIKE_KEY,
    );

    if (updatedCount > 0) {
      snapshot = {
        ...snapshot,
        counts: {
          ...snapshot.counts,
          likes: nextChoice === "like" ? updatedCount : snapshot.counts.likes,
          dislikes:
            nextChoice === "dislike" ? updatedCount : snapshot.counts.dislikes,
        },
      };
    }
    localStorage.setItem(LOCAL_REACTION_SYNC_KEY, "1");
    emitSnapshot();
  } catch {
    // Ignore transient API failures after optimistic update.
  }
}

export function ReactionBar({ className }: ReactionBarProps) {
  const [{ choice, counts }, setState] = useState<ReactionSnapshot>(snapshot);

  useEffect(() => {
    const unsubscribe = subscribe(setState);
    void initCountersOnce();
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div
      className={cn(
        "flex items-center gap-2 text-sm text-muted-foreground",
        className,
      )}
      data-ocid="reaction-bar"
    >
      <span
        className="inline-flex min-w-20 items-center justify-center gap-1 rounded-md border border-border/30 bg-card/70 px-2 py-1.5"
        title="Total views"
      >
        <Eye className="h-3.5 w-3.5" />
        <span className="font-semibold tabular-nums">Views {counts.views}</span>
      </span>

      <button
        type="button"
        onClick={() => void submitReactionOnce("like")}
        disabled={choice !== null}
        className={cn(
          "inline-flex min-w-20 items-center justify-center gap-1 rounded-md border border-border/30 bg-card/70 px-2 py-1.5 transition-colors hover:text-foreground",
          choice === "like"
            ? "text-green-300"
            : "",
          choice !== null && choice !== "like" && "opacity-60",
          choice !== null && "cursor-not-allowed",
        )}
        aria-label="Like"
        title="Total likes"
        data-ocid="reaction-like"
      >
        <ThumbsUp className="h-3.5 w-3.5" />
        <span className="font-semibold tabular-nums">Likes {counts.likes}</span>
      </button>

      <button
        type="button"
        onClick={() => void submitReactionOnce("dislike")}
        disabled={choice !== null}
        className={cn(
          "inline-flex min-w-20 items-center justify-center gap-1 rounded-md border border-border/30 bg-card/70 px-2 py-1.5 transition-colors hover:text-foreground",
          choice === "dislike"
            ? "text-red-300"
            : "",
          choice !== null && choice !== "dislike" && "opacity-60",
          choice !== null && "cursor-not-allowed",
        )}
        aria-label="Dislike"
        title="Total dislikes"
        data-ocid="reaction-dislike"
      >
        <ThumbsDown className="h-3.5 w-3.5" />
        <span className="font-semibold tabular-nums">Dislikes {counts.dislikes}</span>
      </button>
    </div>
  );
}
