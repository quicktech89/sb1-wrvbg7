import React from 'react';
import { AlertCircle, Calendar, Clock, Share2 } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export default function TestInfo() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Class 9th MT-2 English Test',
          text: 'Important information about tomorrow\'s English test!',
          url: window.location.href
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    }
  };

  return (
    <section id="test-info" className="min-h-screen pt-20 pb-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto" ref={ref}>
          <div className={`bg-gray-800/50 backdrop-blur rounded-2xl shadow-xl p-6 md:p-8 mb-8 border border-gray-700/50 transform transition-all duration-700 ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="flex justify-between items-start mb-8">
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                MT-2 Test Tomorrow
              </h1>
              <button
                onClick={handleShare}
                className="md:hidden p-3 rounded-lg bg-gray-700/50 text-cyan-400 hover:bg-gray-700 transition-all duration-200 hover:scale-105"
                aria-label="Share"
              >
                <Share2 className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex flex-col space-y-6">
              <div className="flex items-start space-x-4 bg-red-500/10 p-4 rounded-xl border border-red-500/20">
                <AlertCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl font-semibold text-white mb-2">Important Notice</h2>
                  <p className="text-gray-300">
                    This test is for <span className="font-bold text-red-400">ENGLISH</span>, not Hindi.
                    Please prepare accordingly.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start space-x-4 bg-gray-800/50 p-4 rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300">
                  <Calendar className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-xl font-semibold text-white mb-2">Date</h2>
                    <p className="text-gray-300">Tomorrow</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-gray-800/50 p-4 rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300">
                  <Clock className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-xl font-semibold text-white mb-2">Duration</h2>
                    <p className="text-gray-300">Standard test duration applies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}