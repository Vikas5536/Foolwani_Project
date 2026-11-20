import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0a0a0d",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Pankaj Foolwani — Entrepreneur & Business Consultant in India",
  description:
    "Pankaj Foolwani — entrepreneur and business consultant. Business consulting, documentation services and travel planning across Zirakpur, Chandigarh, Delhi & Jaipur.",
  keywords: [
    "Pankaj Foolwani",
    "Business Consultant",
    "Entrepreneur in India",
    "Documentation Services",
    "Travel Consultant",
    "Business Development Consultant",
    "Zirakpur",
    "Chandigarh",
    "Delhi",
    "Jaipur"
  ],
  authors: [{ name: "Pankaj Foolwani" }],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg"
  },
  openGraph: {
    type: "website",
    siteName: "Pankaj Foolwani",
    title: "Pankaj Foolwani — Entrepreneur & Business Consultant in India",
    description:
      "Empowering Businesses. Enabling Dreams. Business consulting, documentation and travel services across Zirakpur, Chandigarh, Delhi & Jaipur.",
    locale: "en_IN",
    url: "https://pankajfoolwani.com"
  },
  twitter: {
    card: "summary_large_image",
    title: "Pankaj Foolwani — Entrepreneur & Business Consultant in India",
    description:
      "Empowering Businesses. Enabling Dreams. Business consulting, documentation and travel services across Zirakpur, Chandigarh, Delhi & Jaipur."
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Pankaj Foolwani",
    "jobTitle": "Entrepreneur | Business Consultant | Business Development Strategist",
    "description":
      "Entrepreneur and business consultant focused on simplifying complex services through business solutions, professional documentation assistance and personalised travel planning.",
    "telephone": "+917009589439",
    "email": "digitalservice115@gmail.com",
    "areaServed": ["Zirakpur", "Chandigarh", "Panchkula", "Delhi", "Gurgaon", "Jaipur"],
    "knowsAbout": ["Business Consulting", "Documentation Services", "Travel Planning", "Business Development"]
  };

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Mr And Miss Perfect Trips Private Limited",
    "description": "Professional documentation, government services and travel planning — Zirakpur.",
    "telephone": "+917009589439",
    "email": "digitalservice115@gmail.com",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shop No. 51, Panchkula Complex, Krishna Enclave, Dhakoli",
      "addressLocality": "Zirakpur",
      "addressRegion": "Punjab",
      "postalCode": "160104",
      "addressCountry": "IN"
    },
    "openingHours": "Mo-Su 10:30-21:00",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "38"
    }
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body
        className={`${playfair.variable} ${inter.variable} bg-[#0a0a0d] text-[#f4efe6] antialiased selection:bg-[#d4af37] selection:text-[#0a0a0d] min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
