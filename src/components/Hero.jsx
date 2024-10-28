import imgLogo from '../assets/imgLogo.jpg';

import { motion } from "framer-motion";

const Hero = () => {
  // Define variants for hover animations
  const textVariants = {
    initial: { y: 0 },
    hover: { y: -10 }, // Move text up on hover
  };

  const imageVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05 }, // Scale image on hover
  };

  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <motion.img
              src={imgLogo}
              alt="Muhammad Umar"
              className="border border-stone-800 rounded-4xl"
              variants={imageVariants}
              initial="initial"
              whileHover="hover"
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start mt-10">
            <motion.h2
              className="pb-2 text-4xl tracking-tighter lg:text-8xl"
              variants={textVariants}
              initial="initial"
              whileHover="hover"
              transition={{ duration: 0.3 }}
            >
              Muhammad Umar
            </motion.h2>
            <motion.span
              className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent"
              variants={textVariants}
              initial="initial"
              whileHover="hover"
              transition={{ duration: 0.3 }}
            >
              Front End Developer
            </motion.span>
            <motion.p
              className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter"
              variants={textVariants}
              initial="initial"
              whileHover="hover"
              transition={{ duration: 0.3 }}
            >
              I am a passionate front-end developer with a knack for crafting robust and scalable web applications. With 1 year of hands-on experience, I have honed my skills in front-end technologies like React and Next.js. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.
            </motion.p>
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="bg-white rounded-full p-5 text-sm text-stone-950 mb-10"
              whileHover={{ scale: 1.05 }} // Scale button on hover
              transition={{ duration: 0.3 }}
            >
              Download Resume
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
