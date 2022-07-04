import './About.css';
import {TiMediaPlayOutline} from 'react-icons/ti';
import bg from '../../Img/cover.jpg';

const About = () =>{

    return(
        <div className="about-div" id = "about">
            <div className="descriptions">

               <div className="description">
               
               <h2> About Me  </h2>
                    <span className='line'> <hr/> </span>
                <p>
                My interest in web develop when I was amaze by the things that lives on web and what they are capable of.
                As there is so much to learn from web. From University, bulding <span className='design'> web application </span> to launching,
                I have been improving my skills day by day. Here at  <span className='design'>Hype Studio Design</span>,
                I have been improving my skills by creating beautiful web application that breathes using todays technology oxyzen <span className = "design">😜. </span> 
                </p>
               <br/>
                <p> <strong>Some of technology I used at Hype. </strong></p>

               </div>
                 
                  
            <div className="tech">

               
                
                <div className="list">
                    <div className="list-a">
                 <ul>
                    <li>
                     
                     <p className='jumbo'> <TiMediaPlayOutline/> Wordpress </p>
                                          
                     </li>
                     <li>
                        <p className='jumbo'> <TiMediaPlayOutline/> Php </p>
                     </li>
                     <li>
                        <p className='jumbo'> <TiMediaPlayOutline/> Bootstrap </p>
                     </li>
                     <li>
                        <p className='jumbo'> <TiMediaPlayOutline/> Javascript </p>
                     </li>
                     <li>
                        <p className='jumbo'> <TiMediaPlayOutline/> Python </p>
                     </li>
                </ul>
                </div>
                <div className="list-b">
                 <ul>
                    <li>
                     
                     <p className='jumbo'> <TiMediaPlayOutline/> AJAX </p>
                                          
                     </li>
                     <li>
                        <p className='jumbo'> <TiMediaPlayOutline/> React </p>
                     </li>
                     <li>
                        <p className='jumbo'> <TiMediaPlayOutline/> JQuery </p>
                     </li>
                     <li>
                        <p className='jumbo'> <TiMediaPlayOutline/> SEO </p>
                     </li>
                     <li>
                        <p className='jumbo'> <TiMediaPlayOutline/> MYSQL  </p>
                     </li>
                </ul>
                </div>

                </div>
                
               
            </div>
            </div>
           
            <div className="image">
               <div className="border">
                   <img src= {bg} alt="my cover pic" />
               </div>
               <div className="stack"></div>           
            </div>
        </div>
    )
}

export default About;