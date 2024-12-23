import { useNavigate } from 'react-router-dom';
import ComingSoonImage from '../assets/comingsoon.jpeg';

const ComingSoon = () => {
  const navigate = useNavigate();

  return (
    <section className="h-screen relative flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={ComingSoonImage} 
          alt="Coming Soon Background" 
          className="w-full h-full object-cover"
        />
        {/* Pink Overlay with mix-blend-multiply */}
        <div className="absolute inset-0 bg-blue-500 mix-blend-multiply opacity-70"></div>
      </div>

      {/* Content */}
      <div className="-mb-8 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl sm:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="block">Coming Soon</span>
          </h1>
          <div className="space-x-4">
            <p className="text-xl text-gray-200 mb-8 my-5 max-w-2xl mx-auto">
              "We are working hard to bring you the best courses and resources."
            </p>
            <button 
              onClick={() => navigate(-1)} 
              className="mb-5 inline-flex items-center px-5 py-2 rounded-lg border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-colors text-lg font-medium"
            >
              Going Back
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;