import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavbarDemo from "@/components/resizable-navbar-demo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Money Lens",
  description: "Money Lens Marketing Website",
  openGraph: {
    title: "Money Lens",
    description: "Money Lens Marketing Website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Money Lens Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Money Lens",
    description: "Money Lens Marketing Website",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavbarDemo />
        {children}
      </body>
    </html>
  );
}
