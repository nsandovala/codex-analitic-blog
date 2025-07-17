import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { useEffect } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Codex Analitic Sync",
  description: "Investigaciones y análisis disruptivos",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.protocol !== "https:") {
      window.location.href = `https://${window.location.host}${window.location.pathname}`;
    }
  }, []);

  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-gray-900 text-white antialiased">
        <div className="min-h-screen">{children}</div>
      </body>
    </html>
  );
}
