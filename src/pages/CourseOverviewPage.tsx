import CourseHero from "../components/CourseOverview/CourseHero";
import CourseLessons from "../components/CourseOverview/CourseLessons";
import { coursesData } from "../data/coursesData";
import { useParams } from 'react-router-dom';

const CourseOverviewPage = () => {
  const { courseTitle } = useParams();
  const course = coursesData.find(course => 
    course.title.replace(/^\d+\.\s+/, '').toLowerCase().replace(/\s+/g, '-') === courseTitle
  );

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <CourseHero course={course} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <CourseLessons lessons={course.lessons || []} />
      </div>
    </div>
  );
};

export default CourseOverviewPage;