import type { Metadata } from "next";
import {
  Newsreader,
  Inter,
  JetBrains_Mono,
  IBM_Plex_Sans_Thai_Looped,
} from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingLineButton from "@/components/FloatingLineButton";
import { contactInfo, siteUrl } from "@/data/content";
import { getDictionary, getLocale } from "@/i18n";
import "./globals.css";

// --- CI fonts (per ~/ws/company/enabridge-ci/brand-foundation.md §7) ---
const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500"],
});

// Google Fonts has no "IBM Plex Serif Thai" — Thai display/serif fall back
// to Sans Thai Looped, which is the closest brand-aligned Thai face.
const plexThai = IBM_Plex_Sans_Thai_Looped({
  subsets: ["thai"],
  variable: "--font-plex-thai",
  weight: ["400", "500", "600"],
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

// Inline script: apply saved theme before first paint to prevent flash.
// Default is "light" per CI; saved value in localStorage overrides.
const themeInitScript = `
(function () {
  try {
    var saved = localStorage.getItem('theme');
    var theme = saved === 'dark' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {
    document.documentElement.setAttribute('data-theme', 'light');
  }
})();
`;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const fontClasses = [
    newsreader.variable,
    inter.variable,
    jetbrainsMono.variable,
    plexThai.variable,
  ].join(" ");

  return (
    <html lang={locale} data-theme="light" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className={`${fontClasses} antialiased`}>
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
