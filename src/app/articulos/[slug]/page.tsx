import fs from "fs";
import path from "path";
import Markdown from "react-markdown";

interface Params {
  slug: string;
}

// ✅ Generar rutas estáticas para todos los archivos .md
export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), "src", "app", "content"));
  return files.map((filename) => ({
    slug: filename.replace(".md", ""),
  }));
}

// ✅ Página dinámica
export default async function ArticlePage({ params }: { params: Params }) {
  const filePath = path.join(process.cwd(), "src", "app", "content", `${params.slug}.md`);

  if (!fs.existsSync(filePath)) {
    return <div className="text-center text-red-500 text-2xl mt-10">⚠ Artículo no encontrado</div>;
  }

  const content = fs.readFileSync(filePath, "utf-8");

  return (
    <main className="min-h-screen bg-gray-900 text-white px-6 py-12">
      <div className="max-w-3xl mx-auto animate-fadeIn">
        <h1 className="text-4xl font-bold mb-6 text-yellow-400">Artículo destacado</h1>
        <article className="prose prose-invert prose-lg text-center leading-relaxed">
          <Markdown>{content}</Markdown>
        </article>
        <div className="mt-10 text-center">
          <a
            href="/"
            className="inline-block bg-yellow-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-yellow-400 hover:scale-105 transition-transform duration-300"
          >
            ← Volver al inicio
          </a>
        </div>
      </div>
    </main>
  );
}
