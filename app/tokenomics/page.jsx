'use client';

import { motion } from 'framer-motion';

const tokenomicsData = [
  { title: 'Total Supply', value: '1,000,000,000', color: 'from-yellow-400 to-yellow-600' },
  { title: 'Presale', value: '30%', color: 'from-blue-400 to-blue-600' },
  { title: 'Liquidity', value: '20%', color: 'from-green-400 to-green-600' },
  { title: 'Community Rewards', value: '25%', color: 'from-pink-400 to-pink-600' },
  { title: 'Marketing', value: '15%', color: 'from-purple-400 to-purple-600' },
  { title: 'Development', value: '10%', color: 'from-red-400 to-red-600' },
];

export default function Tokenomics() {
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-[#010314] to-[#050617] py-20 flex flex-col items-center justify-center overflow-hidden">
      
      {/* Background Stars */}
      <div className="absolute inset-0 z-0 bg-[url('/stars-bg.svg')] bg-cover opacity-20 animate-pulse" />

      {/* Tokenomics Title */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-10 text-center"
      >
        Tokenomics
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="z-10 text-gray-300 text-lg md:text-xl mb-12 text-center max-w-2xl"
      >
        Token distribution designed for sustainable growth and community empowerment.
      </motion.p>

      {/* Tokenomics Cards */}
      <div className="z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl px-4">
        {tokenomicsData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`rounded-2xl bg-gradient-to-br ${item.color} shadow-lg p-8 flex flex-col items-center justify-center hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer`}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{item.title}</h2>
            <p className="text-xl md:text-2xl font-semibold text-white">{item.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1 }}
        className="z-10 mt-16"
      >
        <a
          href="#"
          className="inline-block px-8 py-4 text-lg font-bold rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:scale-105 hover:brightness-110 transition-all duration-300"
        >
          See Full Details
        </a>
      </motion.div>

    </div>
  );
}
