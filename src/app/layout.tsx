import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Enabridge — Agentic AI for Business",
    template: "%s | Enabridge",
  },
  description:
    "Enabridge designs and deploys Agentic AI that accelerates business execution — with human oversight, audit trails, and production-grade reliability.",
  metadataBase: new URL("https://enabridge.ai"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Enabridge",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
