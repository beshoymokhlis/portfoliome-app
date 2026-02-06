
import Me from '../../assets/me.jpg';
import './home.css';
import Cv from '../../assets/BeshoyMokhlisCV.pdf';
import HomeSocials from './HomeSocials';
import AnimatedText from '../home/AnimatedText';



function Home() {
  return (
    <div className='Home'>
      <div className="container home_container">
        <div className="contat">
          <h1>Hello! Its </h1>
          <AnimatedText />
          <div className="btns">
            <a href={Cv} className='btn' download>Downlod Cv</a>
            <a href="#contact" className='btn btn-primary'>Contact Me</a>
          </div>
        </div>

        <div className="home_me">
        <div className="me">
          <img src={Me} alt="Me" />
        </div>
        </div>
        
    
        <HomeSocials/>
      </div>
    </div>
  )
}

export default Home;
