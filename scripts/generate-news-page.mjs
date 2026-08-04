import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";

const route = "news/klimori-announces-600k-funding-from-tiphub";
const outputPath = resolve("dist", route, "index.html");
const title = "Klimori Announces $600K Funding from TipHub | Klimori";
const description = "Klimori announced $600K in funding from TipHub on 5 February 2026 to support its mission to improve energy intelligence for commercial buildings.";
const url = "https://www.klimori.com/news/klimori-announces-600k-funding-from-tiphub";
const image = "https://www.klimori.com/assets/hero-floorplate.png";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "Klimori announces $600K in funding from TipHub",
  datePublished: "2026-02-05",
  dateModified: "2026-02-05",
  description,
  mainEntityOfPage: url,
  image: [image],
  author: { "@type": "Organization", name: "Klimori", url: "https://www.klimori.com" },
  publisher: { "@type": "Organization", name: "Klimori", url: "https://www.klimori.com" },
};

let html = await readFile(resolve("dist", "index.html"), "utf8");
html = html
  .replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
  .replace(/<meta name="description" content="[^"]*"\s*\/?>/, `<meta name="description" content="${description}" />`)
  .replace("</head>", `    <link rel="canonical" href="${url}" />
    <meta property="og:site_name" content="Klimori" />
    <meta property="og:type" content="article" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:image" content="${image}" />
    <meta property="article:published_time" content="2026-02-05" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <meta name="twitter:image" content="${image}" />
    <script type="application/ld+json">${JSON.stringify(structuredData)}</script>
  </head>`);

await mkdir(dirname(outputPath), { recursive: true });
await writeFile(outputPath, html);
