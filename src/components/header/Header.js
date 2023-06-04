import React, { useEffect, useState } from 'react'
import './header.css'
import HeaderTop from './headertop/HeaderTop'
import Navbar from './navbar/Navbar'
import NavbarTop from './navbartop/NavbarTop'

const Header = () => {
  const [show, setShow] = useState(false);
  const [stickyNav, setStickyNav] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset < 300) {
        setStickyNav(false);
      } else if (window.pageYOffset > 300) {
        setStickyNav(true);
      }
      return () => (window.onscroll = null);
    };
  }, []);

  const MenuControl = () => {
    setShow(!show);
  };

  return (
    <div>
      <HeaderTop />
      <div className={stickyNav ? "my__sticky__nav" : "my__sticky__nav_none"}>
       <NavbarTop show={show} MenuControl={MenuControl} />
      </div>
      <Navbar />
    </div>
  )
}

export default Header
