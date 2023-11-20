import type { Metadata } from "next";
import { Inter, Vina_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from './components/Footer'

const inter = Inter({ subsets: ["latin"] });
const vinasans = Vina_Sans({subsets: ["latin"], weight: '400'})

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
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
