'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#010314] text-white flex flex-col items-center justify-center px-6">
      <motion.img
        src="/logo.png"
        alt="Miraverse Token Logo"
        className="w-32 h-32 mb-6"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      />

      <motion.h1
        className="text-5xl font-extrabold text-center mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Welcome to <span className="text-orange-400">Miraverse</span> Token
      </motion.h1>

      <motion.p
        className="text-lg text-gray-400 text-center mb-8 max-w-2xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        A new universe of possibilities is coming soon. Stay tuned for the revolution on Solana!
      </motion.p>

      <motion.div
        className="flex space-x-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        <Link href="#">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-full transition">
            Buy Now
          </button>
        </Link>

        <Link href="#">
          <button className="border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white font-bold py-2 px-6 rounded-full transition">
            Coming Soon
          </button>
        </Link>
      </motion.div>

      <motion.div
        className="flex space-x-8 mt-10 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <Link href="#" className="hover:underline hover:text-orange-400">
          Telegram
        </Link>
        <Link href="#" className="hover:underline hover:text-orange-400">
          Twitter
        </Link>
      </motion.div>
    </main>
  );
}
