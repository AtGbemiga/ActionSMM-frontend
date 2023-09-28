import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import NavMenu from "./components/Global/Navbar/Navbar";
import { Footer } from "./components/Global/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ActionSMM",
  description: "Affordable and powerful social media management",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <header>
          <NavMenu />
        </header>
        {children}
        <footer className="mt-5">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
