import { z } from "zod";

export const SERVICE_OPTIONS = [
  "Reels and Shorts Editing",
  "YouTube Video Editing",
  "Promotional and Brand Videos",
  "Vlog Editing",
  "Cinematic and Wedding Films",
  "Photo Retouching",
  "Photo Enhancement",
  "Bridal and Wedding Photo Edits",
  "Thumbnails and Banners",
  "Creative Social Media Content",
  "Comprehensive Multi-Service Package",
] as const;

export const BUDGET_OPTIONS = [
  "Under $500",
  "$500 – $1,500",
  "$1,500 – $3,500",
  "$3,500 – $7,500",
  "$7,500+",
  "Discuss Upon Review",
] as const;

export const DEADLINE_OPTIONS = [
  "Immediate (Within 48 hours)",
  "Urgent (Within 1 week)",
  "Standard (1–3 weeks)",
  "Flexible / Long-term project",
] as const;

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Full name must be at least 2 characters")
    .max(80, "Full name cannot exceed 80 characters"),
  email: z
    .string()
    .trim()
    .email("Please provide a valid email address")
    .max(100, "Email address cannot exceed 100 characters"),
  serviceCategory: z.string().min(1, "Please select a service category"),
  projectDescription: z
    .string()
    .trim()
    .min(15, "Please share at least a brief 15-character overview of your vision")
    .max(2500, "Project description cannot exceed 2500 characters"),
  budgetRange: z.string().optional(),
  projectDeadline: z.string().optional(),
  // Honeypot field for bot protection (must remain empty)
  companyWebsite: z.string().max(0, "Bot submission detected").optional(),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;
