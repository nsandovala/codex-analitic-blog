import fs from "fs";
import path from "path";
import Markdown from "react-markdown";

interface Props {
  params: { slug: string };
}

// ✅ Función para generar rutas dinámicas en App Router
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
    return <div className="text-center text-red-500 mt-10">⚠ Artículo no encontrado</div>;
  }

  const content = fs.readFileSync(filePath, "utf-8");

  return (
    <main className="min-h-screen bg-gray-900 text-white px-6 py-12">
      <div className="max-w-3xl mx-auto animate-fadeIn">
        {/* Contenido en Markdown */}
        <article className="prose prose-invert prose-lg text-center leading-relaxed">
          <Markdown>{content}</Markdown>
        </article>

        {/* Botón para volver */}
        <div className="text-center mt-10">
          <a
            href="/"
            className="inline-block bg-yellow-500 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-yellow-400 hover:scale-105 transition-transform duration-300"
          >
            ← Volver al inicio
          </a>
        </div>
      </div>
    </main>
  );
}
