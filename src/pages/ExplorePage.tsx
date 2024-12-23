import { projectsData } from '../data/projectsData';
import ProjectCard from '../components/ProjectCard';
import { SearchBar } from '../components/Courses/SearchBar';
import SectionContainer from '../components/SectionContainer';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const ExplorePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [level, setLevel] = useState('');
  const [category, setCategory] = useState('');

  const HeaderContent = (
    <div className="space-y-6">
      <div className="flex items-center justify-between my-14">
        <h1 className="text-3xl font-bold">Explore Projects</h1>
        <div className="flex items-center gap-4">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
          <div className="relative">
            <select 
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              className="appearance-none px-5 py-2 pr-8 border rounded-lg bg-white text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-200"
            >
              <option value="">All Levels</option>
              <option value="Beginner">Beginner</option>
              <option value="Advanced">Advanced</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          </div>
          <div className="relative">
            <select 
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="appearance-none px-5 py-2 pr-8 border rounded-lg bg-white text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-200"
            >
              <option value="">All Categories</option>
              <option value="Web3">Web3</option>
              <option value="DeFi">DeFi</option>
              <option value="Network">Network</option>
              <option value="Protocol">Protocol</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );

  const filteredProjects = projectsData.filter(project => {
    const matchesLevel = !level || project.difficulty === level;
    const matchesCategory = !category || project.category === category;
    const matchesSearch = project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesLevel && matchesCategory && matchesSearch;
  });

  return (
    <SectionContainer title="" id="courses" customHeader={HeaderContent}>
      <div className="-my-6"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard 
            key={project.id} 
            {...project} 
          />
        ))}
      </div>
    </SectionContainer>
  );
};