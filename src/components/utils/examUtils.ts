import { examQuestionsData } from '../../data/examQuestions';
import { ExamQuestions } from '../../types/exam';

export const getExamQuestions = (examId: string): ExamQuestions | undefined => {
  return examQuestionsData.find((exam: ExamQuestions) => exam.examId === examId);
};

export const formatTitleToUrl = (title: string): string => {
  return title.replace(/^\d+\.\s+/, '').toLowerCase().replace(/\s+/g, '-');
};