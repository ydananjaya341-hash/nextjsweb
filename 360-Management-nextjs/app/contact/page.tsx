'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', department: 'General Inquiry', message: '' });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const form = new FormData();
    Object.entries(formData).forEach(([k, v]) => form.append(k, v));
    try {
      const res = await fetch('https://formspree.io/f/xykoqaob', { method: 'POST', body: form, headers: { Accept: 'application/json' } });
      if (res.ok) {
        window.dispatchEvent(new CustomEvent('showNotification', { detail: { message: 'Message sent successfully!' } }));
        setFormData({ name: '', email: '', phone: '', department: 'General Inquiry', message: '' });
      } else throw new Error();
    } catch {
      window.dispatchEvent(new CustomEvent('showNotification', { detail: { message: 'Error! Please try again.' } }));
    } finally { setSubmitting(false); }
  };

  return (
    <>
      <div className="header-bg py-24 text-center"><h1 className="text-4xl font-bold text-white">Contact Us</h1><div>Home / <span className="text-gold">Contact</span></div></div>
      <div className="py-20 bg-white"><div className="max-w-6xl mx-auto px-5 grid lg:grid-cols-2 gap-12">
        <div className="bg-white shadow-xl rounded-2xl p-8"><h2 className="text-3xl font-bold">Let's Talk</h2><form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div className="grid md:grid-cols-2 gap-4"><input type="text" placeholder="Full name" required className="w-full p-3 border rounded-xl" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} /><input type="email" placeholder="Email" required className="w-full p-3 border rounded-xl" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} /></div>
          <input type="tel" placeholder="Phone" className="w-full p-3 border rounded-xl" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
          <select className="w-full p-3 border rounded-xl bg-white" value={formData.department} onChange={e => setFormData({...formData, department: e.target.value})}><option>General Inquiry</option><option>Rewave Solutions</option><option>Accounting Advisor</option><option>Growth Gen</option><option>Hire Now Lanka</option></select>
          <textarea rows={4} placeholder="Your message" required className="w-full p-3 border rounded-xl" value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}></textarea>
          <button type="submit" disabled={submitting} className="w-full bg-navy text-white py-3 rounded-xl font-bold hover:bg-teal transition">{submitting ? <i className="fas fa-circle-notch fa-spin"></i> : 'Send Message'} <i className="fas fa-paper-plane"></i></button>
        </form></div>
        <div className="space-y-6"><div className="bg-navy text-white p-8 rounded-2xl"><i className="fas fa-map-marker-alt text-gold text-2xl"></i><p className="font-bold mt-2">22/5, Biyagama Road, Kelaniya, Colombo, Sri Lanka</p><hr className="my-4 border-white/20" /><i className="fas fa-phone text-gold"></i><p>+94 78 989 8498</p><i className="fas fa-envelope text-gold mt-3"></i><p>contact@360management.lk</p></div><div className="h-72 rounded-2xl overflow-hidden shadow-md"><iframe src="https://maps.google.com/maps?q=22/5,Biyagama%20Road,%20Kelaniya,%20Colombo,%20Srilanka&output=embed" width="100%" height="100%" style={{border:0}} allowFullScreen loading="lazy"></iframe></div></div>
      </div></div>
    </>
  );
}