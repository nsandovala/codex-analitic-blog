import fs from "fs";
import path from "path";
import Link from "next/link";
import Markdown from "react-markdown";

export default function Article({ params }: { params: { slug: string } }) {
  const filePath = path.join(process.cwd(), "src", "app", "content", `${params.slug}.md`);

  if (!fs.existsSync(filePath)) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center bg-gray-900 text-white p-8">
        <h1 className="text-red-500 text-3xl font-bold mb-4">❌ Artículo no encontrado</h1>
        <Link
          href="/"
          className="bg-yellow-500 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-yellow-400 transition"
        >
          ← Volver al inicio
        </Link>
      </div>
    );
  }

  const content = fs.readFileSync(filePath, "utf-8");

  return (
    <main className="min-h-screen bg-gray-900 text-white px-6 py-12">
      <div className="max-w-3xl mx-auto animate-fadeIn">
        
        {/* ✅ Header centrado */}
        <div className="text-center mb-10">
          <p className="text-yellow-400 text-sm uppercase tracking-widest mb-2">
            Artículo destacado
          </p>
          <h1 className="text-4xl font-extrabold text-yellow-400 drop-shadow-lg">
            Método Learning Loop
          </h1>
          <p className="text-gray-400 text-lg mt-2">
            Descifra el código detrás del poder. Un enigma llevado a la ciencia para revelar lo que nadie quiere que veas.
          </p>
        </div>

        <div className="divider"></div>

        {/* ✅ Contenido centrado */}
        <article className="prose prose-invert prose-lg text-center leading-relaxed">
          <Markdown>{content}</Markdown>
        </article>

        <div className="divider"></div>

        {/* ✅ Botón */}
        <div className="text-center mt-10">
          <Link
            href="/"
            className="inline-block bg-yellow-500 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-yellow-400 hover:scale-105 transition-transform duration-300"
          >
            ← Descubre más
          </Link>
        </div>
      </div>
    </main>
  );
}
