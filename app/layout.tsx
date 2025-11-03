import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Loan Processor Dashboard",
  description: "Internal pipeline management dashboard for loan processors",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
