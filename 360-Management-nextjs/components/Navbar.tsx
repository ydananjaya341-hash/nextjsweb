'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed w-full z-50 transition-all duration-300 bg-white/95 backdrop-blur-sm shadow-md py-3 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="h-14 w-14 bg-white rounded-full flex items-center justify-center border-2 border-gold shadow-md overflow-hidden">
              <Image src="https://i.ibb.co/LDCwsn5j/Picsart-26-05-14-21-20-57-671.png" alt="360 Management Logo" width={56} height={56} className="object-cover group-hover:scale-105 transition duration-300" style={{ mixBlendMode: 'multiply' }} />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-heading font-bold text-xl text-navy tracking-tight group-hover:text-teal transition">360 Management</span>
              <span className="text-[11px] text-gold font-semibold tracking-widest">SOLUTION BEYOND BOUNDARIES</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <Link key={link.href} href={link.href} className={`font-semibold transition border-b-2 pb-1 ${isActive(link.href) ? 'text-navy border-gold' : 'text-gray-700 border-transparent hover:border-gold hover:text-navy'}`}>
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="px-6 py-2.5 bg-navy text-white rounded-full font-bold hover:bg-teal transition shadow-md hover:shadow-lg hover:-translate-y-0.5">
              Contact Us
            </Link>
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-navy hover:text-teal focus:outline-none text-2xl">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 absolute w-full shadow-xl">
          <div className="px-5 pt-3 pb-6 flex flex-col gap-2">
            {navLinks.map(link => (
              <Link key={link.href} href={link.href} onClick={() => setMobileMenuOpen(false)} className={`block px-4 py-3 rounded-xl text-base font-medium ${isActive(link.href) ? 'bg-gray-50 text-navy' : 'text-gray-800 hover:bg-gray-50 hover:text-navy'}`}>
                {link.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 mt-2 text-center rounded-xl bg-navy text-white font-bold hover:bg-teal">
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}