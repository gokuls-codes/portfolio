import type { Metadata } from "next";
import "./globals.css";
import { Mulish } from "next/font/google";

const mulish = Mulish({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gokul Kannan",
  description: "Personal website of Gokul Kannan, a software engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${mulish.className} antialiased dark`}>{children}</body>
    </html>
  );
}
