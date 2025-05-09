import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import { cn } from '@nextui-org/react';
import { Plus_Jakarta_Sans as FontSans } from "next/font/google";
// import Link from 'next/link';
// import ThemeSwitcher from '../components/ThemeSwitcher';

const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Synexa",
  description:
    "Healthcare - Patient Management System",
  icons: {
    icon: "/assets/icons/logo-icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-dark-300 font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
