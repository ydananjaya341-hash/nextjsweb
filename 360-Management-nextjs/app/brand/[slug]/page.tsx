'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { brandData } from '../data';
import Script from 'next/script';
import { useEffect } from 'react';

export default function BrandPage() {
  const { slug } = useParams();
  const brand = brandData[slug as keyof typeof brandData];
  if (!brand) return <div className="text-center py-20">Brand not found</div>;

  useEffect(() => {
    if (slug === 'rewave' && window.instgrm) {
      setTimeout(() => window.instgrm.Embeds.process(), 500);
    }
  }, [slug]);

  const isRewave = slug === 'rewave';

  return (
    <>
      {isRewave && <Script src="//www.instagram.com/embed.js" strategy="afterInteractive" />}
      <div className="bg-gradient-to-r from-navy to-teal py-28 text-center">
        {isRewave && (
          <div className="w-28 h-28 bg-white rounded-2xl flex mx-auto p-2 mb-4">
            <Image src={brandData.rewave.logo} alt="logo" width={100} height={100} />
          </div>
        )}
        <h1 className="text-5xl font-black text-white">{brand.name}</h1>
        <p className="text-gold text-xl mt-2">{brand.tagline}</p>
      </div>
      <div className="max-w-6xl mx-auto px-5 -mt-12 relative">
        <div className="bg-white p-10 rounded-2xl shadow-xl">
          <Link href="/services" className="inline-block text-gray-500 hover:text-navy mb-6"><i className="fas fa-arrow-left"></i> Back to Services</Link>
          <h2 className="text-3xl font-bold">About {brand.name}</h2>
          <p className="mt-4 text-gray-700">{brand.description}</p>
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            {brand.services.map((service, idx) => (
              <div key={idx} className="border p-5 rounded-xl flex items-center gap-3"><i className="fas fa-check-circle text-teal"></i> {service}</div>
            ))}
          </div>
          {isRewave && (
            <div className="mt-12">
              <div className="flex flex-wrap gap-4 justify-center">
                <a href={brandData.rewave.facebook} target="_blank" className="bg-navy text-white px-6 py-2 rounded-full">Facebook</a>
                <a href={brandData.rewave.instagram} target="_blank" className="bg-pink-600 text-white px-6 py-2 rounded-full">Instagram</a>
                <a href={`mailto:${brandData.rewave.email}`} className="bg-teal text-white px-6 py-2 rounded-full">Email</a>
              </div>
            </div>
          )}
          <div className="text-center mt-12">
            <Link href="/contact" className="bg-navy text-white px-10 py-3 rounded-full font-bold inline-block hover:bg-teal transition">Contact {brand.name} Team</Link>
          </div>
        </div>
      </div>
      {isRewave && (
        <div className="max-w-7xl mx-auto px-5 py-20">
          <div className="text-center"><h2 className="text-3xl font-black">Instagram Showcase</h2>
            <div className="flex overflow-x-auto gap-6 py-8 scrollbar-hide snap-x">
              {['DQQh1dFjxd4', 'DQQ2dmrCAPp', 'DQbJm7mDd-w', 'DIJI0CgTwoY'].map(code => (
                <div key={code} className="snap-center w-[320px] flex-shrink-0 bg-white p-3 rounded-xl shadow">
                  <blockquote className="instagram-media" data-instgrm-permalink={`https://www.instagram.com/p/${code}/?utm_source=ig_embed`} data-instgrm-version="14"></blockquote>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}