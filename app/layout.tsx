import type { Metadata } from "next";
import { Inter } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.css';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

import BootstrapClient from '../app/components/BootstrapClient';

export const metadata: Metadata = {
  title: "Norwegian Export Heros",
  description: "Norwegian Energy Partners",
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
        <BootstrapClient />
      </body>
    </html>
  );
}
