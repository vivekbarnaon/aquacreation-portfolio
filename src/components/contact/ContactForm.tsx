"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { InstagramIcon } from "@/components/ui/Icons";
import {
  contactFormSchema,
  SERVICE_OPTIONS,
  BUDGET_OPTIONS,
  DEADLINE_OPTIONS,
} from "@/lib/contact-schema";

export default function ContactForm() {
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get("service") || "";

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    serviceCategory:
      preselectedService &&
      SERVICE_OPTIONS.includes(preselectedService as (typeof SERVICE_OPTIONS)[number])
        ? preselectedService
        : SERVICE_OPTIONS[0],
    projectDescription: "",
    budgetRange: "",
    projectDeadline: "",
    companyWebsite: "", // Honeypot field for bot rejection
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear specific field error
    if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    setSubmitSuccess(null);

    // Client-side validation with Zod
    const validationResult = contactFormSchema.safeParse(formData);
    if (!validationResult.success) {
      const fieldErrors: Record<string, string> = {};
      validationResult.error.issues.forEach((issue) => {
        const path = issue.path[0] as string;
        if (path) fieldErrors[path] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Submission failed. Please try again.");
      }

      setSubmitSuccess(
        data.message ||
          "Your brief has been submitted successfully. AquaCreation will be in touch shortly."
      );
      // Reset form
      setFormData({
        fullName: "",
        email: "",
        serviceCategory: SERVICE_OPTIONS[0],
        projectDescription: "",
        budgetRange: "",
        projectDeadline: "",
        companyWebsite: "",
      });
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error
          ? err.message
          : "Could not send enquiry. Please contact @aquacreation18 on Instagram directly.";
      setSubmitError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="rounded-3xl bg-deep-black border border-royal-purple/40 p-6 sm:p-10 shadow-2xl shadow-black relative overflow-hidden">
      {/* Soft Ambient Radial Light */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-royal-purple/10 blur-[130px] pointer-events-none" />

      {submitSuccess ? (
        <div className="py-12 px-4 text-center space-y-4 max-w-md mx-auto animate-in zoom-in-95">
          <div className="w-16 h-16 rounded-full bg-royal-purple/20 border-2 border-electric-violet text-electric-violet flex items-center justify-center mx-auto shadow-lg shadow-royal-purple/30">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-primary-white">
            Brief Transmitted
          </h3>
          <p className="text-xs sm:text-sm text-secondary-text leading-relaxed">
            {submitSuccess}
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => setSubmitSuccess(null)}
              className="px-6 py-2.5 rounded-full bg-dark-purple border border-royal-purple/50 text-xs text-soft-lavender hover:text-primary-white transition-colors"
            >
              Submit Another Brief
            </button>
            <a
              href="https://instagram.com/aquacreation18"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-royal-purple/30 text-xs text-soft-lavender hover:text-primary-white transition-colors"
            >
              <InstagramIcon className="w-3.5 h-3.5 text-electric-violet" />
              <span>@aquacreation18</span>
            </a>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6 relative z-10" noValidate>
          {submitError && (
            <div className="p-4 rounded-xl bg-red-950/40 border border-red-500/40 text-red-200 text-xs flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
              <span>{submitError}</span>
            </div>
          )}

          {/* Honeypot field hidden from users for spam mitigation */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="companyWebsite">Website</label>
            <input
              id="companyWebsite"
              type="text"
              name="companyWebsite"
              value={formData.companyWebsite}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Full Name */}
            <div className="space-y-1.5">
              <label
                htmlFor="fullName"
                className="text-xs font-semibold uppercase tracking-wider text-soft-lavender block"
              >
                Full Name <span className="text-electric-violet">*</span>
              </label>
              <input
                id="fullName"
                type="text"
                name="fullName"
                required
                placeholder="e.g. Alex Morgan"
                value={formData.fullName}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl bg-obsidian border text-sm text-primary-white placeholder:text-secondary-text/50 focus:outline-none transition-colors ${
                  errors.fullName
                    ? "border-red-500/80 focus:ring-1 focus:ring-red-500"
                    : "border-royal-purple/30 focus:border-electric-violet focus:ring-1 focus:ring-electric-violet"
                }`}
              />
              {errors.fullName && (
                <p className="text-[11px] text-red-400 mt-1">{errors.fullName}</p>
              )}
            </div>

            {/* Email Address */}
            <div className="space-y-1.5">
              <label
                htmlFor="email"
                className="text-xs font-semibold uppercase tracking-wider text-soft-lavender block"
              >
                Email Address <span className="text-electric-violet">*</span>
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="alex@example.com"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl bg-obsidian border text-sm text-primary-white placeholder:text-secondary-text/50 focus:outline-none transition-colors ${
                  errors.email
                    ? "border-red-500/80 focus:ring-1 focus:ring-red-500"
                    : "border-royal-purple/30 focus:border-electric-violet focus:ring-1 focus:ring-electric-violet"
                }`}
              />
              {errors.email && (
                <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Service Category */}
            <div className="space-y-1.5">
              <label
                htmlFor="serviceCategory"
                className="text-xs font-semibold uppercase tracking-wider text-soft-lavender block"
              >
                Service Category <span className="text-electric-violet">*</span>
              </label>
              <select
                id="serviceCategory"
                name="serviceCategory"
                value={formData.serviceCategory}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-obsidian border border-royal-purple/30 text-sm text-primary-white focus:border-electric-violet focus:outline-none focus:ring-1 focus:ring-electric-violet transition-colors"
              >
                {SERVICE_OPTIONS.map((service) => (
                  <option key={service} value={service} className="bg-deep-black text-primary-white">
                    {service}
                  </option>
                ))}
              </select>
            </div>

            {/* Target Budget */}
            <div className="space-y-1.5">
              <label
                htmlFor="budgetRange"
                className="text-xs font-semibold uppercase tracking-wider text-soft-lavender block"
              >
                Budget Range (Optional)
              </label>
              <select
                id="budgetRange"
                name="budgetRange"
                value={formData.budgetRange}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-obsidian border border-royal-purple/30 text-sm text-primary-white focus:border-electric-violet focus:outline-none focus:ring-1 focus:ring-electric-violet transition-colors"
              >
                <option value="" className="bg-deep-black text-secondary-text">
                  Select budget range
                </option>
                {BUDGET_OPTIONS.map((opt) => (
                  <option key={opt} value={opt} className="bg-deep-black text-primary-white">
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Project Deadline */}
          <div className="space-y-1.5">
            <label
              htmlFor="projectDeadline"
              className="text-xs font-semibold uppercase tracking-wider text-soft-lavender block"
            >
              Estimated Timeline / Deadline (Optional)
            </label>
            <select
              id="projectDeadline"
              name="projectDeadline"
              value={formData.projectDeadline}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-obsidian border border-royal-purple/30 text-sm text-primary-white focus:border-electric-violet focus:outline-none focus:ring-1 focus:ring-electric-violet transition-colors"
            >
              <option value="" className="bg-deep-black text-secondary-text">
                Select target deadline
              </option>
              {DEADLINE_OPTIONS.map((opt) => (
                <option key={opt} value={opt} className="bg-deep-black text-primary-white">
                  {opt}
                </option>
              ))}
            </select>
          </div>

          {/* Project Description */}
          <div className="space-y-1.5">
            <label
              htmlFor="projectDescription"
              className="text-xs font-semibold uppercase tracking-wider text-soft-lavender block"
            >
              Project Vision & Details <span className="text-electric-violet">*</span>
            </label>
            <textarea
              id="projectDescription"
              name="projectDescription"
              rows={5}
              required
              placeholder="Tell us about your project: target audience, footage format, visual style or reference links..."
              value={formData.projectDescription}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-xl bg-obsidian border text-sm text-primary-white placeholder:text-secondary-text/50 focus:outline-none transition-colors ${
                errors.projectDescription
                  ? "border-red-500/80 focus:ring-1 focus:ring-red-500"
                  : "border-royal-purple/30 focus:border-electric-violet focus:ring-1 focus:ring-electric-violet"
              }`}
            />
            {errors.projectDescription && (
              <p className="text-[11px] text-red-400 mt-1">{errors.projectDescription}</p>
            )}
            <span className="text-[11px] text-secondary-text/60 block text-right">
              {formData.projectDescription.length} / 2500 characters
            </span>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-royal-purple to-electric-violet text-primary-white font-semibold text-sm uppercase tracking-wider shadow-xl shadow-royal-purple/30 hover:shadow-electric-violet/50 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-primary-white" />
                  <span>Transmitting Brief...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Submit Project Brief</span>
                </>
              )}
            </button>
          </div>

          <p className="text-center text-[11px] text-secondary-text/70 pt-1">
            AquaCreation respects your confidentiality. Your footage and briefs are never shared publicly.
          </p>
        </form>
      )}
    </div>
  );
}
