import type { Metadata } from "next";

// Importa las fuentes Geist y Geist_Mono desde Google Fonts
import { Geist, Geist_Mono } from "next/font/google";

// Estilos globales
import "./globals.css";

// Navbar que se usará en todas las páginas
import Navbar from "@/components/Navbar";

// Carga y configura la fuente Geist Sans
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Carga y configura la fuente Geist Mono
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadatos globales
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
