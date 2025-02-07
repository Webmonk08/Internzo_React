import React from 'react';
import { ShoppingCart, Heart, UserCircle, XIcon, MenuIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function NavBar() {
  var menuicon: React.ReactElement = <MenuIcon />;

  function menubar() {
    let nav = document.querySelector(".navbar") as HTMLElement;
    console.log("hi");
    menuicon = <XIcon />;
    nav.classList.toggle('open');
    console.log(menuicon);
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
        const header = document.querySelector("header") as HTMLElement;

        if (header) {
            window.addEventListener("scroll", () => {
                header.classList.toggle("sticky", window.scrollY > 0);
            });
        }
    }, 0);

    return () => {
        clearTimeout(timeoutId);
    };
}, []);
  return (
    <>
      <header>
        <Link to="/">
        <div className="logo">
          <img src="assets/images/image-removebg-cropped.png" alt="" />
        </div>
        </Link>

        <ul className="navbar">
          <li><a href='#home'>Home</a></li>
          <li><a href='#categories'>Categories</a></li>
          <li><a href='#courses'>Courses</a></li>
          <li><a href="#about">About us</a></li>
          <li><a href='#contact'>Contact</a></li>
        </ul>

        <div className="header-icons">
          <Link to="/Cart"><ShoppingCart /></Link> {/* Link to the Cart route */}
          <Link to="/HeartPage"><Heart color='black'/></Link>
          <Link to="/User"><UserCircle /></Link>
          <div id="menu" onClick={menubar}>{menuicon}</div>
        </div>
      </header>
    </>
  );
}

export default NavBar;