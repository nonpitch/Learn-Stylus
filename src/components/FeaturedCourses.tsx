import CourseCard from './CourseCard';
import SectionContainer from './SectionContainer';
import { coursesData } from '../data/coursesData';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const FeaturedCourses = () => {
  // Filter and limit courses by difficulty
  const beginnerCourses = coursesData
    .filter(course => course.difficulty.toLowerCase() === 'beginner')
    .slice(0, 3);

  const advancedCourses = coursesData
    .filter(course => course.difficulty.toLowerCase() === 'advanced')
    .slice(0, 3);

  const featuredCourses = [...beginnerCourses, ...advancedCourses];

  return (
    <SectionContainer title="" id="explore">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-4xl font-bold">Featured Courses</h2>
        <Link 
          to="/courses" 
          className="px-4 py-2 border rounded-lg hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-colors inline-flex items-center"
        >
          View all
          <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featuredCourses.map((course) => (
          <CourseCard 
            key={course.id} 
            {...course} 
            isCourseOne={course.id === 'course-1'}
          />
        ))}
      </div>
    </SectionContainer>
  );
};

export default FeaturedCourses;