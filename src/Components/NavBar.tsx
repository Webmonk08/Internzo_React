import React from 'react';
import { Link ,useLocation} from 'react-router-dom';
import { useEffect } from 'react';




function NavBar() {
  // var menuicon: React.ReactElement = <MenuIcon />;

  const location = useLocation();
  const isHome = location.pathname === "/";

  // function menubar() {
  //   let nav = document.querySelector(".navbar") as HTMLElement;
  //   menuicon = <XIcon />;
  //   nav.classList.toggle('open');
  //   console.log(menuicon);
  // }

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
        <Link to="/" className='logo'>
          <img src="/assets/images/image-removebg-cropped.png" alt="" />
        </Link>

        { isHome ? (
        <ul className="navbar">
          <ul className="navbar">
            <li><a href="/">Home</a></li>
            <li><a href="#categories">Categories</a></li>
            <li><a href="#courses">Courses</a></li>
            <li><a href="#about">Join Us</a></li>
          </ul>

        </ul>) : (
          <ul className="navbar">
            
          <ul className="navbar">
          <li><a href="/">Home</a></li>
            <li><Link to="/#categories">Categories</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/#about">Join Us</Link></li>
          </ul>
          </ul>
        ) }
      </header>
    </>
  );
}

export default NavBar;