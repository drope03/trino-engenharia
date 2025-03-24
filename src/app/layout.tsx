import "@/styles/globals.css";
import type { Metadata } from "next";
import { Appbar } from "@/components";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

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
      <body className={`${openSans.className} antialiased`}>
        <Appbar />
        {children}
      </body>
    </html>
  );
}
