import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Horizon India | HR & Industrial Relations Consulting",

  description:
    "Strategic HR consulting, payroll management, labour law compliance, industrial relations, staffing, and workforce solutions across India.",

  keywords: [
    "HR consulting India",
    "Payroll compliance",
    "Industrial relations consulting",
    "Labour law compliance",
    "Factory compliance services",
    "Staffing solutions India",
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