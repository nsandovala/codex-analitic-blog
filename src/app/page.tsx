"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-center px-6">
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

      {/* Título principal */}
      <h1 className="text-4xl md:text-6xl font-extrabold text-yellow-400 tracking-wide drop-shadow-lg mb-4">
        Método Learning Loop
      </h1>

      {/* Subtítulo */}
      <p className="text-gray-300 text-lg md:text-2xl max-w-2xl mx-auto mb-8 leading-relaxed">
        Códex que rompe paradigmas. Investigaciones y análisis que desafían la lógica.
      </p>

      {/* Botón estilo Apple */}
      <Link
        href="/articulos/metodo-learning-loop"
        className="inline-block bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-300 hover:scale-105 transition-all duration-300 shadow-xl"
      >
        Leer artículo →
      </Link>
    </main>
  );
}
