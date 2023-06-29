import MenuNav from '@/components/MenuNav';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'COLIN CKM',
  description: 'colincheungkm portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MenuNav />
        {children}
      </body>
    </html>
  );
}
