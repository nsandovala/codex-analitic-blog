import fs from "fs";
import path from "path";

interface PageProps {
  params: {
    slug: string;
  };
}

export default function Article({ params }: PageProps) {
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
