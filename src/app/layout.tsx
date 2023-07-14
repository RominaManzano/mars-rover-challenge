import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mars Rover Challenge',
  description: 'Challenge App that displays Mars rovers photos',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const backgroundClasses = 'bg-gradient-to-br from-black via-black to-orange-900 h-screen';

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={backgroundClasses}>
          {children}
        </div>
      </body>
    </html>
  );
};
