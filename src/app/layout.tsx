import type { Metadata } from "next";

import "./globals.css";

import { Header } from "@/components/header";
import Footer from "@/components/Footer";
import Widget from "@/components/Widget";

export const metadata: Metadata = {
  title: "HPLA-High Polymer Labs Limited",
  description:
    "HPL Additives Limited (formerly known as High Polymer Labs Limited), is a prominent name in the global market for Polymer Additives and Specialty Chemicals.",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
  },
};

import { ClientErrorBoundary } from "@/components/ErrorBoundaries/ClientErrorBoundary";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <ClientErrorBoundary>
          <Header />
          {children}
          <Footer />
          <Widget />
        </ClientErrorBoundary>
      </body>
    </html>
  );
}
