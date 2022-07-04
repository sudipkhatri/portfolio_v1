import './Footer.css';
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import {AiOutlineMail} from 'react-icons/ai';

const Footer = () =>{


    return(
        <div className="footer_container">
            
            <div className="footer_info">
                <p className='title_footer'>Made with ❤️ by <br/>Sudip</p>
            </div> 

            <div className="footer_media">
                <a 
                rel="noreferrer"
                href="https://www.instagram.com/sudip_khatri/"
                target="_blank">
                    <i className='social_icon'><FaInstagram/></i>
                </a>
                <a 
                rel="noreferrer"
                href="https://www.linkedin.com/in/sudip-khatri-353370148/"
                target="_blank">
                    <i className='social_icon'><FaLinkedinIn /></i>
                </a>
                <a 
                rel="noreferrer"
                href="https://github.com/sudipkhatri"
                target="_blank">
                    <i className='social_icon'><FaGithub /></i>
                </a>
                <a 
                rel="noreferrer"
                href = "mailto: sudpkhatri4@gmail.com"
                target="_blank">
                    <i className='social_icon'><AiOutlineMail /></i>
                </a>
            
                             
            </div>
            
           
        </div>
    )
}

export default Footer;