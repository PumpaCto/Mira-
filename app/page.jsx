'use client';

import StarsBackground from './components/StarsBackground';
import Navbar from './components/Navbar';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#010314] text-white overflow-hidden">
      {/* Yıldız Arka Plan */}
      <StarsBackground />

      {/* Navbar */}
      <Navbar />

      {/* Ana İçerik */}
      <main className="flex flex-col items-center justify-center h-screen relative z-10 px-6 text-center">
        <img src="/logo.png" alt="Miraverse Logo" className="w-32 mb-6" />

        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 animate-pulse">
          Miraverse Token
        </h1>

        <p className="text-lg md:text-2xl mb-8 text-gray-300 max-w-2xl">
          "A New Dimension of Crypto Awaits."
        </p>

        <Link href="#">
          <span className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:scale-105 transition-all duration-300">
            Coming Soon
          </span>
        </Link>
      </main>
    </div>
  );
}
