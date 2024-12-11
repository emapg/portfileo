import { useGithubProjects } from '../../hooks/useGithubProjects';
import { ProjectCard } from '../ui/ProjectCard';
import { motion } from 'framer-motion';
import { Loader } from 'lucide-react';

export function Projects() {
  const { projects, loading, error } = useGithubProjects('yourusername');

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader className="w-8 h-8 animate-spin text-indigo-600" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-600">
        {error}
      </div>
    );
  }

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900">Featured Projects</h2>
          <p className="mt-4 text-xl text-gray-600">Check out my latest work on GitHub</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              name={project.name}
              description={project.description || 'No description available'}
              url={project.html_url}
              stars={project.stargazers_count}
              language={project.language || 'N/A'}
              topics={project.topics}
            />
          ))}
        </div>
      </div>
    </section>
  );
}