import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jobtrica — Blue-Collar Workforce Solutions, Ahmedabad",
  description: "Jobtrica is Ahmedabad's blue-collar workforce sourcing partner connecting manufacturing, warehousing, automobile & logistics companies in Sanand, Naroda, Vatva, Odhav & Changodar with reliable manpower. Zero-fee jobs for candidates.",
  keywords: [
    "Jobtrica",
    "Blue Collar Staffing Ahmedabad",
    "Manpower Sourcing Agency Ahmedabad",
    "Sanand GIDC Jobs",
    "Naroda GIDC Jobs",
    "Vatva Industrial Jobs",
    "ITI Job Placement Ahmedabad",
    "Manpower Supplier Gujarat"
  ],
  authors: [{ name: "Jobtrica Workforce Solutions" }],
  openGraph: {
    title: "Jobtrica — Blue-Collar Workforce Solutions, Ahmedabad",
    description: "Jobtrica is Ahmedabad's blue-collar workforce sourcing partner connecting manufacturing, warehousing, automobile & logistics companies in Sanand, Naroda, Vatva, Odhav & Changodar with reliable manpower. Zero-fee jobs for candidates.",
    url: "https://jobtrica.com",
    siteName: "Jobtrica",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Jobtrica Workforce Solutions",
    "url": "https://jobtrica.com",
    "logo": "https://jobtrica.com/images/hero-banner.png",
    "description": "Jobtrica is Ahmedabad's blue-collar workforce sourcing partner connecting manufacturing, warehousing, automobile & logistics companies in Sanand, Naroda, Vatva, Odhav & Changodar with reliable manpower.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ahmedabad",
      "addressRegion": "Gujarat",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-63059-32569",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi", "Gujarati"]
    }
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-[#F8FAFC] text-slate-900 selection:bg-[#F97316] selection:text-white">
        {children}
      </body>
    </html>
  );
}
