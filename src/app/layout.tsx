import type { Metadata } from "next";
import "./globals.css";
import { Mulish } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const mulish = Mulish({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gokul Kannan",
  description:
    "Hi, I am Gokul Kannan, a software engineer based in Bengaluru, India. This is my portfolio website. Here I showcase my work experience, skills and projects. If you need to get in touch, feel free to reach out via my social links.",
  keywords: [
    "Gokul Kannan",
    "Gokul",
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
  ],
  robots: "follow, index",
  twitter: {
    card: "summary_large_image",
    title: "Gokul Kannan | Software Engineer",
    description:
      "Hi, I am Gokul Kannan, a software engineer based in Bengaluru, India. This is my portfolio website. Here I showcase my work experience, skills and projects. Feel free to reach out via my social links.",
    creator: "@meIsGokul",
    images: ["https://gokulkannanr.in/preview.png"],
  },
  openGraph: {
    title: "Gokul Kannan | Software Engineer",
    description:
      "Hi, I am Gokul Kannan, a software engineer based in Bengaluru, India. This is my portfolio website. Here I showcase my work experience, skills and projects. If you need to get in touch, feel free to reach out via my social links.",
    url: "https://gokulkannanr.in",
    siteName: "Gokul's personal website",
    locale: "en-US",
    type: "website",
    images: [
      {
        url: "https://gokulkannanr.in/preview.png",
        width: 1200,
        height: 630,
        alt: "Gokul Kannan",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${mulish.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
