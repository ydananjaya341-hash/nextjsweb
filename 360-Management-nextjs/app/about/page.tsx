import Image from 'next/image';
import RevealOnScroll from '@/components/RevealOnScroll';

export default function AboutPage() {
  return (
    <>
      <div className="header-bg py-24 text-center" style={{ background: 'linear-gradient(95deg, #0a192f 0%, #0d9488 100%)' }}>
        <h1 className="text-4xl md:text-5xl font-bold text-white">About Us</h1>
        <div className="text-gray-200 mt-2"><a href="/" className="hover:text-gold">Home</a> / <span className="text-gold">About</span></div>
      </div>
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 grid md:grid-cols-2 gap-12 items-center">
          <div><Image src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=2070&auto=format" width={600} height={500} className="rounded-2xl shadow-lg" alt="office" /></div>
          <div><h2 className="text-3xl font-black text-navy">Our Story</h2><p className="text-gray-600 mt-4 leading-relaxed">360 Management (Pvt) Ltd is a premier, multi-disciplinary corporate solutions provider offering a complete 360-degree ecosystem of services. We specialize in digital marketing, financial strategy, technology, and human capital management — breaking silos for enterprise success.</p></div>
        </div>
        <div className="max-w-5xl mx-auto mt-20 grid md:grid-cols-2 gap-8 px-5">
          <div className="bg-navy p-10 rounded-2xl text-white"><i className="fas fa-eye text-gold text-3xl"></i><h3 className="text-2xl font-bold mt-3">Vision</h3><p className="italic mt-2">"Ultimate catalyst for corporate excellence globally."</p></div>
          <div className="bg-teal p-10 rounded-2xl text-white"><i className="fas fa-bullseye text-white text-3xl"></i><h3 className="text-2xl font-bold mt-3">Mission</h3><p className="italic mt-2">"Deliver 360-degree management services that optimize operations, elevate financial health, and drive digital innovation."</p></div>
        </div>
      </div>
    </>
  );
}