import { TiMediaPlayOutline } from 'react-icons/ti';

import './options.css'

export default function Skills(){
    return(
        <div className = "Skills-container" >
            <div className = "col-1">
                <ul className = "ul">
                <li> <span> <TiMediaPlayOutline/> React JS </span> </li>
                <li> <span> <TiMediaPlayOutline/> Node JS </span> </li>
                <li> <span><TiMediaPlayOutline/>  Php </span> </li>
                <li> <span> <TiMediaPlayOutline/> Python </span> </li>
                <li> <span> <TiMediaPlayOutline/> JQuery </span> </li>

                </ul>

            </div>
            <div className = "col-2">
                <ul className = "ul">
                <li> <span> <TiMediaPlayOutline/> MYSQL </span> </li>
                <li> <span> <TiMediaPlayOutline/> MongoDB </span> </li>
                <li>  <span> <TiMediaPlayOutline/> Wordpress </span> </li>
                <li> <span> <TiMediaPlayOutline/> ES6 </span> </li>
                <li> <span> <TiMediaPlayOutline/> Java </span> </li>
               
                </ul>
            </div>
        </div>
    )

    
}