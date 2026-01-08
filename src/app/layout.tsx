import type { Metadata } from "next";
import { Geist, Geist_Mono, Rokkitt, Nunito, Caveat } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Rokkitt - vintage slab serif for headlines, sturdy and trustworthy
const rokkitt = Rokkitt({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

// Nunito - rounded, friendly sans-serif for body text
const nunito = Nunito({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Caveat - casual handwritten script for warmth accents (diner menu vibe)
const caveat = Caveat({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Fresh Fleet | Lavandería Industrial y Servicio de Recolección",
  description:
    "Instalación de lavandería a escala industrial que sirve a empresas y familias ocupadas. Procesamiento 8x más rápido con equipos comerciales de 60-80 lb. Planchado profesional para eventos, recolección y entrega conveniente.",
  keywords: [
    "lavandería comercial",
    "recolección entrega lavandería",
    "servicio de mantelería eventos",
    "lavandería hoteles",
    "lavandería restaurantes",
    "lavandería industrial",
    "planchado de manteles",
  ],
  openGraph: {
    title: "Fresh Fleet | Lavandería Industrial y Servicio de Recolección",
    description:
      "Instalación de lavandería a escala industrial. Procesamiento 8x más rápido.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${rokkitt.variable} ${nunito.variable} ${caveat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
