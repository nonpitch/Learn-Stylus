import { useParams, Navigate } from 'react-router-dom';
import ProjectHeader from '../components/ProjectOverview/ProjectHeader';
import ProjectContent from '../components/ProjectOverview/ProjectContent';
import { projects } from '../data/projectoverviewData';

const ProjectOverviewPage = () => {
  const { projectTitle } = useParams<{ projectTitle: string }>();
  console.log('URL Params:', { projectTitle });
  console.log('Available Projects:', projects);

  const project = projects.find(p => p.projectId === projectTitle);

  if (project) {
    return (
      <div className="min-h-screen bg-gray-50 pt-16">
        <ProjectHeader
          title={project.title}
          duration={project.duration}
          totalSections={project.totalSections}
        />
        <ProjectContent
          sections={project.sections}
          keyTakeaways={project.keyTakeaways}
        />
      </div>
    );
  }

  return <Navigate to="/coming-soon" replace />;
};

export default ProjectOverviewPage;