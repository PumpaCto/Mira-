'use client';

import Navbar from './components/Navbar';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-[#010314] to-[#05081b] overflow-hidden flex flex-col items-center justify-center text-white">
      <Navbar />

      {/* Yıldızlı arka plan */}
      <div className="absolute inset-0 z-0">
        <div className="bg-[url('/stars.gif')] bg-cover bg-center w-full h-full opacity-20 animate-pulse"></div>
      </div>

      {/* İçerik */}
      <div className="relative z-10 flex flex-col items-center text-center mt-32 p-8">
        <img src="/logo.png" alt="Miraverse Logo" className="h-28 mb-8 animate-fade-down" />

        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up">
          Miraverse Token
        </h1>

        <p className="text-lg md:text-2xl text-gray-300 max-w-2xl mb-8 animate-fade-up">
          "Where Crypto meets the Anime Universe"
        </p>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-10 rounded-full text-lg animate-fade-up">
          Coming Soon
        </button>
      </div>
    </main>
  );
}
