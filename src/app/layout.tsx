import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fresh Fleet | Industrial Laundry & Pickup/Delivery Service",
  description:
    "Industrial-scale laundry facility serving businesses and busy families. 8x faster processing with 60-80 lb commercial equipment. Professional pressing for events, convenient pickup & delivery for homes.",
  keywords: [
    "commercial laundry",
    "laundry pickup delivery",
    "event linen service",
    "hotel laundry",
    "restaurant laundry",
    "industrial laundry",
    "linen pressing",
  ],
  openGraph: {
    title: "Fresh Fleet | Industrial Laundry & Pickup/Delivery Service",
    description:
      "Industrial-scale laundry facility serving businesses and busy families. 8x faster processing.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
