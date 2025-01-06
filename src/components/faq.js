import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is $COOK?",
      answer: "Ratatouille $COOK is a community-driven BSC token launched with a nano market cap of $20, designed for significant growth potential."
    },
    {
      question: "Is $COOK safe?",
      answer: "Yes, $COOK features a verified and renounced contract with burned liquidity. The max wallet is limited to 1% to prevent whale manipulation."
    },
    {
      question: "What are the taxes?",
      answer: "The total tax is 5-5, with 1% going to burn and 4% allocated to marketing to ensure sustainable growth."
    },
    {
      question: "Where can I buy $COOK?",
      answer: "You can buy $COOK on PancakeSwap. Make sure to set slippage according to the tax structure. Always verify the contract address before purchasing."
    },
    {
      question: "What's the marketing strategy?",
      answer: "We have planned strategic marketing campaigns that will roll out at key market cap milestones to ensure sustainable growth and maximum exposure."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h2 className="text-5xl font-bold text-center mb-12 text-[#fcc029]">Frequently Asked Questions</h2>
      
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="bg-neutral-800 rounded-lg overflow-hidden"
          >
            <button
              className="w-full px-6 py-4 flex justify-between items-center text-left text-white hover:bg-neutral-700"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="font-medium text-xl">{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-[#fcc029]" />
              ) : (
                <ChevronDown className="w-5 h-5 text-[#fcc029]" />
              )}
            </button>
            
            {openIndex === index && (
              <div className="px-6 py-4 text-gray-300 text-xl bg-neutral-800 border-t border-neutral-700">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;