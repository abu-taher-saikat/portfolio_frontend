import { Sling as Hamburger } from 'hamburger-react';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import logo from '../../../assets/images/logo.png';
import './Navbar.scss';

const Navbar = ({ onLinkClick }) => {
  // const [toggler, setToggler] = useState(true);
  const [navbar, setNavbar] = useState(false);
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isOpen, setOpen] = useState(false)

  const changeBackground = () => {
    window.scrollY > window.screen.height - window.screen.height * 0.27
      ? setNavbar(true)
      : setNavbar(false);
  };
  window.addEventListener("scroll", changeBackground);



  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 620px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = (mediaQuery) => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  const changeState = ()=>{
    setNavVisibility(!isNavVisible);
    setOpen(false)
  }

  return (
    // <nav
    //   className={`navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar navbar-fixed-top py-3 ${
    //     navbar ? "navbar-scroll-color" : "rgba-gradient-nav"
    //   }`}
    // >
    //   <div className="container-fluid mx-3">
    //     <Link className="navbar-brand" to="/">
    //       <img alt="logo" src={logo} width="100" />
    //     </Link>
    //     <button
    //       className="navbar-toggler costmusetoggler shadow-none"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarSupportedContent"
    //       aria-controls="navbarSupportedContent"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //       onClick={() => setToggler(!toggler)}
    //     >
    //       <i
    //         className={`fas ${toggler ? "fa-bars" : "fa-times"} fa-lg`}
    //         style={{ color: "black" }}
    //       ></i>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //       <ul className="navbar-nav  smooth-scroll ms-lg-5">
    //         <li className="nav-item">
    //           <Link
    //             onClick={() => onLinkClick("homeSection")}
    //             className="nav-link"
    //             to="/"
    //           >
    //             Home
    //           </Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link
    //             onClick={() => onLinkClick("aboutSection")}
    //             className="nav-link"
    //             to="/"
    //             data-offset="90"
    //           >
    //             About
    //           </Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link
    //             onClick={() => onLinkClick("educationSection")}
    //             className="nav-link"
    //             to="/"
    //             data-offset="90"
    //           >
    //             Education
    //           </Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link
    //             onClick={() => onLinkClick("experienceSection")}
    //             className="nav-link"
    //             to="/"
    //             data-offset="90"
    //           >
    //             Experience
    //           </Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link
    //             to="/"
    //             onClick={() => onLinkClick("skillSection")}
    //             className="nav-link"
    //             data-offset="30"
    //           >
    //             Skills
    //           </Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link
    //             onClick={() => onLinkClick("projectSection")}
    //             className="nav-link"
    //             to="/"
    //             data-offset="90"
    //           >
    //             Projects
    //           </Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link
    //             onClick={() => onLinkClick("contactSection")}
    //             className="nav-link"
    //             data-offset="90"
    //             to="/"
    //           >
    //             Contact
    //           </Link>
    //         </li>
    //       </ul>

    //       <ul className="navbar-nav  ms-auto list">
    //         <li className="nav-item  list-item">
    //           <Link to="/login" className="nav-link">
    //             <i className="fas fa-lock mx-2"></i> Sign In
    //           </Link>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
    <header className="header">
    {/* <img src={require("../assets/logo.png")} className="Logo" alt="logo" /> */}
      <div className="logo">
        {/* <img src={logo} alt="" /> */}
        codebysaikat
      </div>
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={5}
        classNames="navAnimation"
        unmountOnExit
      >
        <nav className="nav">
          <Link
            onClick={() => onLinkClick("HomeSection")}
            onCLick={changeState}
            className="nav-link"
            data-offset="90"
            to="/"
          >Home</Link>
          <Link
            onClick={() => onLinkClick("AboutSection")}
            onCLick={changeState}
            className="nav-link"
            data-offset="90"
            to="/"
          >About</Link>
          <Link
            onClick={() => onLinkClick("ProjectSection")}
            onCLick={changeState}
            className="nav-link"
            data-offset="90"
            to="/"
          >Project</Link>
          <Link
            onClick={() => onLinkClick("BlogSection")}
            onCLick={changeState}
            className="nav-link"
            data-offset="90"
            to="/"
          >Blog</Link>
          {/* <Link href="/"><a onClick={changeState}>Home</a></Link>
          <Link href="/about"><a onClick={changeState}>About</a></Link>
          <Link href="/project"><a onClick={changeState}>Project</a></Link>
          <Link href="/blog"><a onClick={changeState}>Blog</a></Link> */}
        </nav>
      </CSSTransition>

      <button onClick={toggleNav} className="burger">
        <span role="img" aria-label="">
          {" "}
          <Hamburger toggled={isOpen} toggle={setOpen} />
          {" "}
        </span>
      </button>
  </header>
  );
};

export default Navbar;
