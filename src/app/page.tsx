import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center px-4 bg-gray-900">
      <h1 className="text-5xl md:text-7xl font-extrabold text-yellow-400 tracking-wide drop-shadow-lg mt-4">
        Método Learning Loop
      </h1>
      <p className="text-gray-300 text-lg md:text-2xl max-w-2xl mx-auto mt-4 mb-8">
        <strong>Códex que rompe paradigmas.</strong> Investigaciones y análisis que desafían la lógica.
        <span className="block text-gray-400 text-lg max-w-2xl mx-auto mt-4">
          Un código moderno, alimentado con datos científicos reales.
        </span>
        Descubre cómo la lógica y la evidencia revelan los patrones que los poderosos no quieren que entiendas.
      </p>
      <Link
        href="/articulos/metodo-learning-loop"
        className="inline-block bg-yellow-500 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-yellow-400 hover:scale-105 transition-transform duration-300 mt-8"
      >
        Leer artículo →
      </Link>
    </main>
  );
}
