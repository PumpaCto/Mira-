import Navbar from './components/Navbar';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#02050f] to-[#0b1120] flex flex-col items-center justify-center relative overflow-hidden">
      <Navbar />
      <div className="text-center mt-20 p-8">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-down">
          Welcome to <span className="text-blue-400">Miraverse</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 animate-fade-up">
          Your gateway to the future of crypto entertainment.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg animate-fade-up">
          Coming Soon
        </button>
      </div>

      {/* Arka planda kayan yıldız efekti */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        <div className="w-full h-full bg-stars animate-stars"></div>
      </div>
    </main>
  );
}
