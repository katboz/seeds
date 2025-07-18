import { client } from 'lib/prismicClient';
import * as prismicH from '@prismicio/helpers';
import Image from "next/image";

export default async function Home() {
  const articles = await client.getAllByType('article');

  return (
   <main className="bg-yellow-50 min-h-screen p-8">
  <h1
  className="text-7xl font-extrabold mb-12 text-center"
  style={{ fontSize: "3rem", fontWeight: "800", color: "#556B2F", marginBottom: "3rem", textAlign: "center" }} // #556B2F is olive green hex
>
  Seeds Blog
</h1>

  {articles.length === 0 && <p className="text-center text-gray-600">No articles found.</p>}

  <ul className="flex flex-col space-y-4 max-w-4xl mx-auto list-none p-0">
    {articles.map( 
      // eslint-disable-next-line @typescript-eslint/no-explicit-any

      (article: any) => (
      <li
        key={article.id}
        className="bg-white shadow-lg rounded border-2 border-gray-300 p-6 transition-transform hover:scale-102 hover:shadow-2xl"
      >
        <h2 className="text-2xl font-semibold mb-2 text-gray-900">{article.data.title}</h2>
        <p className="text-gray-700 mb-4">{prismicH.asText(article.data.summary)}</p>
        {article.data.image?.url && (
         <Image
    src={article.data.image.url}
    alt={article.data.title}
    width={150}       // specify width and height or layout="responsive"
    height={100}
    className="rounded-lg max-w-full h-auto"
  />
        )}
      </li>
    ))}
  </ul>
</main>


  );
}
