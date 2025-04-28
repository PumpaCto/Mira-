export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white p-8 flex flex-col items-center">
      <h1 className="text-5xl font-bold mb-10">Miraverse Ecosystem</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
        <div className="bg-gray-800 p-6 rounded-lg text-center hover:scale-105 transition-transform">
          <h2 className="text-2xl font-bold mb-4">Token</h2>
          <p>Foundation of the entire Miraverse universe built on Solana blockchain.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg text-center hover:scale-105 transition-transform">
          <h2 className="text-2xl font-bold mb-4">NFT Collection</h2>
          <p>Exclusive anime-based NFTs that offer special access and rewards inside our games.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg text-center hover:scale-105 transition-transform">
          <h2 className="text-2xl font-bold mb-4">Mobile Game</h2>
          <p>Fast-paced mobile gaming experiences linked to your NFTs and token rewards.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg text-center hover:scale-105 transition-transform">
          <h2 className="text-2xl font-bold mb-4">PC Open-World Game</h2>
          <p>Explore the vast anime universe on PC, powered by Miraverse Token integrations.</p>
        </div>
      </div>
    </div>
  );
}
