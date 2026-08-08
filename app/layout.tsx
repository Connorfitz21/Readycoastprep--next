import SiteAnalytics from "./components/SiteAnalytics";
import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ready Coast Prep",
  description: "Practical household and coastal preparedness planning tools.",
  metadataBase: new URL("https://readycoastprep.com"),
  openGraph: {
    title: "Ready Coast Prep",
    description: "Prepare today. Protect tomorrow.",
    url: "https://readycoastprep.com",
    siteName: "Ready Coast Prep",
    images: [{ url: "/ready-coast-prep-social.png", width: 1238, height: 296 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ready Coast Prep",
    description: "Prepare today. Protect tomorrow.",
    images: ["/ready-coast-prep-social.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
 <body className="min-h-full flex flex-col">
  <Script
    src="https://www.googletagmanager.com/gtag/js?id=G-DCSYPMH0F9"
    strategy="afterInteractive"
  />
  <Script id="google-analytics" strategy="afterInteractive">
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-DCSYPMH0F9');
    `}
  </Script>

  {children}
        <SiteAnalytics />
</body>
    </html>
  );
}

