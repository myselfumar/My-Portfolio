import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  // Define variants for card animation
  const cardVariants = {
    initial: { scale: 1, y: 0 }, // Initial state
    hover: { scale: 1.05, y: -10 }, // Hover state
  };

  return (
    <div className="pb-4">
      <h2 className="my-20 text-center text-4xl">Experience</h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="initial"
            whileHover="hover"
            className="mb-8 flex flex-wrap lg:justify-center transition-transform duration-300"
          >
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-stone-400">{experience.year}</p>
              <div className="w-full max-w-xl lg:w-3/4">
                <h3 className="mb-4 font-semibold">
                  {experience.role} -{" "}
                  <span className="text-sm text-stone-500">{experience.company}</span>
                </h3>
                <p className="mb-4 text-stone-400">{experience.description}</p>
                <div className="flex flex-wrap">
                  {experience.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
