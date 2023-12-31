import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";

const inter = Noto_Sans({
  weight: ["300", "400", "600", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
