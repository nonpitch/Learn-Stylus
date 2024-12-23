import { useLocation, useNavigate } from 'react-router-dom';
import ExamHeader from '../components/exam/ExamHeader';
import { ScoreCard } from '../components/exam/ScoreCard';
import { ExamResult } from '../types/exam';
import { examData } from '../data/examData';
import { formatTitleToUrl } from '../components/utils/examUtils';

const ScorePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const result = location.state?.result as ExamResult;

  if (!result) {
    navigate('/exams');
    return null;
  }

  // Find the exam based on the examId from result
  const exam = examData.find((e) => e.id === result.examId);

  // If exam is not found, navigate back or handle the error
  if (!exam) {
    navigate('/exams');
    return null;
  }

  const handleRetry = () => {
    navigate(`/exams/${formatTitleToUrl(exam.title)}`);
  };  

  return (
    <div className="min-h-screen bg-gray-50">
      <ExamHeader exam={exam} />
      <ScoreCard result={result} onRetry={handleRetry} />
    </div>
  );
};

export default ScorePage;