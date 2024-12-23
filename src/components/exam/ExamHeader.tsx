import { Badge } from '../ui/Badge';
import { Exam } from '../../types';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

interface ExamHeaderProps {
  exam: Exam;
}

const ExamHeader = ({ exam }: ExamHeaderProps) => {
  return (
    <div className="relative rounded-lg h-[350px] w-[640px] bg-blue-400 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <img
        src={exam.image}
        alt={exam.title}
        className="rounded-lg absolute inset-0 w-full h-full object-cover"
      />
      <div
        className={`rounded-lg absolute inset-0 ${
          exam.difficulty.toLowerCase() === 'beginner'
            ? 'bg-gray-300'
            : 'bg-gray-300'
        } mix-blend-multiply`}
      />
      <div className="absolute inset-0">
      {/* Back Button */}
      <Link
        to={`/exams`}
        className="my-16 absolute top-4 -left-28 flex items-center px-2 py-1 text-blue-600 hover:text-blue-700 mb-6"
      >
        <ChevronLeft className="w-4 h-4 mr-1" />
        Back
      </Link>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-12">
          <div className="text-white mb-2">
            <div className="text-sm uppercase tracking-wider mb-2">EXAM OVERVIEW</div>
            <h1 className="text-4xl font-bold mb-4">{exam.title}</h1>
          </div>
          <div className="mb-12">
            <div className="flex items-center space-x-4 -mb-8">
              <Badge
                variant={
                  exam.difficulty.toLowerCase() as 'primary' | 'secondary' | 'beginner' | 'advanced'
                }
              >
                {exam.difficulty}
              </Badge>
              <Badge variant="secondary">{exam.category}</Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamHeader;