import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <section className="h-screen flex items-center bg-gradient-to-b from-blue-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="block">Web3 development</span>
          </h1>
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-12 leading-tight">
            <span className="block">With Arbitrum Stylus</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Discover how to leverage the power of Stylus to build scalable 
          <br /> and high-performance decentralized applications (dApps) 
          <br /> on the Arbitrum Layer-2 network.
          </p>
          <div className="space-x-4">
            <button className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-blue-600 bg-blue-600 text-white hover:bg-blue-700 transition-colors text-lg hover:border-blue-700 font-medium">
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <Link to="/courses" className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors text-lg font-medium">
              View Courses
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;