import React, { useState, useEffect, useRef } from "react";
import ReactGa from 'react-ga';
// import Contacts from "../components/User/Contacts/Contacts";
// import Education from "../components/User/Education/Education";
// import Experience from "../components/User/Experience/Experience";
// import About from "../components/User/About/About";
import Footer from "../components/User/Footer/Footer";
// import PageIntro from "../components/User/PageIntro/PageIntro";
import Projects from "../components/User/Projects/Projects";
// import Skills from "../components/User/Skills/Skills";
import Skill from "../components/User/Skill/Skill";
import Hero from '../components/User/Hero/Hero';
import isLogin from "../shared/authorization";
import { useSelector } from "react-redux";
import Navbar from "../components/User/Navbar/Navbar";

const PortfolioUI = () => {
  const [isLogged, setIsLogged] = useState(isLogin);
  const login = useSelector((state) => state.login.isLogin);
  const projectSection = useRef(null);
  const educationSection = useRef(null);
  const experienceSection = useRef(null);
  // const skillSection = useRef(null);
  const contactSection = useRef(null);
  const homeSection = useRef(null);
  const aboutSection = useRef(null);
  const setskillSection = useRef(null);

  useEffect(() => {
    setIsLogged(isLogin);
    ReactGa.initialize('UA-205974788-1')
    // to report page view
    ReactGa.pageview(window.location.pathname + window.location.search)
  }, [login]);

  const scrollUtil = (section) => {
    window.scrollTo({
      top: section.current.offsetTop,
      behavior: "smooth",
    });
  };
  const onLinkClick = (section) => {
    switch (section) {
      case "projectSection":
        scrollUtil(projectSection);
        break;
      case "skillSection":
        scrollUtil(setskillSection);
        break;
      case "aboutSection":
          scrollUtil(aboutSection);
          break;
      case "educationSection":
        scrollUtil(educationSection);
        break;
      case "experienceSection":
        scrollUtil(experienceSection);
        break;
      // case "skillSection":
      //   scrollUtil(skillSection);
      //   break;
      case "contactSection":
        scrollUtil(contactSection);
        break;
      case "homeSection":
        scrollUtil(homeSection);
        break;
      default:
        scrollUtil(homeSection);
    }
  };

  return (
    <div>
      {!isLogged && <Navbar onLinkClick={onLinkClick} />}
      <Hero onLinkClick={onLinkClick} />
      <Skill onLinkClick={onLinkClick} />
      <Projects reff={projectSection} />
      <Footer onLinkClick={onLinkClick} />
      {/* <PageIntro reff={homeSection} />
      <About reff={aboutSection}/>
      <Education reff={educationSection} />
      <Experience reff={experienceSection} />
      <Skills reff={skillSection} />
      <Contacts reff={contactSection} />
      <Footer onLinkClick={onLinkClick} /> */}
    </div>
  );
};

export default PortfolioUI;
