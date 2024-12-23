import FAQItem from './FAQItem';
import { FAQData } from '../../data/FAQData';
import SectionContainer from '../SectionContainer';

const FAQSection = () => {
  return (
    <div className="text-center mt-10 bg-gray-50">
      <SectionContainer title="Frequently Asked Questions" id="faq">
        <div className="max-w-3xl mx-auto py-8 mb-28">
          <div className="bg-white rounded-2xl shadow-sm">
            {FAQData.map((FAQ, index) => (
              <FAQItem key={index} {...FAQ} />
            ))}
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};

export default FAQSection;