'use client';
import { LoadingProvider } from '@/components/ui/is-loading';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LoadingProvider>
      <html lang="pt-BR">
        <body className={inter.className}>{children}</body>
      </html>
    </LoadingProvider>
  );
}
