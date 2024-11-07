import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { outfit, poppins } from "@/lib/fonts";
import Footer from "@/components/navigations/footer/footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${poppins.variable}   antialiased`}
        suppressHydrationWarning
      >
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
