import type { Metadata } from "next";
import type { ReactNode } from "react";
import NavBar from "@/Components/NavBar";
import Footer from "@/Components/Footer";
import "./globals.css";
import "../App.css";
import "../Views/PrincipalPage/index.css";
import "../Views/TravelDetails/styles.css";
import "../Views/services/styles.css";
import "../Components/NavBar/styles.css";
import "../Components/Menu/styles.css";
import "../Components/TravelCard/styles.css";
import "../Components/Gallery/styles.css";
import "../Components/Carrousel/styles.css";
import "../Components/Services/styles.css";
import "../Components/ServiceCard/styles.css";
import "../Components/InformationCard/styles.css";
import "../Components/Button/styles.css";
import "../Components/ButtonWhatsapp/styles.css";
import "../Components/Footer/styles.css";

export const metadata: Metadata = {
  title: "D' Liam Tours",
  description: "Agencia de viajes y transporte turistico en Republica Dominicana.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <div className="layout">
          <header className="layout__header">
            <NavBar />
          </header>

          <main className="layout__main">{children}</main>

          <footer className="layout__footer">
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
}
