import type { Metadata } from "next";
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
  metadataBase: new URL('https://logiklabs.io'),
  title: {
    default: "LogikLabs - Validate Your Idea in Weeks, Not Months",
    template: "%s | LogikLabs"
  },
  description: "Rapid MVP and POC development for startups and founders. Ship working products in 2-4 weeks with AI-accelerated development. Get to market fast and validate with real users.",
  keywords: [
    "MVP development",
    "startup development",
    "rapid prototyping",
    "AI development",
    "POC development",
    "software development for startups",
    "quick MVP",
    "AI-powered development",
    "solo founder development",
    "idea validation"
  ],
  authors: [{ name: "LogikLabs" }],
  creator: "LogikLabs",
  publisher: "LogikLabs",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://logiklabs.io",
    title: "LogikLabs - Validate Your Idea in Weeks, Not Months",
    description: "Rapid MVP and POC development for startups and founders. Ship working products in 2-4 weeks with AI-accelerated development.",
    siteName: "LogikLabs",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "LogikLabs - MVP Development for Startups"
      }
    ]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: 'https://logiklabs.io',
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
