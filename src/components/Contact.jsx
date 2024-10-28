import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  // Define variants for text animation
  const textVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05 }, // Scale on hover
  };

  return (
    <div className="border-t border-stone-900 pb-20">
      <h2 className="my-10 text-center text-4xl">Get In Touch</h2>
      <div className="text-center tracking-tighter">
        <motion.p
          variants={textVariants}
          initial="initial"
          whileHover="hover"
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          variants={textVariants}
          initial="initial"
          whileHover="hover"
          className="my-4"
        >
          {CONTACT.phoneNo}
        </motion.p>
        <motion.a
          href="#"
          className="border-b"
          variants={textVariants}
          initial="initial"
          whileHover="hover"
        >
          {CONTACT.email}
        </motion.a>
      </div>
    </div>
  );
};

export default Contact;
