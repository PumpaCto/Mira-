export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-5xl font-bold text-center mb-10">Tokenomics</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Total Supply</h2>
          <p>1,000,000,000 MIR</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Distribution</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>50% Public Sale</li>
            <li>20% Team & Advisors (Locked)</li>
            <li>15% Ecosystem & Rewards</li>
            <li>10% Marketing</li>
            <li>5% Liquidity Reserve</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
