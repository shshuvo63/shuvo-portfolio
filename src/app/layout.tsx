import type { Metadata, Viewport } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Effects from "@/components/ui/Effects";
import { site } from "@/data/site";

const body = DM_Sans({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display", display: "swap" });

const description =
  "Portfolio of Shamsul Haque Shuvo, a full-stack web developer from Bangladesh building responsive web apps and exploring data analytics.";

export const metadata: Metadata = {
  title: { default: `${site.name} | ${site.title}`, template: `%s | ${site.name}` },
  description,
  openGraph: {
    title: `${site.name} | ${site.title}`,
    description: site.tagline,
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = { viewportFit: "cover", themeColor: "#071118" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" className={`${body.variable} ${display.variable}`} suppressHydrationWarning>
      <body>
        <noscript>
          <style>{`.rv{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <Navbar />
        {children}
        <Footer />
        <Effects />
      </body>
    </html>
  );
}
