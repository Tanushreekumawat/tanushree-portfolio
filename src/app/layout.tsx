import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { LenisProvider } from "@/components/providers/lenis-provider";
import { CustomCursor } from "@/components/ui/custom-cursor";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tanushreekumawat.dev"),
  title: {
    default: "Tanushree Kumawat | MERN Stack Developer",
    template: "%s | Tanushree Kumawat",
  },
  description:
    "MERN Stack Developer specializing in robust full-stack applications, third-party API integrations, and scalable software solutions.",
  keywords: [
    "MERN Stack Developer",
    "Full Stack Developer",
    "Node.js Developer",
    "React Developer",
    "Backend Engineer",
    "AI Integration",
    "Cloud Architecture",
    "MongoDB",
    "Express.js",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: "Tanushree Kumawat", url: "https://tanushreekumawat.dev" }],
  creator: "Tanushree Kumawat",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tanushreekumawat.dev",
    siteName: "Tanushree Kumawat - Portfolio",
    title: "Tanushree Kumawat | MERN Stack Developer",
    description:
      "Building scalable web applications and integrating third-party APIs. Specializing in React, Node.js, and modern full-stack development.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tanushree Kumawat - MERN Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tanushree Kumawat | MERN Stack Developer",
    description:
      "Building scalable web applications and integrating third-party APIs.",
    images: ["/og-image.png"],
    creator: "@tanushreekumawat",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} ${inter.variable} dark`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Tanushree Kumawat",
              url: "https://tanushreekumawat.dev",
              jobTitle: "MERN Stack Developer",
              worksFor: {
                "@type": "Organization",
                name: "Mindcrew Technologies",
              },
              sameAs: [
                "https://github.com/tanushreekumawat",
                "https://linkedin.com/in/tanushreekumawat",
              ],
              knowsAbout: [
                "React",
                "Node.js",
                "TypeScript",
                "MongoDB",
                "MySQL",
                "AWS",
                "OpenAI",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased noise-overlay">
        <LenisProvider>
          <CustomCursor />
          {children}
        </LenisProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
