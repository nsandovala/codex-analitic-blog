import fs from "fs";
import path from "path";
import Markdown from "react-markdown";
import Link from "next/link";

interface Props {
  params: { slug: string };
}

// ✅ Genera rutas dinámicas con App Router
export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), "src", "app", "content"));
  return files.map((filename) => ({
    slug: filename.replace(".md", ""),
  }));
}

// ✅ Página dinámica para renderizar contenido Markdown
export default function ArticlePage({ params }: Props) {
  const filePath = path.join(process.cwd(), "src", "app", "content", `${params.slug}.md`);

  if (!fs.existsSync(filePath)) {
    return (
      <div className="text-center text-red-500 mt-10">
        <h1>⚠ Artículo no encontrado</h1>
        <Link
          href="/"
          className="inline-block mt-4 bg-yellow-500 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-yellow-400 hover:scale-105 transition-transform duration-300"
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
        {/* ✅ Header */}
        <h1 className="text-yellow-400 text-4xl font-extrabold mb-4 drop-shadow-lg">
          Artículo Destacado
        </h1>
        <p className="text-gray-400 text-lg mb-6">
          Descifra el código detrás del poder. Un enigma llevado a la Ciencia para revelar lo que nadie quiere que veas.
        </p>

        {/* ✅ Contenido Markdown */}
        <article className="prose prose-invert prose-lg leading-relaxed text-center">
          <Markdown>{content}</Markdown>
        </article>

        {/* ✅ Botón para volver */}
        <div className="text-center mt-10">
          <Link
            href="/"
            className="inline-block bg-yellow-500 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-yellow-400 hover:scale-105 transition-transform duration-300"
          >
            ← Volver al inicio
          </Link>
        </div>
      </div>
    </main>
  );
}
