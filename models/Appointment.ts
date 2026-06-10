import mongoose, { Document, Model, Schema } from "mongoose";

export type ServiceType =
  | "Kidney Stone Removal"
  | "Dialysis Consultation"
  | "Kidney Disease Management"
  | "Urinary Tract Infection"
  | "Kidney Transplant Consultation"
  | "Male Infertility Treatment"
  | "Erectile Dysfunction"
  | "Prostate Care"
  | "Testosterone Therapy"
  | "General Consultation"
  | "Other";

export type AppointmentStatus = "Pending" | "Confirmed" | "Completed" | "Cancelled";

export interface IAppointment extends Document {
  patientName: string;
  phoneNumber: string;
  preferredDate: Date;
  serviceRequested: ServiceType;
  additionalNotes?: string;
  status: AppointmentStatus;
  createdAt: Date;
  updatedAt: Date;
}

const AppointmentSchema = new Schema<IAppointment>(
  {
    patientName: {
      type: String,
      required: [true, "Patient name is required"],
      trim: true,
      minlength: [2, "Name must be at least 2 characters"],
      maxlength: [100, "Name cannot exceed 100 characters"],
    },
    phoneNumber: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
      match: [/^[6-9]\d{9}$/, "Please provide a valid 10-digit Indian mobile number"],
    },
    preferredDate: {
      type: Date,
      required: [true, "Preferred appointment date is required"],
    },
    serviceRequested: {
      type: String,
      required: [true, "Please select a service"],
      enum: {
        values: [
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
        ],
        message: "Invalid service selected",
      },
    },
    additionalNotes: {
      type: String,
      trim: true,
      maxlength: [500, "Notes cannot exceed 500 characters"],
    },
    status: {
      type: String,
      enum: ["Pending", "Confirmed", "Completed", "Cancelled"],
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

// Prevent model recompilation in development hot reloads
const Appointment: Model<IAppointment> =
  mongoose.models.Appointment ||
  mongoose.model<IAppointment>("Appointment", AppointmentSchema);

export default Appointment;
