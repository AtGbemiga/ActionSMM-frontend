import "./globals.css";
import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import NavMenu from "./components/Global/mainNav/Navbar";
import { Footer } from "./components/Global/footerFolder/Footer";
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
        {/* <div id="fb-root"></div>
        <script
          async
          defer
          crossOrigin="anonymous"
          src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v19.0"
          nonce="kEVSeG3J"
        ></script> */}
      </body>
    </html>
  );
}
