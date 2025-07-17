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
  title: "Codex Analitic Sync",
  description: "Investigaciones y análisis disruptivos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white min-h-screen antialiased flex items-center justify-center">
        <div className="w-full">{children}</div>
      </body>
    </html>
  );
}
