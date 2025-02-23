import React from 'react'
import './skills.css';
import HTML from '../../assets/html.svg';
import CSS from '../../assets/css3.svg';
import JS from '../../assets/javascript.svg';
import TS from '../../assets/Typescript.svg';
import Tailwindcss from '../../assets/tailwindcss.svg';
import ReactJS from '../../assets/react.svg';
import FIGMA from '../../assets/figma.svg';
import NodeJs from '../../assets/nodejs.svg';

const SkillsData = [
  {
    id: 1,
    image: HTML,
    title: 'HTML',
   
  },
  {
    id: 2,
    image: CSS,
    title: 'CSS',
    
  },
  {
    id: 3,
    image: JS,
    title: 'JavaScript',
   
  },
  {
    id: 4,
    image: TS,
    title: 'TypeScript',
    
  },
  {
    id: 5,
    image: Tailwindcss,
    title: 'Tailwind CSS',

  },
  {
    id: 6,
    image: ReactJS,
    title: 'ReactJS',

  },
  {
    id: 7,
    image: FIGMA,
    title: 'Figma',
   
  },
  {
    id: 8,
    image: NodeJs,
    title: 'NodeJS',
   
  }
]




function Skills() {
  return (
    <section className='skills' id='skills'>
      <div className='top_section'>
       
        <h2>Skills</h2>
      </div>

      <div className='container container_skills'>
        {SkillsData.map(({ id, image, title })=> (

          <article key={id} className='card_skill'>
            <div className='icon'>
              <img src={image} alt='' />
            </div>
            <div className='content'>
              <h3>{title}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Skills
