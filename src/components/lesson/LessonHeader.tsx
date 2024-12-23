import React from 'react';
import { ChevronLeft, Clock, BookOpen } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

interface LessonHeaderProps {
  title: string;
  duration: string;
  totalSections: number;
  lessonNumber: number;
}

export const LessonHeader: React.FC<LessonHeaderProps> = ({ title, duration, totalSections, lessonNumber }) => {
  const navigate = useNavigate();
  const { courseTitle } = useParams();

  return (
    <div className="bg-white border-b">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button 
          onClick={() => navigate(`/courses/overview/${courseTitle}`)} 
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Course Overview
        </button>
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-900">Lesson {lessonNumber}: {title}</h1>
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