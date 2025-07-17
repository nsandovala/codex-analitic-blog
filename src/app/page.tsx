"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center text-center min-h-screen px-6 sm:px-12 lg:px-24">
      {/* Logo */}
      <div className="animate-fadeIn mb-6">
        <Image
          src="/logo.png"
          alt="Logo"
          width={120}
          height={120}
          className="rounded-full shadow-lg"
        />
      </div>

      {/* Título */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-yellow-400 tracking-wide drop-shadow-lg mb-4">
        Método Learning Loop
      </h1>

      {/* Subtítulo */}
      <p className="text-gray-300 text-lg sm:text-xl md:text-2xl max-w-2xl mb-8">
        Códex que rompe paradigmas. Investigaciones y análisis que desafían la lógica.
      </p>

      {/* Botón Estilo Apple */}
      <Link
        href="/articulos/metodo-learning-loop"
        className="inline-block bg-yellow-400 bg-opacity-80 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 hover:scale-105 transition-all duration-300 shadow-xl"
      >
        Leer artículo →
      </Link>
    </main>
  );
}
