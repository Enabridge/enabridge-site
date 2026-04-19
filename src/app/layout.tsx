import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingLineButton from "@/components/FloatingLineButton";
import { contactInfo, siteUrl } from "@/data/content";
import { getDictionary, getLocale } from "@/i18n";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  return {
    title: {
      default: dict.metadata.rootTitleDefault,
      template: "%s | Enabridge",
    },
    description: dict.metadata.rootDescription,
    metadataBase: new URL(siteUrl),
    alternates: { canonical: "/" },
    openGraph: {
      type: "website",
      locale: locale === "th" ? "th_TH" : "en_US",
      siteName: "Enabridge",
      url: siteUrl,
    },
    twitter: { card: "summary_large_image" },
    icons: { icon: "/brand-mark.svg" },
  };
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Enabridge",
  url: siteUrl,
  logo: `${siteUrl}/brand-mark.svg`,
  description:
    "Enabridge builds production software with AI coding agents, trains organizations on AI, and develops OpenBridge — an Agentic AI platform.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bangkok",
    addressCountry: "TH",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+66-65-668-8686",
    email: "team@enabridge.ai",
    contactType: "customer support",
    areaServed: "TH",
    availableLanguage: ["en", "th"],
  },
  sameAs: [contactInfo.youtube.url, contactInfo.linkedin.founder],
  founder: {
    "@type": "Person",
    name: "Ekkachai Nuangsapsaen",
    url: contactInfo.linkedin.founder,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingLineButton />
      </body>
    </html>
  );
}
