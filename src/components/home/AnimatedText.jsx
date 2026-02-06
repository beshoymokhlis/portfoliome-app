
import { motion } from 'framer-motion';

const name = "Beshoy Mokhlis";
const sentence = "I'm a front-end developer, passionate about creating clean, efficient, and responsive websites.";

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.1 },
  }),
};

function AnimatedText() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="animated-text-container"
    >
    
      <motion.h2 className="animated-text">
        {name.split("").map((char, index) => (
          <motion.span
            key={index}
            custom={index}
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            {char}
          </motion.span>
        ))}
      </motion.h2>

      <motion.p className="text-light">
        {sentence.split("").map((char, index) => (
          <motion.span
            key={index}
            custom={index}
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            {char}
          </motion.span>
        ))}
      </motion.p>
    </motion.div>
  );
}

export default AnimatedText;
