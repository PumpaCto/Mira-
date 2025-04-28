'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`w-full flex justify-between items-center py-4 px-8 fixed top-0 z-20 transition-all duration-300 ${
      scrolled ? 'bg-[#010314]/90' : 'bg-transparent'
    }`}>
      <div className="flex items-center">
        <img src="/logo.png" alt="Miraverse Logo" className="h-12" />
      </div>

      <div className="flex space-x-6 text-white font-semibold">
        <Link href="/"><span className="hover:text-blue-400 transition">Home</span></Link>
        <Link href="/about"><span className="hover:text-blue-400 transition">About</span></Link>
        <Link href="/roadmap"><span className="hover:text-blue-400 transition">Roadmap</span></Link>
        <Link href="/contact"><span className="hover:text-blue-400 transition">Contact</span></Link>
      </div>
    </nav>
  );
}
