import React from 'react';

interface SectionContainerProps {
  title: string;
  id: string;
  children: React.ReactNode;
  customHeader?: React.ReactNode;
}

const SectionContainer = ({ children, title, id, customHeader }: SectionContainerProps) => {
  return (
    <section id={id} className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {customHeader ? customHeader : (
          <h2 className="text-4xl font-bold text-gray-900 mb-8">{title}</h2>
        )}
        <div className="space-y-8">
          {children}
        </div>
      </div>
    </section>
  );
};
      
export default SectionContainer;
