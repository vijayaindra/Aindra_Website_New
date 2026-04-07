
import React, { useState } from 'react';
import { getBiotechInsight } from '../services/gemini';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [answer, setAnswer] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    setLoading(true);
    const result = await getBiotechInsight(`User question about Aindra Clustr or Biotech: ${input}`);
    setAnswer(result);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="bg-white rounded-2xl shadow-2xl w-80 md:w-96 overflow-hidden border border-gray-100 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="bg-blue-600 p-4 text-white flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="font-bold">Clustr AI Insights</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-blue-700 p-1 rounded">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="p-4 max-h-96 overflow-y-auto bg-gray-50 min-h-[100px]">
            {answer ? (
              <div className="text-sm text-gray-700 space-y-2">
                <p className="font-semibold text-blue-600 italic">" {input} "</p>
                <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm leading-relaxed">
                  {answer}
                </div>
                <button 
                  onClick={() => {setAnswer(null); setInput('');}}
                  className="text-xs text-blue-600 font-medium hover:underline pt-2"
                >
                  Ask another question
                </button>
              </div>
            ) : (
              <p className="text-sm text-gray-500">
                Ask me about precision staining, automated pathology, or how Clustr's AI technology works.
              </p>
            )}
            {loading && (
              <div className="flex space-x-1 mt-4">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce [animation-delay:-.3s]"></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce [animation-delay:-.5s]"></div>
              </div>
            )}
          </div>
          
          {!answer && (
            <form onSubmit={handleSubmit} className="p-4 border-t border-gray-100 bg-white">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your question..."
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm"
              />
              <button 
                type="submit" 
                disabled={loading}
                className="mt-2 w-full bg-blue-600 text-white py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50"
              >
                Get Insight
              </button>
            </form>
          )}
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg flex items-center space-x-2 transition-transform hover:scale-105 active:scale-95"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
          <span className="font-bold text-sm hidden md:inline">AI Expert</span>
        </button>
      )}
    </div>
  );
};

export default AIAssistant;
