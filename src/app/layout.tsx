import type { Metadata } from "next";
import "./globals.css";
import { Mulish } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const mulish = Mulish({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gokul Kannan",
  description: "Personal website of Gokul Kannan, a software engineer.",
  robots: "follow, index",
  twitter: {
    card: "summary_large_image",
    title: "Gokul Kannan",
    description: "Personal website of Gokul Kannan, a software engineer.",
    creator: "@meIsGokul",
  },
  openGraph: {
    title: "Gokul Kannan",
    description: "Personal website of Gokul Kannan, a software engineer.",
    url: "https://gokulkannanr.in",
    siteName: "Gokul Kannan",
    locale: "en-US",
    type: "website",
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
