import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const siteTitle = "Yuyu Creative | Malaysia Short Video Company for Personal Branding & Business Growth";
const siteDescription =
  "Yuyu Creative Malaysia is a short video and personal branding company focused on real business results. We help clients, professionals, and brands use short video content to build trust, show expertise, and attract the right clients.";
const socialImage = "/images/yuyu-social-preview.png";

export const metadata: Metadata = {
  metadataBase: new URL("https://yuyu-creative.my"),
  applicationName: "Yuyu Creative",
  title: siteTitle,
  description: siteDescription,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png", sizes: "64x64" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "180x180" }],
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "/",
    siteName: "Yuyu Creative",
    locale: "en_MY",
    type: "website",
    images: [
      {
        url: socialImage,
        width: 1200,
        height: 1200,
        alt: "Yuyu Creative short video agency Malaysia",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: siteTitle,
    description: siteDescription,
    images: [socialImage],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
