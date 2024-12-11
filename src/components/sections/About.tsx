import { motion } from 'framer-motion';
import { User, Mail, Github, Linkedin } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-600 mb-8">
              I'm a creative developer passionate about building beautiful and functional web experiences.
              With expertise in modern web technologies and 3D graphics, I create engaging digital solutions
              that leave a lasting impression.
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="mailto:contact@example.com"
                className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
              >
                <Mail className="w-6 h-6 text-gray-700" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
              >
                <Github className="w-6 h-6 text-gray-700" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
              >
                <Linkedin className="w-6 h-6 text-gray-700" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}