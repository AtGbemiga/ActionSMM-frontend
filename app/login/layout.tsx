import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | ActionSMM",
  description: "Affordable and powerful social media management",
};

const inter = Inter({ subsets: ["latin"] });

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className={inter.className}>{children}</main>
    </>
  );
}
