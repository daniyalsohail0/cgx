import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cyber Genesis X",
  description: "Building future together.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Navbar /> */}
        <nav className="flex justify-center items-center sticky">
          <section className="flex justify-between items-center w-3/4">
            <Image
              src={`/daniyal-final.png`}
              alt="cgx logo"
              width={150}
              height={75}
            />
            <button className="bg-blue-600 text-white px-3 py-2 rounded-full flex justify-center items-center gap-2 text-base hover:bg-blue-700 hover:gap-4 ease-in-out duration-200">
             Contact Us
            <FaArrowRight />
          </button>
          </section>
        </nav>
        {children}
        <Footer />
      </body>
    </html>
  );
}
