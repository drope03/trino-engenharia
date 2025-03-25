import "@/styles/globals.css";
import type { Metadata } from "next";
import { Appbar } from "@/components";
import { Inter, Poppins } from "next/font/google";
import { description, keywords } from "@/constants";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Trino Engenharia",
  description: description,
  keywords: keywords,
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
      <body className={`${inter.className} ${poppins.className} antialiased`}>
        <Appbar />
        {children}
      </body>
    </html>
  );
}
