import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="py-6 px-8 border-b last:border-b-0 border-gray-200 hover:bg-gray-50 transition-colors duration-200">
      <button
        className="flex justify-between items-center w-full text-left group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium text-gray-900 group-hover:text-pink-600 transition-colors duration-200">{question}</h3>
        <span className="ml-6 flex-shrink-0">
          {isOpen ? (
            <ChevronUp className="h-6 w-6 text-gray-400 group-hover:text-pink-600 transition-colors duration-200" />
          ) : (
            <ChevronDown className="h-6 w-6 text-gray-400 group-hover:text-pink-600 transition-colors duration-200" />
          )}
        </span>
      </button>
      {isOpen && (
        <div className="mt-3">
          <p className="text-base text-gray-600 text-left">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FAQItem;