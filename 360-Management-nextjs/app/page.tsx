'use client';

import Link from 'next/link';
import Image from 'next/image';
import RevealOnScroll from '@/components/RevealOnScroll';
import Counter from '@/components/Counter';

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <div className="hero-bg min-h-[88vh] flex items-center relative" style={{ backgroundImage: 'linear-gradient(135deg, rgba(10,25,47,0.95) 0%, rgba(10,25,47,0.8) 100%), url(https://i.ibb.co/wFdPPrWx/IMG-20260423-WA0038.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 w-full py-20 text-center md:text-left">
          <div className="max-w-3xl">
            <span className="inline-block py-1.5 px-5 rounded-full bg-teal/20 text-teal border border-teal/30 text-sm font-extrabold tracking-wider mb-6 animate-fadeIn">INTEGRATED CORPORATE SOLUTIONS</span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.2] animate-fadeIn animation-delay-150">
              360 Management <br />
              <span className="text-gold">Solution Beyond Boundaries</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed animate-fadeIn animation-delay-300">
              A multi-disciplinary corporate ecosystem delivering digital marketing, financial strategy, technology infrastructure, and human capital management.
            </p>
            <div className="flex flex-wrap gap-5 justify-center md:justify-start animate-fadeIn animation-delay-450">
              <Link href="/services" className="px-8 py-4 bg-gold text-navy font-extrabold rounded-full hover:bg-yellow-500 transition-all shadow-glow hover:-translate-y-1 flex items-center gap-2">
                Our Services <i className="fas fa-arrow-right"></i>
              </Link>
              <Link href="/contact" className="px-8 py-4 bg-transparent border-2 border-white text-white font-extrabold rounded-full hover:bg-white hover:text-navy transition-all">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Banner */}
      <div className="relative -mt-14 z-20 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 reveal">
        <div className="bg-white rounded-2xl shadow-card border border-gray-100 p-7">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-gray-100">
            <div><div className="text-4xl font-black text-teal"><Counter target={4} /></div><div className="text-xs font-bold text-gray-500 uppercase tracking-wider">Specialised Brands</div></div>
            <div><div className="text-4xl font-black text-navy"><Counter target={70} />+</div><div className="text-xs font-bold text-gray-500 uppercase tracking-wider">Happy Clients</div></div>
            <div><div className="text-4xl font-black text-teal"><Counter target={12} />+</div><div className="text-xs font-bold text-gray-500 uppercase tracking-wider">Years Experience</div></div>
            <div><div className="text-4xl font-black text-navy"><Counter target={150} />+</div><div className="text-xs font-bold text-gray-500 uppercase tracking-wider">Projects Delivered</div></div>
          </div>
        </div>
      </div>

      {/* Brand Cards */}
      <div className="py-28 bg-lightbg">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="text-center mb-16 reveal"><h2 className="text-3xl md:text-5xl font-bold text-navy mb-4">Our Ecosystem of Brands</h2><p className="text-gray-600 max-w-2xl mx-auto text-lg">Four specialized divisions working in perfect synergy.</p></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { slug: 'rewave', title: 'Rewave Solutions', desc: 'Driving Digital Growth & Brand Authority.', icon: 'fa-bullhorn', color: 'teal' },
              { slug: 'accounting', title: 'Accounting Advisor', desc: 'Precision in Finance & Corporate Strategy.', icon: 'fa-chart-pie', color: 'gold' },
              { slug: 'growthgen', title: 'Growth Gen', desc: 'Empowering Operations through Technology.', icon: 'fa-microchip', color: 'navy' },
              { slug: 'hirenow', title: 'Hire Now Lanka', desc: 'Building Workforces & Managing Facilities.', icon: 'fa-handshake', color: 'teal' }
            ].map((brand, idx) => (
              <RevealOnScroll key={brand.slug} delay={idx * 100} className="bg-white rounded-xl p-8 shadow-soft border hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                <div className={`w-16 h-16 bg-${brand.color}/10 rounded-2xl flex items-center justify-center text-${brand.color} text-3xl group-hover:bg-${brand.color} group-hover:text-white transition`}>
                  <i className={`fas ${brand.icon}`}></i>
                </div>
                <h3 className="text-xl font-black text-navy mt-5">{brand.title}</h3>
                <p className="text-gray-600 text-sm my-3">{brand.desc}</p>
                <Link href={`/brand/${brand.slug}`} className={`text-${brand.color === 'gold' ? 'gold' : brand.color === 'navy' ? 'navy' : 'teal'} font-bold hover:text-navy inline-flex items-center gap-1`}>
                  Learn More <i className="fas fa-arrow-right text-xs"></i>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 grid md:grid-cols-2 gap-12 items-center reveal">
          <div><h2 className="text-3xl font-black text-navy">Why 360 Management?</h2><p className="text-gray-600 my-5">Holistic integration of marketing, finance, tech, and HR under one roof — tailor-made for modern enterprises.</p><ul className="space-y-4"><li className="flex gap-3"><i className="fas fa-check-circle text-teal text-xl"></i><span>Industry agnostic solutions</span></li><li className="flex gap-3"><i className="fas fa-check-circle text-teal text-xl"></i><span>Data-driven strategy & analytics</span></li><li className="flex gap-3"><i className="fas fa-check-circle text-teal text-xl"></i><span>Future-ready digital transformation</span></li></ul></div>
          <div><Image src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format" width={800} height={600} className="rounded-2xl shadow-xl" alt="team" /></div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-navy py-20 text-center relative">
        <div className="relative z-10"><h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2><p className="text-gray-300 mb-8">Take the first step toward seamless growth.</p><Link href="/contact" className="px-8 py-4 bg-gold text-navy font-bold rounded-full hover:bg-yellow-500 transition shadow-glow">Free Consultation</Link></div>
      </div>
    </>
  );
}