import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Nithya Raveendran | Business Analyst",
    short_name: "Nithya Raveendran",
    description:
      "Nithya Raveendran — Business Analyst, Process Analyst, and Systems Analyst working at the intersection of business strategy and technology.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "64x64",
        type: "image/png",
      },
      {
        src: "/favicon.ico",
        sizes: "64x64",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    categories: [
      "portfolio",
      "business analysis",
      "process design",
      "systems analysis",
      "ai tools",
    ],
    lang: "en",
    dir: "ltr",
    scope: "/",
  };
}
