export interface Exam {
    id: string;
    title: string;
    link: string;
    description: string;
    image: string;
    difficulty: string;
    category: string;
    status: string;
  }
  
  export interface Question {
    id: number;
    text: string;
    options: string[];
    correctAnswer: string;
  }
  
  export interface ExamResult {
    totalQuestions: number;
    correctAnswers: number;
    score: number;
    answers: Record<number, string>;
    examId: string;
  }
  
  export interface ExamQuestions {
    examId: string;
    title: string;
    description: string;
    questions: Question[];
  }