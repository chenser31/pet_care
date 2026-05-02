import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "暖爪宠物洗护 | 温馨专业的宠物护理门店",
  description:
    "暖爪宠物洗护提供猫犬洗澡、美容修剪、皮毛护理、幼宠适应洗护和上门接送服务。"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
