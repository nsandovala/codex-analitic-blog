import fs from "fs";
import path from "path";
import Markdown from "react-markdown";
import Link from "next/link";

export default async function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const filePath = path.join(process.cwd(), "src", "app", "content", `${params.slug}.md`);

  if (!fs.existsSync(filePath)) {
    return (
      <div className="text-center text-red-500 mt-10">
        <h1>Artículo no encontrado</h1>
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
        <h1 className="text-yellow-400 text-4xl font-extrabold mb-6 drop-shadow-lg">
          Artículo Destacado
        </h1>
        <article className="prose prose-invert prose-lg text-center leading-relaxed">
          <Markdown>{content}</Markdown>
        </article>

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
