import { Space } from 'antd';
import ReactGA from 'react-ga';
// import styles from '../styles/Hero.module.scss'
import './Hero.scss';
import { Link } from 'react-router-dom';
// import HeroImage from '../public/codebysaikat.png';
import HeroImage from '../../../assets/images/codebysaikat.png'
import {FaFacebookSquare} from 'react-icons/fa'
import {SiFiverr} from 'react-icons/si'
import {AiFillLinkedin} from 'react-icons/ai'
import {FiInstagram} from 'react-icons/fi'
import {FaGithub} from 'react-icons/fa';
import {SiUpwork} from 'react-icons/si'
// import pdf from "../../../assets/images";
// import mypdf from "../../../assets/abutahersaikat.pdf";
import mypdf from "../../../assets/Abu Taher Saikat.pdf";

const clickHandler = () => {
    ReactGA.event({
        category : 'Button',
        action : 'Resume Is downloaded'
    })
}

const Hero = () => {
    return (
        <div>
        <div size="middle" className="homepage">
            <div size="large" className="hero">
                <div className="img">
                    <img src={HeroImage} alt="noting"></img>
                </div>
                <div className="wrapper">
                    <div className="content">
                        <h4>Hi, I am Saikat,a Mern Stack Full Stack Developer</h4>
                        <p>I create attractive websites. That represents your identity. Exhibit your creativity. And that makes a brand of you
                        <span></span>
                        I am a skilled full-stack web developer. Always I prefer hand-coded organized programming. I am an expert in html5, css3, bootstrap, JavaScript, react js, node js, express js and MongoDB.</p>
                        <Space size={'large'}>
                        {/* <button className="button">Download Resume</button> */}
                        {/* <button className="button" href='/assets/abutahersaikat.pdf' download="abutahersaikat">Download Resume</button> */}
                        <button onClick={clickHandler} className="button">
                            <a href={mypdf} download="abutahersaikat.pdf">
                                Download Resume
                            </a>
                        </button>
                        </Space>
                    </div>
                </div>
                <div className="social">
                    <ul>
                        <li><a href="https://github.com/saikat1095"><FaGithub className="github" /></a></li>
                        <li><a href="https://www.fiverr.com/insta_code?up_rollout=true"><SiFiverr className="fiverr" /></a></li>
                        <li><a href="https://www.upwork.com/freelancers/~018adb864a5b8e21f5"><SiUpwork className="upwork" /></a></li>
                        <li><a href="https://www.linkedin.com/in/abu-taher-saikat-200101142/"><AiFillLinkedin className="linkedin" /></a></li>
                        <li><a href="https://www.instagram.com/code_by_saikat/"><FiInstagram className="instagram" /></a></li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Hero
