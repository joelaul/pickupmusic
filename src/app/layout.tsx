import { Nav } from '@/components/Nav/Nav';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'pickupmusic',
  description: 'A demo of pickupmusic.com',
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className}`}>

        <Nav />
        {children}

        {/* ⬆️ JSX for all pages */}

      </body>
    </html>
  );
}
