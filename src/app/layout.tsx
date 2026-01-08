import type { Metadata } from "next";
import { Geist, Geist_Mono, Bebas_Neue, DM_Sans } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// DM Sans for body text - clean and modern
const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Bebas Neue - classic retro condensed display font (like Pink's Windows)
const bebasNeue = Bebas_Neue({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
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
        className={`${geistSans.variable} ${geistMono.variable} ${bebasNeue.variable} ${dmSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
