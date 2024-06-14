import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./Header";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "INSTANT NEWS",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <head/>

      <body className="bg-gray-100 dark:bg-zinc-900 transition-all
      duration-700">
        
        <Header  />
        <div className="max-w-6xl mx-auto">
          
        {children}

        </div>
        </body>
    </html>
  );
}
