import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";
import { manrope } from "@/theme/fonts";

import ThemeRegistry from "@/theme/ThemeRegistry";
import { Header } from "@/components/common/header";
import { Footer } from "@/components/common/footer";
import { WhatsAppButton } from "@/components/common/whatsapp-button";
import { AIChatbot } from "@/components/common/ai-chatbot";
import { Box } from "@mui/material";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vemzo Technologies | A Digital Agency",
  description: "A Digital Agency",
  icons: {
    icon: "/vemzo-logo.png",
    shortcut: "/vemzo-logo.png",
    apple: "/vemzo-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased ${manrope.variable}`}>
      <body className="min-h-full">
        <ThemeRegistry>
          <Header />
          <main>
            <Box sx={{ pt: { xs: 15, sm: 20 } }}>{children}</Box>
          </main>
          <Footer />
          <WhatsAppButton />
          <AIChatbot />
        </ThemeRegistry>
      </body>
    </html>
  );
}

