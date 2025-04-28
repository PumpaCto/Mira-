'use client';

import { motion } from 'framer-motion';

const universe = [
  { name: "Token", description: "The base currency of Miraverse ecosystem." },
  { name: "NFTs", description: "Exclusive anime collectibles and utilities." },
  { name: "Mobile Game", description: "Fast-paced mobile adventures linked to Miraverse." },
  { name: "PC Game", description: "Epic open-world anime universe experience." },
  { name: "Anime Series", description: "A full anime production built by the community." },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-8">
      <h1 className="text-5xl font-bold mb-10">Universe Map</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
        {universe.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-gray-800 p-6 rounded-lg text-center hover:scale-105 transition-transform"
          >
            <h2 className="text-2xl font-bold mb-2">{item.name}</h2>
            <p>{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
