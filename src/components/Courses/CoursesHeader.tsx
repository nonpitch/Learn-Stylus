import { SearchBar } from './SearchBar';

interface CoursesHeaderProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  selectedDifficulty: string;
  onDifficultyChange: (value: string) => void;
  selectedCategory: string;
  onCategoryChange: (value: string) => void;
}

export const CoursesHeader = ({
  searchQuery,
  onSearchChange,
  selectedDifficulty,
  onDifficultyChange,
  selectedCategory,
  onCategoryChange,
}: CoursesHeaderProps) => {
  return (
    <div className="mb-8">
      <h2 className="text-3xl font-bold mb-6">All Courses</h2>
      <div className="flex gap-4">
        <SearchBar value={searchQuery} onChange={onSearchChange} />
        <select
          value={selectedDifficulty}
          onChange={(e) => onDifficultyChange(e.target.value)}
          className="px-4 py-2 border rounded-lg"
        >
          <option value="all">All Levels</option>
          <option value="beginner">Beginner</option>
          <option value="advanced">Advanced</option>
        </select>
        <select
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="px-4 py-2 border rounded-lg"
        >
          <option value="all">All Categories</option>
          <option value="Portfolio">Portfolio</option>
          <option value="Dashboard">Dashboard</option>
          <option value="Blog">Blog</option>
        </select>
      </div>
    </div>
  );
};