import { Course } from '../../types';
import { Badge } from '../ui/Badge';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

interface CourseHeroProps {
  course: Course;
}

const CourseHero = ({ course }: CourseHeroProps) => {
  return (
    <div className="relative rounded-lg h-[400px] w-[832px] bg-blue-400 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <img
        src={course.image}
        alt={course.title}
        className="rounded-lg absolute inset-0 w-full h-full object-cover"
      />
      <div
        className={`rounded-lg absolute inset-0 ${
          course.difficulty.toLowerCase() === 'beginner'
            ? 'bg-blue-400'
            : 'bg-purple-400'
        } mix-blend-multiply`}
      />
      <div className="absolute inset-0">
      {/* Back Button */}
      <Link
        to={`/courses`}
        className="my-16 absolute top-4 -left-28 flex items-center px-2 py-1 text-blue-600 hover:text-blue-700 mb-6"
      >
        <ChevronLeft className="w-4 h-4 mr-1" />
        Back
      </Link>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-12">
          <div className="text-white mb-2">
            <div className="text-sm uppercase tracking-wider mb-2">COURSE OVERVIEW</div>
            <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
            <p className="text-lg text-gray-200 max-w-2xl my-4">{course.description}</p>
          </div>
          <div className="mb-12">
            <div className="flex items-center space-x-4 -mb-8">
              <Badge
                variant={
                  course.difficulty.toLowerCase() as 'primary' | 'secondary' | 'beginner' | 'advanced'
                }
              >
                {course.difficulty}
              </Badge>
              <Badge variant="secondary">{course.category}</Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseHero;