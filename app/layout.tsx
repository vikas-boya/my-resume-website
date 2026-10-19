import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vikas Boya | Portfolio",
  description: "A personal portfolio and online resume.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
