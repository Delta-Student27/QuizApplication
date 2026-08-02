import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 flex justify-between items-center shadow-lg">
      
      {/* Logo */}
      <h1 className="text-2xl font-bold tracking-wide">
        QuizMaster 🎯
      </h1>

      {/* Links */}
      <div className="space-x-6 text-lg">
        <Link to="/" className="hover:text-yellow-300 transition">
          Home
        </Link>
        <Link to="/create" className="hover:text-yellow-300 transition">
          Create Quiz
        </Link>
      </div>
    </nav>
  );
}