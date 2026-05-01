import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Horizon India | HR & Industrial Relations Consulting",
  description:
    "Strategic HR, labour law compliance, payroll, staffing, and industrial relations consulting solutions across India.",

  keywords: [
    "HR consulting India",
    "Industrial relations consulting",
    "Payroll compliance",
    "Factory compliance",
    "Labour law consulting",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}