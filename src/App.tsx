import React from 'react';
import { Scene } from './components/3d/Scene';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';

function App() {
  return (
    <div className="relative">
      <Navigation />
      <div className="fixed inset-0">
        <Scene />
      </div>
      <div className="relative z-10">
        <Hero />
        <Projects />
        <Skills />
      </div>
    </div>
  );
}

export default App;
