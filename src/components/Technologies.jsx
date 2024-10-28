import { motion } from "framer-motion";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";

const Technologies = () => {
  // Define variants for hover animations
  const iconVariants = {
    initial: { scale: 1, y: 0 },
    hover: { scale: 1.1, y: -10 }, // Zoom in and move up on hover
  };

  return (
    <div className="pb-20">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>

      <div className="flex flex-wrap items-center justify-center gap-8">
        <motion.div className="flex flex-col items-center" variants={iconVariants} initial="initial" whileHover="hover" transition={{ duration: 0.3 }}>
          <RiReactjsLine className="text-7xl text-cyan-500" />
          <span className="text-sm text-center">React</span>
        </motion.div>
        <motion.div className="flex flex-col items-center" variants={iconVariants} initial="initial" whileHover="hover" transition={{ duration: 0.3 }}>
          <TbBrandNextjs className="text-7xl text-stone-300" />
          <span className="text-sm text-center">Next.js</span>
        </motion.div>
        <motion.div className="flex flex-col items-center" variants={iconVariants} initial="initial" whileHover="hover" transition={{ duration: 0.3 }}>
          <FaNodeJs className="text-7xl text-green-500" />
          <span className="text-sm text-center">Node.js</span>
        </motion.div>
        <motion.div className="flex flex-col items-center" variants={iconVariants} initial="initial" whileHover="hover" transition={{ duration: 0.3 }}>
          <DiJavascript className="text-7xl text-yellow-500" />
          <span className="text-sm text-center">JavaScript</span>
        </motion.div>
        <motion.div className="flex flex-col items-center" variants={iconVariants} initial="initial" whileHover="hover" transition={{ duration: 0.3 }}>
          <SiTailwindcss className="text-7xl text-blue-500" />
          <span className="text-sm text-center">Tailwind CSS</span>
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;
