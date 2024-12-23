import ExamCard from './ExamCard';
import SectionContainer from './SectionContainer';
import { examData } from '../data/examData';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const PracticeExams = () => {

  const beginnerExams = examData
    .filter(exam => exam.difficulty.toLowerCase() === 'beginner')
    .slice(0, 2);

  const advancedExams = examData
    .filter(exam => exam.difficulty.toLowerCase() === 'advanced')
    .slice(0, 1);

  const practiceExams = [...beginnerExams, ...advancedExams];

  return (
    <SectionContainer title="" id="exams">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-4xl font-bold">Practice Exams</h2>
        <Link 
          to="/exams" 
          className="px-4 py-2 border rounded-lg hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-colors inline-flex items-center"
        >
          View all
          <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {practiceExams.map((exam) => (
          <ExamCard 
            key={exam.id} 
            {...exam} 
            isExamOne={exam.id === 'exam-1'}
          />
        ))}
      </div>
    </SectionContainer>
  );
};

export default PracticeExams; 