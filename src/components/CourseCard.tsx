import { Badge } from './ui/Badge';
import { Link } from 'react-router-dom';
import { formatTitleToUrl } from './utils/examUtils';

interface CourseCardProps {
  description: string;
  title: string;
  image: string;
  category: string;
  difficulty: string;
  isCourseOne?: boolean;
}

const CourseCard = ({ description, title, image, category, difficulty, isCourseOne = false }: CourseCardProps) => {
  return (
    <Link 
      to={`/courses/overview/${formatTitleToUrl(title)}`}
      className="block bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow w-[380px] group"
    >
      <div className="relative h-[240px] overflow-hidden">
        <img 
          src={image} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" 
        />
        <div className={`absolute inset-0 ${
          difficulty.toLowerCase() === 'beginner' 
            ? 'bg-blue-400' 
            : 'bg-purple-400'
        } mix-blend-multiply`} />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full p-4">
            <div className="text-sm uppercase tracking-wider text-white font-medium">
              {isCourseOne ? 'COURSE OVERVIEW' : 'COMING SOON'}
            </div>
          </div>
          <div className="h-full flex items-center justify-center px-6">
            <h4 className="font-bold text-2xl text-white text-center z-10">{title}</h4>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Badge variant={difficulty.toLowerCase() === 'beginner' ? 'beginner' : 'advanced'}>{difficulty}</Badge>
          <Badge variant="secondary">{category}</Badge>
        </div>
        <h4 className="text-gray-600 text-base leading-relaxed mb-6">{description}</h4>
      </div>
    </Link>
  );
};

export default CourseCard;