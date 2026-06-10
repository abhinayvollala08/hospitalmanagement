import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import connectDB from "@/lib/mongodb";
import ContactMessage from "@/models/ContactMessage";

const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name cannot exceed 100 characters"),
  email: z
    .string()
    .email("Please enter a valid email address")
    .optional()
    .or(z.literal("")),
  phone: z.string().optional(),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message cannot exceed 1000 characters"),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validation = contactSchema.safeParse(body);

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

    // Sanitize empty strings to undefined for optional fields
    const data = {
      ...validation.data,
      email: validation.data.email || undefined,
      phone: validation.data.phone || undefined,
    };

    await ContactMessage.create(data);

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you for your message! We will get back to you within 24 hours.",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      {
        success: false,
        message:
          "An error occurred while sending your message. Please try again or call us directly.",
      },
      { status: 500 }
    );
  }
}
