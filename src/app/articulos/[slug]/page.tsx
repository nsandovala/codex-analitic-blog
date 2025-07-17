import fs from "fs";
import path from "path";
import { GetStaticProps, GetStaticPaths } from "next";

interface PageProps {
  slug: string;
  content: string;
}

export default function Article({ content }: PageProps) {
  return (
    <main className="min-h-screen bg-gray-900 text-white px-6 py-12">
      <div className="max-w-3xl mx-auto animate-fadeIn">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </main>
  );
}

// Genera las rutas dinámicas
export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync(path.join(process.cwd(), "src", "app", "content"));

  const paths = files.map((filename) => ({
    params: { slug: filename.replace(".md", "") },
  }));

  return {
    paths,
    fallback: false, // muestra 404 si no existe
  };
};

// Genera contenido dinámico
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const filePath = path.join(process.cwd(), "src", "app", "content", `${slug}.md`);

  const content = fs.readFileSync(filePath, "utf-8");

  return {
    props: {
      slug,
      content,
    },
  };
};
