'use client';

import { useEffect, useState } from 'react';

export default function Notification() {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const handleShow = (e: CustomEvent) => {
      setMessage(e.detail.message);
      setVisible(true);
      setTimeout(() => setVisible(false), 4000);
    };
    window.addEventListener('showNotification', handleShow as EventListener);
    return () => window.removeEventListener('showNotification', handleShow as EventListener);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-6 py-3 rounded-xl shadow-2xl flex gap-3 items-center z-[100]">
      <i className="fas fa-check-circle text-teal"></i>
      <span>{message}</span>
    </div>
  );
}