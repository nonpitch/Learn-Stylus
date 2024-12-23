import { useState } from 'react';
import { examData } from '../data/examData';

export const useExamsFilter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredExams = examData.filter((exam) => {
    const matchesSearch = exam.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDifficulty = selectedDifficulty === 'all' || exam.difficulty === selectedDifficulty;
    const matchesCategory = selectedCategory === 'all' || exam.category === selectedCategory;

    return matchesSearch && matchesDifficulty && matchesCategory;
  });

  return {
    searchQuery,
    setSearchQuery,
    selectedDifficulty,
    setSelectedDifficulty,
    selectedCategory,
    setSelectedCategory,
    filteredExams,
  };
};