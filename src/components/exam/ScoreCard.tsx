import React from 'react';
import { ExamResult } from '../../types/exam';
import { CheckCircle, XCircle } from 'lucide-react';

interface ScoreCardProps {
  result: ExamResult;
  onRetry: () => void;
}

export const ScoreCard: React.FC<ScoreCardProps> = ({ result, onRetry }) => {
  const percentage = (result.score * 100).toFixed(0);
  const passed = result.score >= 0.7;

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <div className="bg-white rounded-xl shadow-sm p-8 text-center">
        <div className="mb-6">
          {passed ? (
            <CheckCircle className="w-16 h-16 mx-auto text-green-500" />
          ) : (
            <XCircle className="w-16 h-16 mx-auto text-red-500" />
          )}
        </div>
        
        <h2 className="text-2xl font-bold mb-2">
          {passed ? 'Congratulations!' : 'Keep Learning!'}
        </h2>
        
        <p className="text-gray-600 mb-6">
          {passed 
            ? 'You have successfully passed the exam.' 
            : 'You did not pass this time, but do not give up!'}
        </p>

        <div className="flex justify-center items-center space-x-8 mb-8">
          <div className="text-center">
            <p className="text-3xl font-bold text-gray-900">{percentage}%</p>
            <p className="text-sm text-gray-600">Score</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-gray-900">{result.correctAnswers}</p>
            <p className="text-sm text-gray-600">Correct Answers</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-gray-900">{result.totalQuestions}</p>
            <p className="text-sm text-gray-600">Total Questions</p>
          </div>
        </div>

        <button
          onClick={onRetry}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Try Again
        </button>
      </div>
    </div>
  );
};