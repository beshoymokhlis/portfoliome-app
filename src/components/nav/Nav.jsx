import React from 'react'
import './nav.css';
import { IoHomeOutline } from "react-icons/io5";
import { LuUserRound } from "react-icons/lu";
import { BiBook } from "react-icons/bi";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useState } from 'react';
function Nav() {
  const [ActiveNav, setActiveNav] = useState('#');

  return (
  <nav >
    <a className={ActiveNav==='#'? 'active' : ''} onClick={()=>setActiveNav('#') } href='#'><IoHomeOutline/></a>
    <a href='#about' className={ActiveNav==='#about'? 'active' : ''}  onClick={()=>setActiveNav('#about') }><LuUserRound /></a>
    <a href='#projects' className={ActiveNav==='#projects'? 'active' : ''}  onClick={()=>setActiveNav('#projects') }><BiBook /></a>
    <a href='#contact' className={ActiveNav==='#contact'? 'active' : ''}  onClick={()=>setActiveNav('#contact') }><BiMessageSquareDetail /></a>
  </nav>
  )
}

export default Nav
