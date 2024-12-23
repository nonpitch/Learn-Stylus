import React from 'react';
import { ChevronLeft, Clock, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ProjectHeaderProps {
  title: string;
  duration: string;
  totalSections: number;
}

const ProjectHeader: React.FC<ProjectHeaderProps> = ({ title, duration, totalSections}) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white border-b">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button 
          onClick={() => navigate(`/explore`)} 
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Explore Projects
        </button>
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
          <div className="flex items-center space-x-4 text-gray-600">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{duration.split(' ')[0]}</span>
              <span>mins</span>
            </div>
            <div className="flex items-center gap-1">
              <BookOpen className="w-4 h-4" />
              <span>{totalSections}</span>
              <span>sections</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectHeader;