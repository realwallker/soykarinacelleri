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
  title: "Karina Célleri | Inversiones y bienes raíces en Samborondón",
  description:
    "Portafolio inmobiliario de Karina Célleri: proyectos residenciales, comerciales y corporativos seleccionados en Samborondón.",
  applicationName: "Karina Célleri",
  authors: [{ name: "Karina Célleri" }],
  category: "Real Estate",
  openGraph: {
    title: "Karina Célleri | Portafolio inmobiliario",
    description:
      "Oportunidades seleccionadas para vivir, invertir y construir patrimonio en Samborondón.",
    type: "profile",
    locale: "es_EC",
    images: [
      {
        url: "/media/profile/karina.webp",
        width: 800,
        height: 800,
        alt: "Karina Célleri, asesora inmobiliaria",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Karina Célleri | Portafolio inmobiliario",
    description: "Proyectos residenciales, comerciales y corporativos en Samborondón.",
    images: ["/media/profile/karina.webp"],
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
