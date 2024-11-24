import React from 'react';

export default function Logo() {
  return (
    <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 p-0.5 shadow-lg transform hover:scale-105 transition-transform duration-300">
      <div className="absolute inset-0 rounded-full overflow-hidden">
        <img
          src="2.png"
          alt="Class 9 Study Group"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}