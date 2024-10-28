import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../assets/umarLogo.webp";
import { motion } from "framer-motion";

const Navbar = () => {
  // Define variants for icon animation
  const iconVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.4 }, // Increased scale on hover
  };

  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img src={logo} className="mx-2" width={50} height={33} alt="Logo" />
        </a>
      </div>
      <div className="m-8 flex items-center gap-4 text-2xl">
        <motion.a
          href="https://www.linkedin.com/in/m-umar-b697802b4/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BvcCOaHFITti0qVGqvNJ9zg%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          variants={iconVariants}
          initial="initial"
          whileHover="hover"
          className="transition duration-300"
        >
          <FaLinkedin />
        </motion.a>
        <motion.a
          href="https://github.com/myselfumar"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          variants={iconVariants}
          initial="initial"
          whileHover="hover"
          className="transition duration-300"
        >
          <FaGithub />
        </motion.a>
        <motion.a
          href="https://www.instagram.com/m.umar_k/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          variants={iconVariants}
          initial="initial"
          whileHover="hover"
          className="transition duration-300"
        >
          <FaInstagram />
        </motion.a>
        <motion.a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          variants={iconVariants}
          initial="initial"
          whileHover="hover"
          className="transition duration-300"
        >
          <FaFacebook />
        </motion.a>
        <motion.a
          href="https://myaccount.google.com/?gar=WzJd"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Google"
          variants={iconVariants}
          initial="initial"
          whileHover="hover"
          className="transition duration-300"
        >
          <FaGoogle />
        </motion.a>
      </div>
    </nav>
  );
};

export default Navbar;
