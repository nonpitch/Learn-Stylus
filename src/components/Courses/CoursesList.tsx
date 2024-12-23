import { Course } from '../../types';

interface CoursesListProps {
  courses: Course[];
}

const CoursesList = ({ courses }: CoursesListProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {courses.map((course, index) => (
        <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
          <div className="relative h-[240px]">
            <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent flex items-center justify-center">
              <h3 className="text-3xl font-bold text-white text-center px-6">{course.title}</h3>
            </div>
          </div>
          <div className="p-6">
            <div className="flex items-center space-x-2 mb-4">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                course.difficulty.toLowerCase() === 'beginner' ? 'bg-green-100 text-green-800' :
                course.difficulty.toLowerCase() === 'intermediate' ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              }`}>
                {course.difficulty}
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                {course.category}
              </span>
            </div>
            <p className="text-gray-600 text-base leading-relaxed mb-6">{course.description}</p>
            <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Start Learning
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CoursesList;