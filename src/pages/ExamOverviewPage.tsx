import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { examData } from '../data/examData';
import { formatTitleToUrl } from '../components/utils/examUtils';
import ExamHeader from '../components/exam/ExamHeader';
import { QuestionCard } from '../components/exam/QuestionCard';
import { ExamResult } from '../types/exam';
import { examQuestionsData } from '../data/examQuestions';

const ExamOverviewPage = () => {
  const navigate = useNavigate();
  const { examTitle } = useParams<{ examTitle: string }>();
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const exam = examTitle 
    ? examData.find(e => formatTitleToUrl(e.title) === examTitle)
    : undefined;
  
  const examQuestions = exam 
    ? examQuestionsData.find(q => q.examId === exam.id)
    : undefined;

  useEffect(() => {
    if (!exam || !examQuestions) {
      navigate(`/exams/${examTitle}`);
    }
  }, [exam, examQuestions, navigate, examTitle]);

  if (!exam || !examQuestions) {
    return null;
  }

  const handleAnswerSelect = (questionId: number, answer: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const handleSubmit = () => {
    const correctAnswers = examQuestions.questions.reduce((acc, question) => {
      return acc + (answers[question.id] === question.correctAnswer ? 1 : 0);
    }, 0);

    const result: ExamResult = {
      totalQuestions: examQuestions.questions.length,
      correctAnswers,
      score: correctAnswers / examQuestions.questions.length,
      answers,
      examId: exam.id
    };

    navigate(`/exams/${formatTitleToUrl(exam.title)}/results`, { state: { result } });
  };

  const isComplete = Object.keys(answers).length === examQuestions.questions.length;

  return (
    <div className="min-h-screen bg-gray-50">
      <ExamHeader exam={exam} />
      
      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-sm p-8">
          <p className="text-gray-600 mb-8">{exam.description}</p>

          {examQuestions.questions.map((question) => (
            <QuestionCard
              key={question.id}
              question={question}
              selectedAnswer={answers[question.id] || null}
              onAnswerSelect={(answer) => handleAnswerSelect(question.id, answer)}
            />
          ))}

          <button
            onClick={handleSubmit}
            disabled={!isComplete}
            className={`w-full px-6 py-3 rounded-lg font-medium transition-colors ${
              isComplete
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
            }`}
          >
            {isComplete ? 'Submit Exam' : 'Answer all questions to continue'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExamOverviewPage;