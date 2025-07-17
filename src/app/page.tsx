"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-dark text-center px-4">
      {/* Logo */}
      <div className="animate-fadeIn">
        <Image
          src="/logo.png"
          alt="Logo"
          width={100}
          height={100}
          className="mb-6 rounded-full shadow-lg"
        />
      </div>

      {/* Título */}
      <h1 className="text-4xl md:text-6xl font-extrabold text-yellow-400 tracking-wide drop-shadow-lg mb-4">
        Método Learning Loop
      </h1>

      {/* Subtítulo */}
      <p className="text-gray-300 text-lg md:text-2xl max-w-2xl mx-auto mb-8">
        Códex que rompe paradigmas. Investigaciones y análisis que desafían la lógica.
      </p>

      {/* Botón Apple Style */}
      <Link
        href="/articulos/metodo-learning-loop"
        className="inline-block bg-yellow-400 bg-opacity-80 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 hover:scale-105 transition transform duration-300 shadow-lg"
      >
        Leer artículo →
      </Link>
    </main>
  );
}
