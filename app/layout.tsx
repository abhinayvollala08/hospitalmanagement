import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { NavbarRouter } from "@/components/layout/NavbarRouter";
import { FooterRouter } from "@/components/layout/FooterRouter";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://drgopikanth.com"
  ),
  title: {
    template: "%s | Dr. Gopikanth Kidney & Andrology Center",
    default: "Dr. Gopikanth Kidney & Andrology Center | Hyderabad",
  },
  description:
    "Expert kidney care and andrology treatments in Hyderabad. Dr. Gopikanth specializes in kidney stone removal, dialysis, male infertility, erectile dysfunction, and prostate care. Book an appointment today.",
  keywords: [
    "nephrologist Hyderabad",
    "andrologist Hyderabad",
    "kidney doctor Hyderabad",
    "kidney stone treatment",
    "dialysis center Hyderabad",
    "male infertility specialist",
    "erectile dysfunction treatment",
    "prostate care Hyderabad",
    "Dr Gopikanth",
    "urology clinic Hyderabad",
  ],
  authors: [{ name: "Dr. Gopikanth" }],
  creator: "Dr. Gopikanth Kidney & Andrology Center",
  publisher: "Dr. Gopikanth Kidney & Andrology Center",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "Dr. Gopikanth Kidney & Andrology Center",
    title: "Dr. Gopikanth Kidney & Andrology Center | Hyderabad",
    description:
      "Expert kidney care and andrology treatments in Hyderabad. Specialized in kidney stone removal, dialysis, male infertility, and prostate care.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Gopikanth Kidney & Andrology Center",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Gopikanth Kidney & Andrology Center | Hyderabad",
    description:
      "Expert kidney care and andrology treatments in Hyderabad. Book your appointment today.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        <SessionProvider>
          {/* Smart navbar — shows PublicNavbar on public pages, nothing on dashboards */}
          <NavbarRouter />
          <main id="main-content">{children}</main>
          <FooterRouter />
          <FloatingActions />
          <Toaster
            position="top-right"
            richColors
            toastOptions={{
              style: {
                borderRadius: "0.5rem",
                fontSize: "0.9rem",
              },
            }}
          />
        </SessionProvider>
      </body>
    </html>
  );
}
