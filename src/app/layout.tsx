import type { Metadata } from "next";
import localFont from "next/font/local";
import { SpriteSheet } from "@/components/icons";
import "./globals.css";

const stanleyFavorit = localFont({
  src: [
    { path: "../../public/fonts/StanleyFavorit-Light.woff2", weight: "300", style: "normal" },
    { path: "../../public/fonts/StanleyFavorit-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/StanleyFavorit-Medium.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/StanleyFavorit-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-stanley",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Stanley 1913 Drinkware & Gear | Bottles, Tumblers, Growlers & More",
  description:
    "Shop Stanley 1913 drinkware and gear. Leakproof bottles, tumblers, mugs, lunch boxes, coolers and more. Built for life.",
  icons: {
    icon: "/seo/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${stanleyFavorit.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <SpriteSheet />
        {children}
      </body>
    </html>
  );
}
