import type { Metadata } from "next";
import "./reset.css";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"

import { Head } from "@/components/Html/Header/head";
import { Footer } from "@/components/Html/Footer/footer";
import { ReactNode } from "react";
import MenuToggle from "@/components/Resources/MenuToggle/button";

interface Props {
  children: ReactNode
}

export const metadata: Metadata = {
  title: "Portfólio Taynan Z.Hott",
  description: "Portfólio Taynan Z.Hott",
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MenuToggle />
          <Head />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
