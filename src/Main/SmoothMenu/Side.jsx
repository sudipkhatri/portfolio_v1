import { React, useState } from 'react';
import Education from './Menuoptions/Education';
import Work from './Menuoptions/Work';
import Skills from './Menuoptions/Skills';
import Interest from './Menuoptions/Interest';
// import Project from './Menuoptions/Project';
import './Side.css'



const Side = () =>{
    
    const options = ['Education', 'Work', 'Skills', 'Interest']
    const [myOptions, setmyOptions] = useState('')
    // const logo = [<FaUniversity/>, <MdWork/>, <MdComputer/>, <GrProjects/>, <BiGame/>]
    // const [myLogo, setmyLogo] = useState("")
    
    return(
           <div className = "Menu-container">
               <div className = "Menu-items">
                  <ul className = "list-items">
                      {options.map((optionsArray ,index )=>(
                        <li className = "list" key = {index}>
                            <button 
                                key = {index}
                                type = "button"
                                onClick = {() => {

                                    setmyOptions(optionsArray)
                                    // need to create functon to style list 

                                    }
                                }
                            > 
                            {optionsArray.toLocaleUpperCase()}
                             </button>
                        </li>
                        
                      ))}
                     
                  </ul>
               </div>
               <div className = "show-Menu">
                        {myOptions === '' && <Education />}
                        {myOptions === 'Education' && <Education/>}
                        {myOptions === 'Work' && <Work/>}
                        {myOptions === 'Skills' && <Skills/>}
                        {/* {myOptions === 'Projects' && <Project/>} */}
                        {myOptions === 'Interest' && <Interest/>}   
               </div>
           </div> 
    )
}


export default Side;

