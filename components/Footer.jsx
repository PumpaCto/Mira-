export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-6 flex flex-col items-center space-y-2">
      <p className="text-center">&copy; 2025 Miraverse Token. All rights reserved.</p>
      <div className="flex space-x-6">
        <a href="#" className="hover:text-gray-400">Twitter</a>
        <a href="#" className="hover:text-gray-400">Telegram</a>
      </div>
    </footer>
  );
}
