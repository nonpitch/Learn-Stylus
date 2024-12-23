import { Twitter, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-lg font-semibold mb-4">Learn Stylus</h3>
            <p className="text-gray-400">
              Build scalable and high-performance decentralized applications (dApps) on the Arbitrum Layer-2 network.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/explore" className="text-gray-400 hover:text-white">Explore Projects</Link></li>
              <li><Link to="/courses" className="text-gray-400 hover:text-white">All Courses</Link></li>
              <li><Link to="/exams" className="text-gray-400 hover:text-white">Practice Exams</Link></li>
            </ul>
          </div>
          <div>
          <h4 className="text-lg font-semibold mb-4">Resources</h4>
          <ul className="space-y-2">
              <li><Link to="/coming-soon" className="text-gray-400 hover:text-white">Glossary</Link></li>
              <li><a href="https://docs.arbitrum.io/stylus/stylus-overview" className="text-gray-400 hover:text-white">Docs</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Learn Stylus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;