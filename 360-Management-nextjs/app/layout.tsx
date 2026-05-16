import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Notification from '@/components/Notification';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const poppins = Poppins({ weight: ['400', '500', '600', '700', '800'], subsets: ['latin'], variable: '--font-poppins' });

export const metadata: Metadata = {
  title: '360 Management (Pvt) Ltd | Solution Beyond Boundaries',
  description: 'A premier, multi-disciplinary corporate solutions provider offering a complete 360-degree ecosystem of services.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Poppins:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-[76px]">{children}</main>
        <Footer />
        <Notification />
        {/* Floating WhatsApp */}
        <a href="https://wa.me/94789898498" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 bg-[#25D366] w-14 h-14 rounded-full flex items-center justify-center text-white text-3xl shadow-2xl hover:scale-110 transition z-50">
          <i className="fab fa-whatsapp"></i>
        </a>
      </body>
    </html>
  );
}