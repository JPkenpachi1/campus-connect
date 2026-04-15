import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Campus Connect",
  description: "Campus Connect helps students, clubs, and campus communities stay connected and informed.",
  openGraph: {
    title: "Campus Connect",
    description: "A platform for students, clubs, and campus communities to connect and collaborate.",
    url: "https://campusconnect.com",
    siteName: "Campus Connect",
    type: "website",
  },
  icons: {
    icon: "/CampusConnect.png",
    shortcut: "/CampusConnect.png",
    apple: "/CampusConnect.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">
        
        <main>{children}</main>
     
      </body>
    </html>
  );
}