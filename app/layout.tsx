import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Iceem.tn | Ingénierie & Énergie",
  description:
    "Iceem.tn accompagne les industries tunisiennes avec des solutions d'ingénierie, d'énergie et de maintenance sur mesure.",
  metadataBase: new URL("https://iceem.tn"),
  openGraph: {
    title: "Iceem.tn | Ingénierie & Énergie",
    description:
      "Solutions innovantes pour l'ingénierie, l'énergie et la maintenance industrielle en Tunisie.",
    url: "https://iceem.tn",
    siteName: "Iceem",
    locale: "fr_FR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-slate-900 antialiased`}>{children}</body>
    </html>
  );
}
