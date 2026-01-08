import type { Metadata } from "next";
import { DM_Serif_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";

// DM Serif Display - Chunky, characterful serif for headlines
// Bold presence that pairs perfectly with hand-drawn illustrations
const dmSerif = DM_Serif_Display({
  variable: "--font-headline",
  subsets: ["latin"],
  weight: "400",
});

// Source Sans 3 - Professional humanist sans-serif
// Approachable yet refined, lets illustrations shine
const sourceSans = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Fresh Fleet | Tus Vecinos de Confianza en Lavanderia - Puerto Rico",
  description:
    "Somos Fresh Fleet, tu servicio de lavanderia con carino en Puerto Rico. Recogemos tu ropa, la lavamos con amor, y te la entregamos fresquecita. Familias, hoteles, restaurantes, eventos - todos bienvenidos!",
  keywords: [
    "lavanderia puerto rico",
    "recogido y entrega lavanderia",
    "lavanderia a domicilio",
    "servicio de lavanderia san juan",
    "lavanderia comercial",
    "lavanderia para hoteles",
    "lavanderia para eventos",
    "servicio de manteleria",
    "lavado y doblado",
    "fresh fleet",
  ],
  openGraph: {
    title: "Fresh Fleet | Lavanderia con Carino en Puerto Rico",
    description:
      "Tus vecinos de confianza en lavanderia. Recogemos, lavamos, y entregamos - asi de facil!",
    type: "website",
    locale: "es_PR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fresh Fleet | Lavanderia con Carino",
    description: "Tus vecinos de confianza en lavanderia en Puerto Rico.",
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
        className={`${dmSerif.variable} ${sourceSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
