import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Qiyuan Cai",
  description:
    "Qiyuan Cai, a computer science student at the University of Waterloo. Projects in quantitative research, machine learning, and iOS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
