import type { Metadata } from "next";
import { Fira_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";
import MeetingsSlideIn from "@/components/MeetingsSlideIn";
import ConsentMode from "@/components/analytics/ConsentMode";
import GoogleTagManager, {
  GoogleTagManagerNoScript,
} from "@/components/analytics/GoogleTagManager";
import MetaPixel from "@/components/analytics/MetaPixel";

const firaSans = Fira_Sans({
  variable: "--font-fira-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://slidedrain.no";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Slidedrain // Neste generasjons gulvsluk",
  description:
    "Maksimer prosjektets lønnsomhet med markedets mest fleksible tilvalgsløsning for gulvsluk.",
  icons: {
    icon: "https://slidedrain.no/wp-content/uploads/2020/08/cropped-S-icon_Orange-32x32.webp",
  },
  openGraph: {
    type: "website",
    locale: "nb_NO",
    siteName: "Slidedrain",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nb" className={`${firaSans.variable} antialiased`}>
      <head>
        <ConsentMode />
        <GoogleTagManager />
        <MetaPixel />
      </head>
      <body className="min-h-screen flex flex-col">
        <GoogleTagManagerNoScript />
        {children}
        <MeetingsSlideIn />
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  );
}
