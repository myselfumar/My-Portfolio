import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  // Define variants for card animation
  const cardVariants = {
    initial: { scale: 1, y: 0 }, // Initial state
    hover: { scale: 1.05, y: -10 }, // Hover state
  };

  return (
    <div className="pb-4">
      <h2 className="my-20 text-center text-4xl">Projects</h2>
      <div>
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="initial"
            whileHover="hover"
            className="mb-8 flex flex-wrap lg:justify-center transition-transform duration-300"
          >
            <div className="w-full lg:w-1/4">
              <motion.img
                src={project.image}
                width={250}
                height={250}
                alt={project.title}
                className="mb-6 rounded"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }} // Image zoom on hover
                transition={{ duration: 0.3 }}
              />
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h3 className="mb-4 font-semibold text-2xl">{project.title}</h3>
              <p className="mb-4 text-stone-400">{project.description}</p>

              {/* Manually add HTML, Tailwind CSS, Next.js, and JavaScript for each project */}
              <span className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300">
                HTML
              </span>
              <span className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300">
                Tailwind CSS
              </span>
              <span className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300">
                Next.js
              </span>
              <span className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300">
                JavaScript
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
