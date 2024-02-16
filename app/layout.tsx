import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Fotter from "@/components/Fotter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: " Travel",
  description: "Travel UI/UX Project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="relative overflow-hidden">{children}</main>
        <Fotter />
      </body>
    </html>
  );
}
