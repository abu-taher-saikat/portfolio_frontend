import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import {FaFacebookSquare, FaLinkedin, FaInstagram} from 'react-icons/fa'
import {AiFillGithub} from 'react-icons/ai'
import {SiFiverr} from 'react-icons/si'
import styles from './Footer.scss';

const Footer = ({ onLinkClick }) => {
  return (
    // <footer className="foot text-white pt-5 pb-4">
    //   <div className="container text-center text-md-left">
    //     <div className="row text-center text-md-left">
    //       <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
    //         <h5 className="text-uppercase mb-4 font-weight-bold title">
    //           Oussama Basry
    //         </h5>
    //         <p className="sub-title">
    //           I am an engineering student in the second year of Software
    //           Engineering and Distributed Computer Systems at the Higher Normal
    //           School of Technical Education Mohammedia (ENSET-M).
    //         </p>
    //       </div>

    //       <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
    //         <h5 className="text-uppercase mb-4 font-weight-bold title">
    //           Liens
    //         </h5>
    //         <p className="link-hover">
    //           <Link
    //             onClick={() => onLinkClick("educationSection")}
    //             className="sub-title"
    //             style={{ textDecoration: "none" }}
    //             to="/"
    //           >
    //             {" "}
    //             Education
    //           </Link>
    //         </p>
    //         <p className="link-hover">
    //           <Link
    //             onClick={() => onLinkClick("experienceSection")}
    //             to="/"
    //             className="sub-title"
    //             style={{ textDecoration: "none" }}
    //           >
    //             Experience
    //           </Link>
    //         </p>

    //         <p className="link-hover">
    //           <Link
    //             onClick={() => onLinkClick("projectSection")}
    //             to="/"
    //             className="sub-title"
    //             style={{ textDecoration: "none" }}
    //           >
    //             Projects
    //           </Link>
    //         </p>
    //         <p className="link-hover">
    //           <Link
    //             onClick={() => onLinkClick("skillSection")}
    //             to="/"
    //             className="sub-title"
    //             style={{ textDecoration: "none" }}
    //           >
    //             Skills
    //           </Link>
    //         </p>
    //       </div>

    //       <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3 sub-title">
    //         <h5 className="text-uppercase mb-4 font-weight-bold title">
    //           Contact
    //         </h5>
    //         <p>Morocco, Casablanca, Mohammedia</p>
    //         <p>obasry@gmail.com</p>
    //         <p>+212 6 50 56 38 27</p>
    //       </div>
    //     </div>

    //     <hr className="mb-4" />

    //     <div className="row align-items-center">
    //       <div className="col-md-7 col-lg-8">
    //         <p>
    //           {" "}
    //           Copyright ©2021 All rights reserved by:
    //           <span style={{ textDecoration: "none" }}>
    //             <strong className="title"> Oussama Basry</strong>
    //           </span>
    //         </p>
    //       </div>

    //       <div className="col-md-5 col-lg-4">
    //         <div className="text-center text-md-right">
    //           <ul className="list-unstyled list-inline">
    //             <li className="list-inline-item">
    //               <a
    //                 href="https://www.facebook.com/ousamabasry"
    //                 target="_blank"
    //                 rel="noreferrer"
    //                 className="btn-floating btn-sm text-white"
    //                 style={{ fontSize: "23px" }}
    //               >
    //                 <i className="fab fa-facebook-f icons-color"></i>
    //               </a>
    //             </li>
    //             <li className="list-inline-item">
    //               <a
    //                 href="https://twitter.com/basry_oussama"
    //                 target="_blank"
    //                 rel="noreferrer"
    //                 className="btn-floating btn-sm text-white"
    //                 style={{ fontSize: "23px" }}
    //               >
    //                 <i className="fab fa-twitter icons-color"></i>
    //               </a>
    //             </li>
    //             <li className="list-inline-item">
    //               <a
    //                 href="https://www.linkedin.com/in/oussama-basry/"
    //                 target="_blank"
    //                 rel="noreferrer"
    //                 className="btn-floating btn-sm text-white"
    //                 style={{ fontSize: "23px" }}
    //               >
    //                 <i className="fab fa-linkedin-in icons-color"></i>
    //               </a>
    //             </li>
    //             <li className="list-inline-item">
    //               <a
    //                 href="https://github.com/oussamabasry"
    //                 target="_blank"
    //                 rel="noreferrer"
    //                 className="btn-floating btn-sm text-white"
    //                 style={{ fontSize: "23px" }}
    //               >
    //                 <i className="fab fa-github icons-color"></i>
    //               </a>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </footer>

    <div>
            <footer className="footerDistributed">
                <div className="footerLeft">
                    <h3>CodeBy<span>Saikat.com</span></h3>
                    <p className="footerLinks">
                        <Link
                            onClick={() => onLinkClick("heroSection")}
                            to="/"
                            className="sub-title"
                            style={{ textDecoration: "none" }}
                        >
                            Home
                        </Link>.
                        <Link
                            onClick={() => onLinkClick("blogSection")}
                            to="/"
                            className="sub-title"
                            style={{ textDecoration: "none" }}
                        >
                            Blog
                        </Link>
                        ·
                        {/* <Link href="/blog"><a>Blog</a></Link>
                        ·
                        <Link href="/Projects"><a>Projects</a></Link>
                        ·
                        <Link href="/about"><a>About</a></Link> */}
                    </p>
                    <p className="footerCompanyName">@codebysaikat &copy; 2021</p>
                </div>
                
                <div className="footerCenter">
                
                    <div>
                        <i className="fa fa-map-marker"></i>
                        <p><span>Dhaka</span> Bangladesh</p>
                    </div>
                    
                    <div>
                        <i className="fa fa-phone"></i>
                        <p>+880 179009 2627</p>
                    </div>
                    
                    <div>
                        <i className="fa fa-envelope"></i>
                        <p><a href="mailto:codebysaikat@gmail.com">codebysaikat@gmail.com</a></p>
                    </div>
                    
                </div>
                
                <div className="footerRight">
                    <p className="footerCompanyAbout">
                    <span>Find Me</span>
                    Web Dev Trick is a blog for web designers, graphic designers, web developers &amp; SEO Learner.
                    </p>
                    <div className="footerIcons">
                        <Link to="https://www.facebook.com/abutaher.saikat/"><FaFacebookSquare className="footerLogo" /></Link>
                        <Link to="https://github.com/saikat1095"><AiFillGithub className="footerLogo" /></Link>
                        <Link to="https://www.linkedin.com/in/abu-taher-saikat-200101142/"><FaLinkedin className="footerLogo" /></Link>
                        <Link to="https://www.fiverr.com/insta_code?up_rollout=true"><SiFiverr className="footerLogo" /></Link>          
                        <Link to="https://www.instagram.com/code_by_saikat/"><FaInstagram className="footerLogo" /></Link>          
                    </div>
                </div>
                </footer>
        </div>
  );
};

export default Footer;
