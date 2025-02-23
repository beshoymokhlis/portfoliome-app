import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Linkedin = "https://www.linkedin.com/in/beshoy-mokhlis-agaiby";
const GitHubMe ="https://github.com/beshoymokhlis"
function HomeSocials() {
  return (
    <div className='home_socials' >
        <a href={Linkedin} target='_blank'><FaLinkedin /> </a>
        <a href={GitHubMe} target='_blank'><FaGithub /></a>
        
      
    </div>
  )
}

export default HomeSocials;
