import type { Metadata } from "next";
import "./globals.css";
import { MegaMenu } from "@/components/navigation/MegaMenu";
import { Footer } from "@/components/Footer";
import { Noto_Sans_Arabic } from "next/font/google";
import FooterV2 from "@/components/FooterV2";

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "منصة إدارة علاقات العملاء والأتمتة",
  description: "منصة إدارة علاقات العملاء والأتمتة",
  icons: {
    icon: "/icons/logo.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html dir="rtl" lang="ar">
      <body className={notoSansArabic.className}>
        <MegaMenu />
        {children}
        <FooterV2 />
      </body>
    </html>
  );
}
