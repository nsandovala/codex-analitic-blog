import fs from "fs";
import path from "path";
import Markdown from "react-markdown";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params; // Espera el promise
  const filePath = path.join(process.cwd(), "src", "app", "content", `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return (
      <div className="text-center text-red-500 mt-10">
        <h1>Artículo no encontrado</h1>
      </div>
    );
  }

  const content = fs.readFileSync(filePath, "utf-8");

  return (
    <main className="min-h-screen bg-gray-900 text-white px-6 py-12">
      <article className="prose prose-invert mx-auto text-center leading-relaxed">
        <Markdown>{content}</Markdown>
      </article>
    </main>
  );
}
