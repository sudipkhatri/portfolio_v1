import Home from "./Main-Home/Home";
import About from "./Main-About/About";
import Side from './SmoothMenu/Side';
import Project from "./Main-Projects/Project";
import Contact from "./Main-Contact/Contact";

const Menu = () =>{

    return(
            <div className='mini_menu'>
               <Home />
               <About />
               <Side />
                <Project />
                <Contact />
            </div>

    )

}


export default Menu;