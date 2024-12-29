import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./_components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WEB-SHOPPING",
  description: "e-commerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark w-full mostly-customized-scrollbar`}>
        <section className="min-h-[100vh]">
          {children}
        </section>
        <Footer></Footer>
      </body>
    </html>
  );
}
