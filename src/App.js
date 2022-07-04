import { useState } from 'react';
import './App.css';
import Navbar from './Header/Navbar';
import SideDrawer from './Header/SideDrawer';
import Backdrop from './Header/Backdrop';
import Menu from './Main/Menu';
import Footer from './Footer/Footer'


const App = () =>{
  const [show, setShow] = useState(false);
  return (
    <div
      className="motion_div">
        <Navbar click={()=> setShow(true)}/>
        <Backdrop show = {show} click={()=> setShow(false)}/>
        <SideDrawer show = {show} click={()=> setShow(false)}/>
        <Menu />
        <Footer />
    </div>
  );
}
 
export default App;
