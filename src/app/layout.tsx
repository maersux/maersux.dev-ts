import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ReactNode } from 'react';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: `maersux' website`,
  description: `i&apos;m just this random dev guy. currently working on modchecker.com and susgeebot. twitch viewer doing twitch stuff i guess.`,
  icons: {
    icon: 'https://maersux.dev/favicon.ico'
  },
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

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
    <Head>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            var _mtm = window._mtm = window._mtm || [];
            _mtm.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'});
            (function() {
              var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
              g.async=true; g.src='https://analytics.maersux.dev/js/container_z4cXSLfk.js'; s.parentNode.insertBefore(g,s);
            })();
          `
        }}
      />
    </Head>
    <body className={`${inter.className} bg-[#120113] gradient-background text-zinc-300`}>
    {children}
    </body>
    </html>
  );
}
