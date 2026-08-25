import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://soykarinacelleri.vercel.app"),
  title: "Karina Célleri | Olonesa Reserva Village · Inversiones Inmobiliarias",
  description:
    "Descubre Olonesa Reserva Village en Olón con Karina Célleri: 104 lotes residenciales en más de 100 hectáreas de reserva natural protegida al pie de la cordillera Chongón-Colonche.",
  applicationName: "Karina Célleri",
  authors: [{ name: "Karina Célleri" }],
  category: "Real Estate",
  openGraph: {
    title: "Karina Célleri | Olonesa Reserva Village · Olón",
    description:
      "Oportunidad de inversión y vida consciente: 104 lotes desde 507 m² rodeados de bosque nativo y mar en Olón.",
    type: "profile",
    locale: "es_EC",
    images: [
      {
        url: "/media/projects/olonesa-reserva-village/01-house-club-wide.webp",
        width: 1920,
        height: 1080,
        alt: "Olonesa Reserva Village en Olón - House Club y Piscina",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Karina Célleri | Olonesa Reserva Village · Olón",
    description: "104 lotes exclusivos en más de 100 hectáreas de reserva natural protegida.",
    images: ["/media/projects/olonesa-reserva-village/01-house-club-wide.webp"],
  },
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#f4e6e5",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${cormorant.variable} ${inter.variable}`}>{children}</body>
    </html>
  );
}
