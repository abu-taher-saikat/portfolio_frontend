import { Space } from 'antd';
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



const Hero = () => {
    return (
        <div>
        <Space size="middle" className="homepage">
            <Space size="large" className="hero">
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
                        <button className="button">Download Resume</button>
                        </Space>
                    </div>
                </div>
                <Space className="social">
                <ul>
                    <li><Link to="/facebook"><a><FaFacebookSquare className="facebook" /></a></Link></li>
                    <li><Link to="/fiverr"><a><SiFiverr className="fiverr" /></a></Link></li>
                    <li><Link to="/linkedin"><a><AiFillLinkedin className="linkedin" /></a></Link></li>
                    <li><Link to="/instagram"><a><FiInstagram className="instagram" /></a></Link></li>
                    <li><Link to="/github"><a><FaGithub className="github" /></a></Link></li>
                </ul>
                </Space>
            </Space>
        </Space>
        </div>
    )
}

export default Hero
