import type { Metadata } from "next";
import { Fira_Sans } from "next/font/google";
import "./globals.css";

const firaSans = Fira_Sans({
  variable: "--font-fira-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Slidedrain // Neste generasjons gulvsluk",
  description:
    "Maksimer prosjektets lønnsomhet med markedets mest fleksible tilvalgsløsning for gulvsluk.",
  icons: {
    icon: "https://slidedrain.no/wp-content/uploads/2020/08/cropped-S-icon_Orange-32x32.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nb" className={`${firaSans.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
