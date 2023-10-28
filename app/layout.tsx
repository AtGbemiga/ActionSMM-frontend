import "./globals.css";
import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import NavMenu from "./components/Global/Navbar/Navbar";
import { Footer } from "./components/Global/Footer/Footer";
import { Providers } from "./redux/provider";

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
      <body>
        <Providers>
          <header>
            <NavMenu />
          </header>
          {children}
          <footer>
            <Footer />
          </footer>
        </Providers>
      </body>
    </html>
  );
}
