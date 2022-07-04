//import { motion } from "framer-motion";
import './Home.css';
import { GiThink } from "react-icons/gi";
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
//import bg from '../Img/cover.jpg';

const Home = ()=>{

    return (
      <div className="home-div">
        <div className="content-div">
          <h2>
            Who Am{" "}
            <span className="design">
              <GiThink /> I ?
            </span>
            <span className="icon"></span>
          </h2>
          <h2>
            I am{" "}
            <span className="design">
              {" "}
              Sudip <br />
              Khatri{" "}
            </span>
          </h2>
          <p>
            Full stack web application developer,
            <br />
            <span className="design"> #MERN </span> application developer
          </p>
          <p>
            I love building<span className="design"> <br/> web apps. </span>
          </p>

          <div className="social-media">
            {/* {this will be link } */}
            <a
              rel="noreferrer"
              href="https://www.instagram.com/sudip_khatri/"
              target="_blank"
            >
              <i className="instagram">
                <FaInstagram />
              </i>
            </a>
            <a
              rel="noreferrer"
              href="https://www.linkedin.com/in/sudip-khatri-353370148/"
              target="_blank"
            >
              <i className="linkedin">
                <FaLinkedinIn />
              </i>
            </a>
            <a
              rel="noreferrer"
              href="https://github.com/sudipkhatri"
              target="_blank"
            >
              <i className="github">
                <FaGithub />
              </i>
            </a>
            <a
              rel="noreferrer"
              href = "mailto: sudpkhatri4@gmail.com"
              target="_blank"
            >
              <i className="github">
                <AiOutlineMail />
              </i>
            </a>
          </div>
        </div>
        {/* <div className="animation">
          <motion.div
            className="animations"
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 270, 270, 0],
              borderRadius: ["20%", "40%", "50%", "50%", "40%"],
            }}
            transition={{ duration: 5 }}
          >
           
            <img src= {bg} alt="my cover pic" />
          </motion.div>
        </div> */}
      </div>
    );
}

export default Home;
