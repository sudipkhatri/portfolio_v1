import React from 'react';
import './options.css'
import { TiMediaPlayOutline } from "react-icons/ti";

export default function Interest(){

    return(
        <div className = "Skills-container" >
            <div className = "col-1">
                <ul className = "ul">
                <li> <span> <TiMediaPlayOutline/> Reading </span> </li>
                <li> <span> <TiMediaPlayOutline/> Writing </span> </li>
                <li> <span><TiMediaPlayOutline/>  Guitar </span> </li>
                <li> <span> <TiMediaPlayOutline/> Design </span> </li>

                </ul>

            </div>
            <div className = "col-2">
                <ul className = "ul">
                <li> <span> <TiMediaPlayOutline/> Chess </span> </li>
                <li> <span> <TiMediaPlayOutline/> Music </span> </li>
                <li>  <span> <TiMediaPlayOutline/> Travel </span> </li>
                <li> <span> <TiMediaPlayOutline/> Dance </span> </li>
               
                </ul>
            </div>
        </div>
    )

}