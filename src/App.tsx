import React, { useState } from 'react';
import Header from './components/Header';
import TestInfo from './components/TestInfo';
import Syllabus from './components/Syllabus';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
      <main className="pt-16">
        <TestInfo />
        <Syllabus />
      </main>
    </div>
  );
}

export default App;