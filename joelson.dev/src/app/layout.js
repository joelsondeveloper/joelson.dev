import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata = {
  title: "Joelson.dev site",
  description: "um portfolio criado por joelson developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body
        className={`${inter.variable} antialiased `}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
