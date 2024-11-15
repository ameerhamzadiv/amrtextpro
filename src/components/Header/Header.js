import React, { useState } from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'
import { Link } from 'react-scroll'

export default function Header() {

  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="header">
      <img src={Logo} alt="" className="logo"  />
      
      {menuOpen === false && mobile === true ? (
        <div onClick={() => setMenuOpen(true)}>
          <img src={Bars} alt="" style={{width: "1.5rem", height: "1.5rem"}}  />
        </div>
      ): (
        <ul className="header-menu">
        <li >
          <Link onClick={() => setMenuOpen(false)} to="home" spy={true} smooth={true} >Home</Link>
        </li>
        <li>
          <Link onClick={() => setMenuOpen(false)} to="programs" spy={true} smooth={true}>Programs</Link>
        </li>
        <li>
          <Link onClick={() => setMenuOpen(false)} to="reason" spy={true} smooth={true}>Why us</Link>
        </li>
        <li>
          <Link onClick={() => setMenuOpen(false)} to="plans" spy={true} smooth={true}>Plans</Link>
        </li>
        <li>
          <Link onClick={() => setMenuOpen(false)} to="testimonils" spy={true} smooth={true}>Testimonils</Link>
        </li>
      </ul>
      )
}
    </div>
  )
}
