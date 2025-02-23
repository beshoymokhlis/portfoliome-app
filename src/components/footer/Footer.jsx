import React from 'react'
import './footer.css';

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Linkedin = "https://www.linkedin.com/in/beshoy-mokhlis-agaiby";
const GitHubMe = "https://github.com/beshoymokhlis"
const Facebook = "https://www.facebook.com/profile.php?id=100011917411701"
const Instagram = "https://www.instagram.com/posha_mokhlis.2001/";

const Twitter = "https://x.com/Posha307";

function Footer() {
  return (
    <footer >
      <a href="#" className='footer_logo'>BeshoyMokhlis </a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#skills'>Skills</a></li>
        <li><a href='#projects'>Projects</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className='footer_socials'>
        <a href={Linkedin} target='_blank'><FaLinkedin /> </a>
        <a href={GitHubMe} target='_blank'><FaGithub /></a>
        <a href={Facebook} target='_blank'><FaFacebookF /></a>
        <a href={Instagram} target='_blank'><FaInstagram /></a>
        <a href={Twitter} target='_blank'><FaXTwitter /></a>
      </div>
      <div className="footer_copyright">

        <small>&copy;2025 <a href='#'>Beshoy Mokhlis</a> All right</small>
      </div>

    </footer>
  )
}

export default Footer
