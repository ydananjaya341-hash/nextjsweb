import Link from 'next/link';
import RevealOnScroll from '@/components/RevealOnScroll';

export default function ServicesPage() {
  const services = [
    { slug: 'rewave', title: 'Rewave Solutions', desc: 'Digital marketing, social media management, content creation, SEO, and brand design.', icon: 'fa-bullhorn', color: 'teal' },
    { slug: 'accounting', title: 'Accounting Advisor', desc: 'Auditing, tax planning, company secretarial, financial strategy & compliance.', icon: 'fa-chart-line', color: 'gold' },
    { slug: 'growthgen', title: 'Growth Gen', desc: 'Custom systems, automation, industrial research, web design & digital infrastructure.', icon: 'fa-laptop-code', color: 'navy' },
    { slug: 'hirenow', title: 'Hire Now Lanka', desc: 'Facility management, manpower recruitment, labor supply, workforce scalability.', icon: 'fa-building', color: 'teal' }
  ];
  return (
    <>
      <div className="header-bg py-24 text-center"><h1 className="text-4xl font-bold text-white">Our Services</h1><div className="text-gray-200">Home / <span className="text-gold">Services</span></div></div>
      <div className="py-24 bg-lightbg"><div className="max-w-7xl mx-auto px-5 grid md:grid-cols-2 gap-10">
        {services.map((s, i) => (
          <RevealOnScroll key={s.slug} delay={i * 100} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
            <div className={`w-14 h-14 bg-${s.color}/10 text-${s.color} rounded-xl flex items-center justify-center text-2xl`}><i className={`fas ${s.icon}`}></i></div>
            <h3 className="text-2xl font-bold mt-4">{s.title}</h3>
            <p className="text-gray-600 my-3">{s.desc}</p>
            <Link href={`/brand/${s.slug}`} className="text-navy font-bold">Discover →</Link>
          </RevealOnScroll>
        ))}
      </div></div>
    </>
  );
}