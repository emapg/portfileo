import { motion } from 'framer-motion';
import { Github, Star, Code } from 'lucide-react';

interface ProjectCardProps {
  name: string;
  description: string;
  url: string;
  stars: number;
  language: string;
  topics: string[];
}

export function ProjectCard({ name, description, url, stars, language, topics }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-900">{name}</h3>
          <a href={url} target="_blank" rel="noopener noreferrer">
            <Github className="w-6 h-6 text-gray-600 hover:text-indigo-600" />
          </a>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-500 mr-1" />
            <span className="text-sm text-gray-600">{stars}</span>
          </div>
          <div className="flex items-center">
            <Code className="w-4 h-4 text-indigo-500 mr-1" />
            <span className="text-sm text-gray-600">{language}</span>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {topics.map((topic) => (
            <span
              key={topic}
              className="px-2 py-1 text-xs font-medium text-indigo-600 bg-indigo-100 rounded-full"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}