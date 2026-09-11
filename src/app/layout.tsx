import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloating } from "@/components/WhatsAppFloating";
import { MobileQuickBar } from "@/components/MobileQuickBar";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://buildercambridge.com"),
  title: {
    default: "BuilderCambridge.com - House Builders in Cambridge | Building Contractors UK",
    template: "%s | Builder Cambridge",
  },
  description:
    "BuilderCambridge.com is Cambridge's premier building contractor specializing in bespoke house extensions, loft conversions, period refurbishments, and new builds across CB1-CB25. Established 2007.",
  keywords: [
    "Builders Cambridge",
    "House Builders Cambridge",
    "Home Extensions Cambridge",
    "Loft Conversions Cambridge",
    "Building Contractors UK",
    "Kitchen Renovations Cambridge",
    "Bathroom Fitters Cambridge",
    "Commercial Builders Cambridge",
    "Refurbishments Cambridgeshire",
    "New Builds Cambridge",
    "Underpinning Cambridge",
    "Roofing Cambridge",
  ],
  authors: [{ name: "Builder Cambridge", url: "https://buildercambridge.com" }],
  creator: "Builder Cambridge",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://buildercambridge.com",
    siteName: "Builder Cambridge",
    title: "BuilderCambridge.com - Premier House Builders in Cambridge",
    description:
      "Prestigious provider of construction-focused home extensions, loft conversions, and interior renovations across Cambridge and Cambridgeshire.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Builder Cambridge Luxury House Extensions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BuilderCambridge.com - House Builders in Cambridge",
    description:
      "Prestigious home extensions, loft conversions, and luxury renovations in Cambridge.",
    images: ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "Builder Cambridge",
    alternateName: "BuilderCambridge.com",
    url: "https://buildercambridge.com",
    logo: "https://buildercambridge.com/logo.svg",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    description:
      "Premier house builders and building contractors in Cambridge providing house extensions, loft conversions, renovations, and new builds.",
    telephone: "+441223782433",
    email: "info@buildercambridge.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cambridge",
      addressRegion: "Cambridgeshire",
      postalCode: "CB1",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 52.2053,
      longitude: 0.1218,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "33",
      bestRating: "5",
      worstRating: "1",
    },
    priceRange: "££ - ££££",
    areaServed: [
      "Cambridge",
      "Trumpington",
      "Newnham",
      "Chesterton",
      "Mill Road",
      "Grantchester",
      "Cherry Hinton",
      "Girton",
      "Histon",
      "Fulbourn",
      "South Cambridgeshire",
    ],
  };

  return (
    <html lang="en" className={`${raleway.variable} font-sans`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${raleway.className} antialiased flex flex-col min-h-screen pb-16 md:pb-0`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloating />
        <MobileQuickBar />
      </body>
    </html>
  );
}
