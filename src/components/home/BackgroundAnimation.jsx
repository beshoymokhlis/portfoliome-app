
import { motion } from "framer-motion";

const BackgroundAnimation = () => {
  const numCircles = 10; // عدد الدوائر المتحركة

  return (
    <div className="background-container">
      {[...Array(numCircles)].map((_, index) => (
        <motion.div
          key={index}
          className="circle"
          initial={{
            opacity: 0,
            scale: 0.5,
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            opacity: [0, 1, 0], // يظهر ويختفي
            scale: [0.5, 1.2, 0.5], // يكبر ويصغر
            x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
            y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
          }}
          transition={{
            duration: 5 + Math.random() * 5, // المدة العشوائية لكل حركة
            repeat: Infinity,
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundAnimation;
