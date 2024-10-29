import type { Metadata } from "next";
import "./globals.css";
import { Mulish } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const mulish = Mulish({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gokul Kannan",
  description:
    "Portfolio website of Gokul Kannan. Here I showcase my work experience, skills and projects. If you need to get in touch, feel free to reach out via my social links.",
  robots: "follow, index",
  twitter: {
    card: "summary_large_image",
    title: "Gokul's Portfolio site",
    description:
      "Portfolio website of Gokul Kannan. Here I showcase my work experience, skills and projects. If you need to get in touch, feel free to reach out via my social links.",
    creator: "@meIsGokul",
    images: ["https://gokulkannanr.in/preview.png"],
  },
  openGraph: {
    title: "Gokul Kannan, Software Engineer",
    description:
      "Portfolio website of Gokul Kannan. Here I showcase my work experience, skills and projects. If you need to get in touch, feel free to reach out via my social links.",
    url: "https://gokulkannanr.in",
    siteName: "Gokul's Portfolio site",
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
