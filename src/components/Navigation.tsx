import React from 'react';
import { Menu } from 'lucide-react';

export function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-indigo-600">Portfolio</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="#projects" className="hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">Projects</a>
              <a href="#skills" className="hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">Skills</a>
              <a href="#about" className="hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">About</a>
              <a href="#contact" className="hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
            </div>
          </div>
          <div className="md:hidden">
            <button className="p-2 rounded-md hover:bg-indigo-100">
              <Menu className="h-6 w-6 text-indigo-600" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}