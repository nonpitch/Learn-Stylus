import React from 'react';
import { ProjectSection, InfoBox, GridItem, LineItem } from '../../types/project';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

interface ProjectContentProps {
  sections: ProjectSection[];
  keyTakeaways: string[];
}

const InfoBoxComponent: React.FC<InfoBox> = ({ title, content, variant }) => {
  const variantStyles = {
    info: 'bg-blue-50 border-blue-100 text-blue-900',
    warning: 'bg-yellow-50 border-yellow-100 text-yellow-900',
    success: 'bg-green-50 border-green-100 text-green-900'
  };

  return (
    <div className={`${variantStyles[variant]} border rounded-lg p-6 mb-6`}>
      <h3 className="text-lg font-semibold mb-3">{title}</h3>
      <p className="whitespace-pre-line">{content}</p>
    </div>
  );
};

const GridItems: React.FC<{ items: GridItem[] }> = ({ items }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
    {items.map((item, index) => (
      <div key={index} className="bg-white p-6 rounded-lg shadow-sm border">
        <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
        <p className="text-gray-600 whitespace-pre-line">{item.content}</p>
      </div>
    ))}
  </div>
);

export const LineItems: React.FC<{ items: LineItem[] }> = ({ items }) => (
  <div className="grid grid-cols-1 gap-6 mb-8">
    {items.map((item, index) => (
      <div key={index} className="bg-white p-6 rounded-lg shadow-sm border">
        <h3 className="text-lg font-semibold mb-4">{item.title}</h3>
        <p className="text-gray-600 whitespace-pre-line">{item.content}</p>
      </div>
    ))}
  </div>
);

const ProjectContent: React.FC<ProjectContentProps> = ({ sections, keyTakeaways }) => {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="prose prose-lg max-w-none">
        {sections.map((section) => (
          <section key={section.id} className="mt-12 first:mt-0">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{section.title}</h2>
            {section.content && (
              <p className="text-gray-700 leading-relaxed mb-6">{section.content}</p>
            )}
            {section.infoBoxes?.map((infoBox, index) => (
              <InfoBoxComponent key={index} {...infoBox} />
            ))}
            {section.gridItems && <GridItems items={section.gridItems} />}
            {section.lineItems && <LineItems items={section.lineItems} />}
          </section>
        ))}

        <section className="mt-12">
          <div className="bg-green-50 border border-green-100 rounded-lg p-6">
            <h2 className="text-xl font-bold text-green-900 mb-4">Key Takeaways</h2>
            <ul className="space-y-3 text-green-800">
              {keyTakeaways.map((takeaway, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-2"></span>
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <div className="mt-8 flex justify-between">
          <button
            onClick={() => navigate(`/explore`)}
            className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium flex items-center gap-1"
          >
            <ChevronLeft className="w-5 h-5" />
            Explore Projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectContent;