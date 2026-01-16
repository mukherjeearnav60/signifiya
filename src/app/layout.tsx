import type { Metadata } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";
import "./globals.css";

// Bold Sans-Serif for the Logo
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

// Elegant Serif for body text
const serif = DM_Serif_Display({ 
  weight: "400", 
  subsets: ["latin"], 
  variable: "--font-serif",
  style: "italic" 
});

export const metadata: Metadata = {
  title: "FRESHMAN® | Creative Production",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${serif.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}