import React from 'react'
import './projects.css';
import IMG1 from '../../assets/portfolio1.png';
import IMG2 from '../../assets/portfolio2.png';
import IMG3 from '../../assets/portfolio3.png';
import IMG4 from '../../assets/portfolio4.png';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.png';


const portfolioData = [
  {
    id: 1,
    image: IMG1,
    title: 'Shopping',
    github: 'https://github.com/beshoymokhlis/Shopping',
    demo: 'https://shopping-kohl.vercel.app/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'OMONAC',
    github: 'https://github.com/beshoymokhlis/OMONAC',
    demo: ' https://beshoymokhlis.github.io/OMONAC/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Digital',
    github: 'https://github.com/beshoymokhlis/digital-',
    demo: ' https://beshoymokhlis.github.io/digital-/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Coffee',
    github: 'htgithub.com/project4',
    demo: 'httpsdemocom'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Portfolio',
    github: 'httpithub.com/project5',
    demo: 'httpmo5.com'
  },
  {
    id: 6,
    image: IMG6,
    title: 'code',
    github: 'httpub.com/project6',
    demo: 'http6.com'
  }
];


function Projects() {
  return (
    <section className='projects' id='projects'>
      <div className='top_section'>
        <h2>Projects</h2>
      </div>

      <div className='container projects_container'>

        {portfolioData.map(({ id, image, title, github, demo }) =>
          <article key={id} className='Portfolio_item'>
            <div className='Portfolio_item_img'>
              <img src={image} alt='project1' />
            </div>

            <h3>{title}</h3>
  
            <div className="Portfolio_item_btns">
              <a href={github} className='btn'>Github</a>
              <a href={demo} className='btn btn-primary'>View Project</a>
            </div>

          </article>
        )}

      </div>

    </section>
  )
}

export default Projects
