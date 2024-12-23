import { useParams, Navigate } from 'react-router-dom';
import { LessonHeader } from '../components/lesson/LessonHeader';
import { LessonContent } from '../components/lesson/LessonContent';
import { lessons } from '../data/lessonData';

const LessonPage = () => {
  const params = useParams();
  console.log('URL Params:', params);
  console.log('Available Lessons:', lessons);

  const { lessonTitle } = useParams();
  const lesson = lessons.find(l => {
    // Remove "lesson/" prefix if it exists in the URL
    const cleanLessonTitle = lessonTitle?.replace('lesson/', '');
    const formattedLessonTitle = l.title.toLowerCase().replace(/\s+/g, '-').replace(/[?]/g, '');
    console.log('Comparing:', formattedLessonTitle, 'with:', cleanLessonTitle);
    return formattedLessonTitle === cleanLessonTitle;
  });

  if (lesson) {
    return (
      <div className="min-h-screen bg-gray-50 pt-16">
        <LessonHeader
          title={lesson.title}
          duration={lesson.duration}
          totalSections={lesson.totalSections}
          lessonNumber={lesson.lessonNumber}
        />
        <LessonContent
          sections={lesson.sections}
          keyTakeaways={lesson.keyTakeaways}
        />
      </div>
    );
  }

  return <Navigate to="/coming-soon" replace />;
};

export default LessonPage;