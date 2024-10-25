import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Mulish } from "next/font/google";

const mulish = Mulish({ subsets: ["latin"] });

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Gokul Kannan",
  description: "Personal website of Gokul Kannan, a software developer.",
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
