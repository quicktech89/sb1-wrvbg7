import React from 'react';
import { useInView } from 'react-intersection-observer';

export default function Syllabus() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const syllabusItems = [
    'Last Leaf',
    'Reach for the Top (both the parts)',
    'No Men are Foreign',
    'Story Writing',
    'Modals',
    'Unseen Passage'
  ];

  return (
    <section id="syllabus" className="min-h-screen py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto" ref={ref}>
          <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-12">
            Test Syllabus
          </h2>

          <div className={`bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700/50 transform transition-all duration-700 ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="space-y-4">
              {syllabusItems.map((item, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                  <div className="relative p-4 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-colors duration-300">
                    <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      {item}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}