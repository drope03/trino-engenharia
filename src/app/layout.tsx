import "@/styles/globals.css";
import type { Metadata } from "next";
import { Appbar } from "@/components";

export const metadata: Metadata = {
  title: "Trino Engenharia",
  description: "Trino Engenharia - Terraplanagem e transporte",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#fab603" />
      </head>
      <body className="antialiased">
        <Appbar />
        {children}
      </body>
    </html>
  );
}
