"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { CalendarCheck, Loader2 } from "lucide-react";

const formSchema = z.object({
  patientName: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name cannot exceed 100 characters"),
  phoneNumber: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number"),
  preferredDate: z
    .string()
    .min(1, "Please select a preferred date")
    .refine(
      (val) => new Date(val) >= new Date(new Date().setHours(0, 0, 0, 0)),
      "Date must be today or in the future"
    ),
  serviceRequested: z.enum(
    [
      "Kidney Stone Removal",
      "Dialysis Consultation",
      "Kidney Disease Management",
      "Urinary Tract Infection",
      "Kidney Transplant Consultation",
      "Male Infertility Treatment",
      "Erectile Dysfunction",
      "Prostate Care",
      "Testosterone Therapy",
      "General Consultation",
      "Other",
    ] as const,
    { message: "Please select a service" }
  ),
  additionalNotes: z.string().max(500).optional(),
});

type FormValues = z.infer<typeof formSchema>;

const services = [
  "General Consultation",
  "Kidney Stone Removal",
  "Dialysis Consultation",
  "Kidney Disease Management",
  "Urinary Tract Infection",
  "Kidney Transplant Consultation",
  "Male Infertility Treatment",
  "Erectile Dysfunction",
  "Prostate Care",
  "Testosterone Therapy",
  "Other",
];

// Get today's date string in YYYY-MM-DD format
function getTodayString() {
  return new Date().toISOString().split("T")[0];
}

export default function AppointmentForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();

      if (result.success) {
        toast.success("Appointment Request Sent!", {
          description: result.message,
          duration: 6000,
        });
        reset();
      } else {
        toast.error("Submission Failed", {
          description:
            result.message ||
            "Please try again or call us directly at +91 98765 43210",
          duration: 6000,
        });
      }
    } catch {
      toast.error("Network Error", {
        description:
          "Could not reach the server. Please call us at +91 98765 43210.",
        duration: 6000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      aria-label="Appointment booking form"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Patient Name */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="patientName"
            className="text-sm font-semibold text-[#1e293b]"
          >
            Full Name <span className="text-red-500" aria-hidden>*</span>
          </label>
          <input
            id="patientName"
            type="text"
            autoComplete="name"
            placeholder="e.g. Ravi Kumar"
            className={`form-input ${errors.patientName ? "error" : ""}`}
            aria-required="true"
            aria-describedby={errors.patientName ? "patientName-error" : undefined}
            {...register("patientName")}
          />
          {errors.patientName && (
            <p id="patientName-error" className="text-red-500 text-xs" role="alert">
              {errors.patientName.message}
            </p>
          )}
        </div>

        {/* Phone Number */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="phoneNumber"
            className="text-sm font-semibold text-[#1e293b]"
          >
            Mobile Number <span className="text-red-500" aria-hidden>*</span>
          </label>
          <input
            id="phoneNumber"
            type="tel"
            autoComplete="tel"
            placeholder="10-digit mobile number"
            maxLength={10}
            className={`form-input ${errors.phoneNumber ? "error" : ""}`}
            aria-required="true"
            aria-describedby={errors.phoneNumber ? "phoneNumber-error" : undefined}
            {...register("phoneNumber")}
          />
          {errors.phoneNumber && (
            <p id="phoneNumber-error" className="text-red-500 text-xs" role="alert">
              {errors.phoneNumber.message}
            </p>
          )}
        </div>

        {/* Preferred Date */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="preferredDate"
            className="text-sm font-semibold text-[#1e293b]"
          >
            Preferred Date <span className="text-red-500" aria-hidden>*</span>
          </label>
          <input
            id="preferredDate"
            type="date"
            min={getTodayString()}
            className={`form-input ${errors.preferredDate ? "error" : ""}`}
            aria-required="true"
            aria-describedby={errors.preferredDate ? "preferredDate-error" : undefined}
            {...register("preferredDate")}
          />
          {errors.preferredDate && (
            <p id="preferredDate-error" className="text-red-500 text-xs" role="alert">
              {errors.preferredDate.message}
            </p>
          )}
        </div>

        {/* Service Requested */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="serviceRequested"
            className="text-sm font-semibold text-[#1e293b]"
          >
            Service Needed <span className="text-red-500" aria-hidden>*</span>
          </label>
          <select
            id="serviceRequested"
            className={`form-input ${errors.serviceRequested ? "error" : ""}`}
            aria-required="true"
            aria-describedby={errors.serviceRequested ? "serviceRequested-error" : undefined}
            {...register("serviceRequested")}
          >
            <option value="">Select a service...</option>
            {services.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          {errors.serviceRequested && (
            <p id="serviceRequested-error" className="text-red-500 text-xs" role="alert">
              {errors.serviceRequested.message}
            </p>
          )}
        </div>
      </div>

      {/* Additional Notes */}
      <div className="flex flex-col gap-1.5 mt-5">
        <label
          htmlFor="additionalNotes"
          className="text-sm font-semibold text-[#1e293b]"
        >
          Additional Notes{" "}
          <span className="text-[#94a3b8] font-normal">(Optional)</span>
        </label>
        <textarea
          id="additionalNotes"
          rows={3}
          placeholder="Briefly describe your symptoms or any prior treatments..."
          className="form-input resize-none"
          aria-describedby={errors.additionalNotes ? "notes-error" : undefined}
          {...register("additionalNotes")}
        />
        {errors.additionalNotes && (
          <p id="notes-error" className="text-red-500 text-xs" role="alert">
            {errors.additionalNotes.message}
          </p>
        )}
      </div>

      <button
        id="submit-appointment"
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full mt-6 py-3.5 disabled:opacity-60 disabled:cursor-not-allowed"
        aria-busy={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 size={18} className="animate-spin" aria-hidden />
            Submitting...
          </>
        ) : (
          <>
            <CalendarCheck size={18} aria-hidden />
            Book Appointment
          </>
        )}
      </button>

      <p className="text-[#94a3b8] text-xs text-center mt-3">
        We will call you within 2 hours to confirm your appointment.
      </p>
    </form>
  );
}
