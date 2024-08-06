import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: `maersux' website`,
  description: `i&apos;m just this random dev guy. currently working on modchecker.com and susgeebot. twitch viewer doing twitch stuff i guess.`,
  authors: {
    name: 'maersux',
    url: 'https://github.com/maersux'
  },
  openGraph: {
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://maersux.dev/appa.png',
        height: 256,
        width: 256
      }
    ]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={`${inter.className} bg-[#120113] gradient-background text-zinc-300`}>{children}</body>
    </html>
  );
}
