import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "MathsStudios — Private Tutoring, Grades 1–12",
  description:
    "Private one-on-one and group tutoring for Grades 1–12 and Matric Upgrade. Expert tutors in Randburg, Johannesburg. CAPS, IEB, Cambridge, AS & A-Level.",
};

export const viewport: Viewport = {
  themeColor: "#1a6b28",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}