import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-navy pt-16 pb-8 border-t-4 border-gold">
      <div className="max-w-7xl mx-auto px-5 grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2">
            <Image src="https://i.ibb.co/LDCwsn5j/Picsart-26-05-14-21-20-57-671.png" alt="logo" width={48} height={48} className="rounded-full border-2 border-gold" />
            <span className="text-white font-bold text-xl">360 Management</span>
          </div>
          <p className="text-gold text-sm mt-2">Solution Beyond Boundaries</p>
          <div className="flex gap-4 mt-5">
            <a href="#" className="text-white/70 hover:text-gold"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-white/70 hover:text-gold"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" className="text-white/70 hover:text-gold"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
        <div>
          <h4 className="text-white font-bold">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-gray-400">
            <li><Link href="/" className="hover:text-gold">Home</Link></li>
            <li><Link href="/about" className="hover:text-gold">About</Link></li>
            <li><Link href="/services" className="hover:text-gold">Services</Link></li>
            <li><Link href="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold">Brands</h4>
          <ul className="mt-3 space-y-2 text-gray-400">
            <li><Link href="/brand/rewave" className="hover:text-gold">Rewave Solutions</Link></li>
            <li><Link href="/brand/accounting" className="hover:text-gold">Accounting Advisor</Link></li>
            <li><Link href="/brand/growthgen" className="hover:text-gold">Growth Gen</Link></li>
            <li><Link href="/brand/hirenow" className="hover:text-gold">Hire Now Lanka</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold">Contact</h4>
          <p className="text-gray-400 text-sm mt-2">22/5, Biyagama Rd, Kelaniya, Sri Lanka</p>
          <p className="text-gray-400 mt-1">+94 78 989 8498</p>
          <p className="text-gray-400 text-sm">contact@360management.lk</p>
        </div>
      </div>
      <div className="text-center text-gray-500 text-sm pt-8 border-t border-white/10 mt-8">
        &copy; {new Date().getFullYear()} 360 Management (Pvt) Ltd. All rights reserved.
      </div>
    </footer>
  );
}