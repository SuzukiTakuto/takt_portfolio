import "./globals.css";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
// ターミナル風表示用の等幅フォント（--font-mono 経由で Tailwind の font-mono に割り当て）
const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Takuto's portfolio",
  description: "鈴木啄斗のポートフォリオサイト"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // ブラウザ拡張が <html> に属性を差し込むため、この要素自体の
    // 属性差分のみ警告を抑制する（子要素の不一致は従来どおり検出される）
    <html lang="ja" suppressHydrationWarning>
      <body
        className={`${inter.className} ${jetBrainsMono.variable}`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
