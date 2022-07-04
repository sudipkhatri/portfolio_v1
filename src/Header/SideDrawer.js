import './SideDrawer.css';
import {Link} from 'react-scroll';

const SideDrawer = ({show}) =>{
    const sideDrawerClass = ["sideDrawer"]
    if(show){sideDrawerClass.push("show")}
    return (
      <div className={sideDrawerClass.join(" ")}>
        <ul>
          <li className="nav-links">
            <Link to="about" smooth={true} duration={1000}>
              {/* <span className="spans-logo"> a. </span> */}
              About
            </Link>
          </li>
          <li className="nav-links">
            <Link to="projects" smooth={true} duration={1000}>
              {/* <span className="spans-logo"> b. </span> */}
              Projects
            </Link>
          </li>
          <li className="nav-links">
            <Link to="contact" smooth={true} duration={1000}>
              {/* <span className="spans-logo"> c. </span> */}
              contact
            </Link>
          </li>
          <li className="nav-links">
            <a
              className="a"
              href="sudipresume.docx"
              download="sudipresume.docx"
            >
              {/* <span className="span-logo"> d. </span> */}
              Resume
            </a>
          </li>
        </ul>
      </div>
    );
}

export default SideDrawer;