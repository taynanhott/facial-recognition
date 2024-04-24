import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"

import { Head } from "@/components/Html/Header/head";
import { Footer } from "@/components/Html/Footer/footer";
import dynamic from 'next/dynamic';
import { ReactNode } from "react";
import ParticlesComponent from "@/components/Resources/Particles/particles";

const DynamicMouseCircle = dynamic(() => import('@/components/Resources/MouseCircle/mouse'), { ssr: false });

interface Props {
  children: ReactNode
}

export const metadata: Metadata = {
  title: "Portfólio Taynan Z.Hott",
  description: "Portfólio Taynan Z.Hott",
};

export default function RootLayout({ children }: Props) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head>
        </head>
        <body>
          <DynamicMouseCircle />
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ParticlesComponent id="particles" className="z-0 opacity-5" />
            <Head />
            {children}
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
