export interface Project {
  id: string;
  title: string;
  link: string;
  description: string;
  image: string;
  difficulty: string;
  category: string;
  lessons?: Array<{
    id: string;
    title: string;
  }>;
}

export interface Course {
  id: string;
  title: string;
  link: string;
  description: string;
  image: string;
  difficulty: string;
  category: string;
  lessons?: Array<{
    id: string;
    title: string;
  }>;
}

export interface Exam {
  id: string;
  title: string;
  link: string;
  description: string;
  image: string;
  difficulty: string;
  category: string;
}

export interface Lesson {
  id: string;
  title: string;
}

export interface FilterOption {
  value: string;
  label: string;
}