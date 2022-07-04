import './Project.css';
import  {AiFillGithub} from 'react-icons/ai';
import {CgWebsite} from 'react-icons/cg';
import { useState } from 'react';


const Project = () =>{

    const[isState, setIsState] = useState(false);
    const[text, setText]       = useState('View More');

    return(
        <div className="projects_container" id = "projects">
            <h2 className='project_title'> Projects<span className='highlight_keywords'> I've built.</span> </h2>
            <div className='all_projects'>
                
            <div className="projects_list">
                <h2 className='project_title'>Weather Apps</h2>
                <p className='project_desc'>
                    I have used <span className='highlight_keywords'>weather maps API </span> to fetch the data from <span className='highlight_keywords'>weather maps API. </span>
                    To make it automatic, I have use location tracker to track and display weather in current location.
                </p>
                <div className="link_add">
                    <a className='project_link' rel="noreferrer" target="_blank" href = "https://github.com/sudipkhatri/projects" ><AiFillGithub /></a>
                    <a className='project_link' rel="noreferrer" target="_blank" href = "https://github.com/sudipkhatri/projects" > <CgWebsite /></a>
                </div>

                
            </div>
            <div className="projects_list">
                <h2 className='project_title'>Find Cheap</h2>
                <p className='project_desc'>
                    I have improved the features of website such as tracking the number of likes and clicks on post and pages for effective SEO.
                    Bug fixes to make website look responsive and functioning.
                </p>
                 <div className="link_add">
                    <a className='project_link' rel="noreferrer" target="_blank" href = "https://findcheap.com.au" > <CgWebsite /></a>
                </div>
            </div>
            <div className="projects_list">
                <h2 className='project_title'>Scholoarship Ranking Website</h2>
                <p className='project_desc'> 
                    Created a web application that provides Scholoarship to student according to their grades.
                    I have used php for my backend and MySQL as a database. 
                </p>
                <div className="link_add">
                    <a className='project_link' rel="noreferrer" target="_blank" href = "https://github.com/sudipkhatri/website" ><AiFillGithub /></a>
                    <a className='project_link' rel="noreferrer" target="_blank" href = "https://github.com/sudipkhatri/website" > <CgWebsite /></a>
                </div>
            </div>
             <div className="projects_list">
                <h2 className='project_title'>Calculator</h2>
                <p className='project_desc'>Build a calulator using react JS to improve my react skills.
                 To improve coding skills and logic, I tried to make a simple and an effective Calculator.
                </p>
                 <div className="link_add">
                    <a className='project_link' rel="noreferrer" target="_blank" href = "https://github.com/sudipkhatri/reactCalculator" ><AiFillGithub /></a>
                    <a className='project_link' rel="noreferrer" target="_blank" href = "https://sudipkhatri.github.io/reactCalculator/" > <CgWebsite /></a>
                </div>
            </div>
          {isState &&
            <div className="projects_list">
                <h2 className='project_title'>TicTacToe</h2>
                <p className='project_desc'>Build a tictactoe game using react JS to improve my react skills and for fun.
                    which is great to learn and exercise react skills. It was such an interesting project to try and make it happen.
                </p>
                 <div className="link_add">
                    <a className='project_link' rel="noreferrer" target="_blank" href = "https://github.com/sudipkhatri/tictac" ><AiFillGithub /></a>
                    <a className='project_link' rel="noreferrer" target="_blank" href = "https://sudipkhatri.github.io/tictac/" > <CgWebsite /></a>
                </div>
            </div>
            }  {isState &&          
             <div className="projects_list">
                <h2 className='project_title'>First Portfolio</h2>
                <p className='project_desc'> My first portfolio which I have build using react.
                    where I learn and explore series of packages in react which helped me to developed my skills further.
                </p>
                <div className="link_add">
                    <a className='project_link' rel="noreferrer" target="_blank" href = "https://github.com/sudipkhatri/myportfolio" ><AiFillGithub /></a>
                    <a className='project_link'  rel="noreferrer" target="_blank" href = "https://sudipkhatri.github.io/myportfolio/" > <CgWebsite /></a>
                </div>
            </div>
            }
            
            </div>
            <div className='action_btn'>
                <button onClick = {()=>{
                    setIsState(!isState);
                    isState ? setText('View More') : setText('View Less');
                }}
                className = 'btn_action'
            >
                {text}
            </button>
            </div>
            
        </div>
    )
}

export default Project;