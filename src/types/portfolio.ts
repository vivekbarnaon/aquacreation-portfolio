export type VideoCategory =
  | "all"
  | "reels"
  | "promo"
  | "youtube"
  | "vlogs"
  | "cinematic"
  | "weddings";

export type AspectRatio = "9:16" | "16:9" | "4:5" | "2.39:1" | "1:1";

export interface VideoEntry {
  id: string;
  title: string;
  category: VideoCategory;
  categoryLabel: string;
  description: string;
  posterUrl: string;
  videoUrl?: string; // local source or video path
  instagramUrl?: string; // Instagram post/reel link (e.g., https://www.instagram.com/p/De0OSpWI38T/)
  aspectRatio: AspectRatio;
  isFeatured: boolean;
  status: "sample" | "published" | "coming_soon";
  duration?: string;
  client?: string;
  toolsUsed?: string[];
  fieldHighlights?: string[];
}

export type PhotoCategory =
  | "all"
  | "brown"
  | "retouching"
  | "enhancement"
  | "bridal"
  | "wedding"
  | "portrait"
  | "grading"
  | "manipulation";

export interface PhotoEntry {
  id: string;
  title: string;
  category: PhotoCategory;
  categoryLabel: string;
  description: string;
  imageUrl: string;
  beforeUrl?: string; // For before-and-after comparison frames
  aspectRatio: "3:4" | "16:9" | "1:1" | "4:5";
  isFeatured: boolean;
  status: "sample" | "published";
  cameraOrGear?: string;
  technique?: string;
  fieldHighlights?: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  shortDesc: string;
  fullDesc: string;
  category: "video" | "photo" | "creative";
  deliverables: string[];
  idealFor: string[];
  turnaroundNote: string;
  iconName: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  serviceCategory: string;
  projectDescription: string;
  budgetRange?: string;
  projectDeadline?: string;
}
