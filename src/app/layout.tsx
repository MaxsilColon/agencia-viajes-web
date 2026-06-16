import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import NavBar from "@/Components/NavBar";
import Footer from "@/Components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dliamtours.com"),
  title: {
    default: "D' Liam Tours | Excursiones y transporte privado",
    template: "%s | D' Liam Tours",
  },
  description:
    "Excursiones, traslados al aeropuerto, paseos familiares y transporte privado confiable en Republica Dominicana.",
  keywords: [
    "D' Liam Tours",
    "excursiones Republica Dominicana",
    "transporte privado Santo Domingo",
    "traslados aeropuerto",
    "viajes turisticos",
  ],
  openGraph: {
    title: "D' Liam Tours",
    description:
      "Viaja con comodidad, seguridad y sabor tropical por Republica Dominicana.",
    siteName: "D' Liam Tours",
    locale: "es_DO",
    type: "website",
    images: [
      {
        url: "/logo-dliam-tours.png",
        width: 1024,
        height: 1024,
        alt: "Logo de D' Liam Tours",
      },
    ],
  },
  icons: {
    icon: "/logo-dliam-tours.png",
    apple: "/logo-dliam-tours.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <NavBar />
        <main className="min-h-screen pt-20 sm:pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
