'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import StarsBackground from './components/StarsBackground';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#010314] via-[#0a0f2b] to-[#000] overflow-hidden text-white flex flex-col items-center justify-center px-4">

      {/* Background Stars */}
      <StarsBackground />

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center z-10 text-center py-20"
      >
        <Image
          src="/logo.png"
          alt="Miraverse Token"
          width={180}
          height={180}
          className="mb-6 animate-pulse"
        />
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Welcome to <span className="text-yellow-400">Miraverse Token</span>
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mb-8 text-gray-300">
          Explore a new dimension where anime, gaming, and Web3 collide in a revolutionary token ecosystem.
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <Link href="#">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-full transition">
              Buy Now
            </button>
          </Link>
          <Link href="#">
            <button className="border-2 border-yellow-400 hover:bg-yellow-500 hover:text-black text-yellow-400 font-bold py-3 px-8 rounded-full transition">
              Coming Soon
            </button>
          </Link>
        </div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-10 z-10"
      >
        <span className="text-gray-400 animate-bounce">↓ Scroll</span>
      </motion.div>

      {/* About Section */}
      <section className="w-full max-w-6xl py-24 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-6"
        >
          About Miraverse
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto text-gray-300 text-lg"
        >
          Miraverse Token isn't just a cryptocurrency. It's a bridge between fandom, creativity, and decentralized technology. Get ready to join a world of limitless possibilities where you can play, earn, and rule.
        </motion.p>
      </section>

      {/* Features Section */}
      <section className="w-full max-w-6xl py-24 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gray-900 rounded-lg p-8"
        >
          <h3 className="text-2xl font-semibold mb-4 text-yellow-400">Web3 Gaming</h3>
          <p className="text-gray-300">
            Dive into immersive games powered by the blockchain where your progress truly matters.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gray-900 rounded-lg p-8"
        >
          <h3 className="text-2xl font-semibold mb-4 text-yellow-400">Anime Universe</h3>
          <p className="text-gray-300">
            Experience an anime-styled metaverse where your NFT heroes come to life.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gray-900 rounded-lg p-8"
        >
          <h3 className="text-2xl font-semibold mb-4 text-yellow-400">DeFi Opportunities</h3>
          <p className="text-gray-300">
            Stake, earn rewards, and contribute to shaping the future of decentralized worlds.
          </p>
        </motion.div>
      </section>

      {/* Community Section */}
      <section className="w-full max-w-4xl py-24 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-6"
        >
          Join Our Community
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto text-gray-300 text-lg mb-8"
        >
          Connect with us on Telegram and Twitter to stay updated, join conversations, and become a pioneer of the Miraverse revolution!
        </motion.p>
        <div className="flex justify-center gap-6">
          <Link href="https://t.me/MiraVerseToken" target="_blank" className="hover:text-yellow-400 text-xl font-semibold">
            Telegram
          </Link>
          <Link href="https://x.com/MiraVersaToken?s=09" target="_blank" className="hover:text-yellow-400 text-xl font-semibold">
            Twitter
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-gray-500 text-xs py-6">
        © 2025 Miraverse Token. All rights reserved.
      </footer>
    </div>
  );
}
