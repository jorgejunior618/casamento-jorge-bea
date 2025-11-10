import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseUrl = "https://casamento-jorge-bea.vercel.app";

export const metadata: Metadata = {
  title: "Jorge & Beatriz - Chá de casa nova",
  description:
    "Informações do casal, do cha de casa nova e como ajudá-los nessa nova jornada",
  openGraph: {
    title: "Jorge & Beatriz - Chá de casa nova",
    description:
      "Informações do casal, do chá de casa nova e como ajudá-los nessa nova jornada",
    url: baseUrl,
    siteName: "Jorge & Beatriz - Chá de casa nova",
    images: [
      {
        url: "/image/casal-mini.png",
        width: 1200,
        height: 630,
        alt: "Jorge & Beatriz - Chá de casa nova",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-Br">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
