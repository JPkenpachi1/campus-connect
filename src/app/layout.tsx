import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "PlutoPay – Revolution in Fintech",
  description: "Corporate cards for business owners, finance teams & CFOs.",
  openGraph: {
    title: "PlutoPay",
    description: "Unlimited corporate cards to control inline & offline expenses.",
    url: "https://plutopay.com",
    siteName: "PlutoPay",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
