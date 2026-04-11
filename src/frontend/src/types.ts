export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  category: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string | import("react").ReactNode;
  tech: string;
}

export interface WebsiteType {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface WhyItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export type NavLink = {
  label: string;
  href: string;
};
