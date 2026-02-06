
import { motion } from 'framer-motion';
import './about.css';
import IMageME from '../../assets/me-about.png';
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const text = "Hi! I'm Beshoy Mokhlis, a passionate Front-End Developer who builds modern, high-performance, responsive web applications using React.js, Tailwind CSS, TypeScript, and JavaScript. I love turning ideas into seamless user experiences and always strive to write clean, scalable, and maintainable code. With expertise in Tailwind CSS, I create elegant and efficient UI designs, while TypeScript helps me build more reliable and structured applications. I'm always eager to learn new technologies and stay up-to-date with the latest trends in web development to deliver the best possible experience";

const textVariants = {
  hidden: { opacity: 0 },
  visible: (i) => ({
    opacity: 1,
    transition: { delay: i * 0.02 }, // Delay each letter by 0.02s
  }),
};

function About() {
  return (
    <section className='about' id='about'>
      <div className='top_section'>
        <h2>About Me</h2>
      </div>

      <div className='container about_container'>

        {/* Image Section */}
        <div className="about_me">
          <div className="about_me_image">
            <img src={IMageME} alt="me" />
          </div>
        </div>

        {/* Content Section */}
        <div className='about_content'>

          {/* Cards */}
          <div className="about_cards">
            <div className="about_card">
              <FaAward className='about_icon' />
              <h3>Experience</h3>
              <small>1+ years working</small>
            </div>

            <div className="about_card">
              <FiUsers className='about_icon' />
              <h3>Clients</h3>
              <small>6+ Worldwide</small>
            </div>

            <div className="about_card">
              <VscFolderLibrary className='about_icon' />
              <h3>Projects</h3>
              <small>5+ Completed</small>
            </div>
          </div>

          {/* Animated Paragraph */}
          <motion.p
            initial="hidden"
            animate="visible"
            className="animated_text"
          >
            {text.split("").map((char, index) => (
              <motion.span key={index} custom={index} variants={textVariants}>
                {char}
              </motion.span>
            ))}
          </motion.p>

          <a href='#contact' className='btn btn-primary'>Contact Me</a>

        </div>
      </div>
    </section>
  );
}

export default About;

