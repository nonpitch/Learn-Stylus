import { BookA, BookOpen, GraduationCap, Library, LogIn, PaperclipIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white border-b z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center gap-2">
          <Link to="/home">
          <img src={logo} alt="Logo" className="h-8 w-8" />
            </Link>
            <Link to="/home" className="text-xl font-bold text-gray-900">
              Learn Stylus
            </Link>
          </div>

          <nav className="flex-1 flex justify-left px-12 items-center">
            <div className="flex items-center space-x-8">
              <a href="/explore" className="flex items-center space-x-1 text-gray-700 hover:text-pink-600">
                <BookOpen className="w-4 h-4" />
                <span>Explore</span>
              </a>
              <Link to="/courses" className="flex items-center space-x-1 text-gray-700 hover:text-pink-600">
                <GraduationCap className="w-4 h-4" />
                <span>Courses</span>
              </Link>
              <a href="/exams" className="flex items-center space-x-1 text-gray-700 hover:text-pink-600">
                <PaperclipIcon className="w-4 h-4" />
                <span>Exams</span>
              </a>
              <a href="/coming-soon" className="flex items-center space-x-1 text-gray-700 hover:text-pink-600">
                <Library className="w-4 h-4" />
                <span>Glossary</span>
              </a>
              <a href="https://docs.arbitrum.io/stylus/stylus-overview" className="flex items-center space-x-1 text-gray-700 hover:text-pink-600">
                <BookA className="w-4 h-4" />
                <span>Docs</span>
              </a>
            </div>
          </nav>

          <div className="flex-shrink-0">
            <button className="flex items-center space-x-1 px-4 py-2 rounded-lg bg-pink-600 text-white hover:bg-pink-700 transition-colors">
              <LogIn className="w-4 h-4" />
              <span>Sign In</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;