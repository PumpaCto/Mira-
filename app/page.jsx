'use client';

import StarsBackground from './components/StarsBackground';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#010314] text-white overflow-hidden">
      {/* Stars Background */}
      <StarsBackground />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center h-screen relative z-10 px-6 text-center">
        <img src="/logo.png" alt="Miraverse Logo" className="w-32 mb-6" />

        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 animate-pulse">
          Miraverse Token
        </h1>

        <p className="text-lg md:text-2xl mb-8 text-gray-300 max-w-2xl">
          Anime, Gaming, and Web3 worlds united — the next generation crypto experience.
        </p>

        <div className="flex space-x-6 mb-6">
          <a href="https://x.com/MiraVersaToken?s=09" target="_blank" rel="noopener noreferrer">
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white px-6 py-2 rounded-full text-lg font-semibold shadow-md hover:scale-105 transition-all duration-300">
              Twitter
            </span>
          </a>

          <a href="https://t.me/MiraVerseToken" target="_blank" rel="noopener noreferrer">
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white px-6 py-2 rounded-full text-lg font-semibold shadow-md hover:scale-105 transition-all duration-300">
              Telegram
            </span>
          </a>
        </div>

        <div>
          <button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-yellow-500 hover:to-orange-500 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:scale-105 transition-all duration-300">
            Coming Soon
          </button>
        </div>

        {/* Footer */}
        <footer className="mt-8 text-sm text-gray-500">
          © 2025 Miraverse Token. All rights reserved.
        </footer>
      </main>
    </div>
  );
}
