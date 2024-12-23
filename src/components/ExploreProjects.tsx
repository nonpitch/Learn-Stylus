import ProjectCard from './ProjectCard';
import SectionContainer from './SectionContainer';
import { projectsData } from '../data/projectsData';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ExploreProjects = () => {

  const beginnerProjects = projectsData
    .filter(project => project.difficulty.toLowerCase() === 'beginner')
    .slice(0, 2);

  const advancedProjects = projectsData
    .filter(project => project.difficulty.toLowerCase() === 'advanced')
    .slice(0, 1);

  const featuredProjects = [...beginnerProjects, ...advancedProjects];

  return (
    <SectionContainer title="" id="explore">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-4xl font-bold">Explore Projects</h2>
        <Link 
          to="/explore" 
          className="px-4 py-2 border rounded-lg hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-colors inline-flex items-center"
        >
          View all
          <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featuredProjects.map((project, index) => (
          <ProjectCard 
            key={index} 
            {...project} 
            link={project.link}
          />
        ))}
      </div>
    </SectionContainer>
  );
};

export default ExploreProjects;