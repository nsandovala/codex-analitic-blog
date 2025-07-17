import fs from "fs";
import path from "path";
import Markdown from "react-markdown";

interface Props {
  params: {
    slug: string;
  };
}

// ✅ App Router usa `generateStaticParams` para rutas dinámicas
export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), "src/app/content"));
  return files.map((filename) => ({
    slug: filename.replace(".md", ""),
  }));
}

export default function ArticlePage({ params }: Props) {
  const filePath = path.join(process.cwd(), "src/app/content", `${params.slug}.md`);

  if (!fs.existsSync(filePath)) {
    return <div>Artículo no encontrado</div>;
  }

  const content = fs.readFileSync(filePath, "utf-8");

  return (
    <main className="min-h-screen bg-gray-900 text-white px-6 py-12">
      <div className="max-w-3xl mx-auto animate-fadeIn">
        <h1 className="text-yellow-400 text-4xl font-extrabold drop-shadow-lg mb-6">
          {params.slug.replace(/-/g, " ")}
        </h1>
        <article className="prose prose-invert prose-lg text-center leading-relaxed">
          <Markdown>{content}</Markdown>
        </article>
      </div>
    </main>
  );
}
