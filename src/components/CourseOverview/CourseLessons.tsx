import { Lesson } from '../../types';
import { ChevronRight } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

interface CourseLessonsProps {
  lessons: Lesson[];
}

const CourseLessons = ({ lessons }: CourseLessonsProps) => {
  const navigate = useNavigate();
  const { courseTitle } = useParams();

  const handleBeginCourse = () => {
    const firstLesson = lessons.find(l => l.id === "1");
    if (firstLesson) {
      const formattedTitle = firstLesson.title
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[?]/g, '')
        .replace(/^\d+\.\s+/, '');
      
      navigate(`/courses/overview/${courseTitle}/${formattedTitle}`);
    }
  };

  const handleLessonClick = (lessonId: number) => {
    const courseTitle = window.location.pathname.split('/')[3];
    navigate(`/courses/overview/${courseTitle}/${lessons[lessonId].title.toLowerCase().replace(/\s+/g, '-')}`);
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex items-center -mb-6"></div>
      <button 
        onClick={handleBeginCourse}
        className="my-6 w-full sm:w-auto px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
      >
        Begin the course
      </button>
      <div className="flex items-center space-x-4 mb-2"></div>
      <h2 className="text-xl font-semibold mb-6">{lessons.length} lessons</h2>
      <div className="space-y-4">
        {lessons.map((lesson, index) => (
          <button
            key={lesson.id}
            onClick={() => handleLessonClick(index)}
            className="hover:text-pink-600 w-full flex items-center justify-between p-4 rounded-lg hover:bg-gray-50 transition-colors text-left group border border-gray-100"
          >
            <div className="flex items-center space-x-4">
              <span className="text-gray-500">{"1." + lesson.id}</span>
              <span className="font-medium">{lesson.title}</span>
            </div>
            <ChevronRight className="group-hover:text-pink-600 w-5 h-5 text-gray-400 group-hover:text-gray-600" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default CourseLessons;