import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Viraat Workforce Solutions | Trusted Blue-Collar Workforce Partner India",
  description: "India's premier blue-collar workforce solutions company connecting manufacturing, warehousing, automobile & logistics industries with reliable manpower and partner staffing agencies. 100% genuine zero-fee jobs.",
  keywords: [
    "Blue Collar Staffing India",
    "Manpower Sourcing Agency",
    "Industrial Workers Pune",
    "Factory Machine Operator Sourcing",
    "Warehouse Packer Hiring Gurgaon",
    "Staffing Partner India",
    "Manpower Supplier Alliance",
    "ITI Diploma Job Placement"
  ],
  authors: [{ name: "Viraat Workforce Solutions" }],
  openGraph: {
    title: "Viraat Workforce Solutions | Connecting Industries with Reliable Workforce",
    description: "Trusted Blue-Collar Workforce Solutions for Manufacturing, Warehousing, Logistics and Industrial Companies across India.",
    url: "https://viraatworkforce.com",
    siteName: "Viraat Workforce Solutions",
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
    "name": "Viraat Workforce Solutions",
    "url": "https://viraatworkforce.com",
    "logo": "https://viraatworkforce.com/images/hero-banner.png",
    "description": "Trusted Indian Blue-Collar Workforce Solutions partner for manufacturing, warehousing, automobile, and logistics companies.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Plot 42, Sector 18, Industrial Area",
      "addressLocality": "Gurgaon",
      "addressRegion": "Haryana",
      "postalCode": "122015",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9876543210",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi"]
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
