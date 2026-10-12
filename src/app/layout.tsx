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
  title: "深圳润裕商贸有限公司 | SHENZHEN RUNYU TRADING CO., LTD. - 不锈钢制品专业制造 OEM&ODM",
  description:
    "深圳润裕商贸有限公司 (SHENZHEN RUNYU TRADING CO., LTD.) 专注于高品质不锈钢制品研发与制造，提供专业的 OEM & ODM 代工合作服务。官方网址：http://www.runyu.shop/",
  icons: {
    icon: "/imgs/trademark.jpg",
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
