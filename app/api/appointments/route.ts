import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import connectDB from "@/lib/mongodb";
import Appointment from "@/models/Appointment";

const appointmentSchema = z.object({
  patientName: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name cannot exceed 100 characters"),
  phoneNumber: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit Indian mobile number"),
  preferredDate: z
    .string()
    .refine((val) => !isNaN(Date.parse(val)), "Invalid date format")
    .refine(
      (val) => new Date(val) >= new Date(new Date().setHours(0, 0, 0, 0)),
      "Preferred date must be today or in the future"
    ),
  serviceRequested: z.enum([
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
  ] as const),
  additionalNotes: z.string().max(500).optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validation = appointmentSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed",
          errors: validation.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    await connectDB();

    const appointment = await Appointment.create({
      ...validation.data,
      preferredDate: new Date(validation.data.preferredDate),
    });

    return NextResponse.json(
      {
        success: true,
        message:
          "Your appointment request has been received. We will contact you shortly to confirm.",
        appointmentId: appointment._id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Appointment API Error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An error occurred while processing your request. Please try again or call us directly.",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectDB();
    const appointments = await Appointment.find({})
      .sort({ createdAt: -1 })
      .limit(50)
      .lean();

    return NextResponse.json(
      { success: true, data: appointments },
      { status: 200 }
    );
  } catch (error) {
    console.error("Appointment GET Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch appointments" },
      { status: 500 }
    );
  }
}
