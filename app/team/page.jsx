export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-8">
      <h1 className="text-5xl font-bold mb-10">Our Anonymous Team</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
        {["Visionary", "Architect", "Strategist"].map((role, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg flex flex-col items-center hover:scale-105 transition-transform">
            <div className="w-24 h-24 bg-gray-700 rounded-full mb-4"></div>
            <h2 className="text-2xl font-bold mb-2">{role}</h2>
            <p className="text-center text-gray-400">Anonymous but unstoppable creators behind Redstaranimation.</p>
          </div>
        ))}
      </div>
    </div>
  );
}
