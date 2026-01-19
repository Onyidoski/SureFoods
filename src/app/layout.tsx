import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";

// Configure Poppins
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "900"], // We need multiple weights
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SureFoods | Authentic Nigerian Soups",
  description: "Order fresh Nigerian soups in liters via WhatsApp.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}