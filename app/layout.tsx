import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import { cn } from '@nextui-org/react';
import Link from 'next/link';
import ThemeSwitcher from '../components/ThemeSwitcher';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Synexa',
  description: 'Healthcare patient management system',
  icons: {
    icon: '/assets/icons/logo-icon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn('min-h-screen bg-dark-300 font-sans antialiased', inter.variable)}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <header className="py-6">
            <nav className="container flex items-center justify-between">
              <ul>
                <li>
                  <Link href="/"></Link>
                </li> 
              </ul>
              <ThemeSwitcher /> {/* Allows switching between Light, Dark, and Modern themes */}
            </nav>
          </header>
          <main>{children}</main>
          <footer className="py-4 text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Synexa. All rights reserved.
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
