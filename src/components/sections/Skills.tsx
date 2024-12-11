import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skills = [
  { name: 'React', level: 90, color: '#61DAFB' },
  { name: 'TypeScript', level: 85, color: '#3178C6' },
  { name: 'Node.js', level: 80, color: '#339933' },
  { name: 'Three.js', level: 75, color: '#000000' },
  { name: 'Python', level: 70, color: '#3776AB' },
  { name: 'AWS', level: 65, color: '#FF9900' },
];

export function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900">Skills & Expertise</h2>
          <p className="mt-4 text-xl text-gray-600">Technologies I work with</p>
        </motion.div>

        <div ref={ref} className="grid gap-6 max-w-3xl mx-auto">
          {skills.map((skill, index) => (
            <div key={skill.name} className="relative">
              <div className="flex items-center justify-between mb-2">
                <span className="text-lg font-medium text-gray-700">{skill.name}</span>
                <span className="text-lg font-medium text-gray-700">{skill.level}%</span>
              </div>
              <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className="h-full rounded-full"
                  style={{ backgroundColor: skill.color }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}