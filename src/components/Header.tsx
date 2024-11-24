import React from 'react';
import { Menu, X, BookOpen } from 'lucide-react';

export default function Header({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void }) {
  const menuItems = ['Test Info', 'Syllabus'];

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm text-white shadow-lg z-50">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <BookOpen className="w-8 h-8 text-cyan-400" />
            <span className="text-lg font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Class 9th Study Group
            </span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="relative group py-2">
                <span className="text-gray-300 hover:text-white transition-colors duration-200">{item}</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </a>
            ))}
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors duration-200">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <div className={`md:hidden absolute w-full bg-gray-900/95 backdrop-blur-sm transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden`}>
        <div className="px-4 py-2">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="block py-3 text-gray-300 hover:text-white transition-colors duration-200 active:bg-gray-800/50 rounded-lg px-3"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}