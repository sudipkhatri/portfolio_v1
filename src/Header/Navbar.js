import './Navbar.css';
import {BsPuzzle} from 'react-icons/bs';
import {GiThink} from 'react-icons/gi';
import {Link} from 'react-scroll';



const Navbar = ({click}) =>{

   
    return (
      <nav className="navbar">
        {/* navbar logo */}
        <div className="navbar-logo">
          <button className="signature">
            <BsPuzzle />
            <GiThink />
          </button>
        </div>
        {/* Links */}
        <div className="navbar-links ">
          <ul>
            <li className="nav-link">
              <Link className="a" to="about" smooth={true} duration={600}>
                {/* <span className="span-logo"> a. </span> */}
                About
              </Link>
            </li>
            <li className="nav-link">
              <Link className="a" to="projects" smooth={true} duration={1000}>
                {/* <span className="span-logo"> b. </span> */}
                Projects
              </Link>
            </li>
            <li className="nav-link">
              <Link className="a" to="contact" smooth={true} duration={1000}>
                {/* <span className="span-logo"> c. </span> */}
                Contact
              </Link>
            </li>
            <li className="nav-link">
              <a
                className="a"
                href = 'sudipresume.docx'
                download="sudipresume.docx"
              >
                {/* <span className="span-logo"> d. </span> */}
                Resume
              </a>
            </li>
          </ul>
        </div>
        <div className="hamburger-menu" onClick={click}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>
    );
}

export default Navbar;