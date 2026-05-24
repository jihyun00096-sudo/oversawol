import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OVERLAB — Future Archive",
  description: "Upcycled leisure sports equipment reimagined as daily design objects. Archive-driven fashion platform with editorial experiences.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  keywords: ["upcycling", "sustainability", "fashion", "archive", "design", "sports"],
  openGraph: {
    title: "OVERLAB — Future Archive",
    description: "Upcycled leisure sports equipment reimagined as daily design objects.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=Inter:wght@300;400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="relative bg-bg-primary text-text-primary">
        {children}
      </body>
    </html>
  );
}
