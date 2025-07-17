import fs from "fs";
import path from "path";

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), "src", "app", "content"));
  return files.map((filename) => ({
    slug: filename.replace(".md", ""),
  }));
}

export default async function Article({ params }: { params: { slug: string } }) {
  const filePath = path.join(process.cwd(), "src", "app", "content", `${params.slug}.md`);

  if (!fs.existsSync(filePath)) {
    return <div>Artículo no encontrado</div>;
  }

  const content = fs.readFileSync(filePath, "utf-8");

  return (
    <main className="min-h-screen bg-gray-900 text-white px-6 py-12">
      <div className="max-w-3xl mx-auto animate-fadeIn">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </main>
  );
}
