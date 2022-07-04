import './Employment.css';
import { TiMediaPlayOutline } from "react-icons/ti";

const Work = () =>{

    return (
      <div className="employment">
        <div className="history">
          <div className="work_1">
            <h2 className="title"> Hype Studio Design </h2>
            <p className="position"> Full Stack Developer</p>
            <p className="desc">2022 - Current </p>
            <ul className="list_activities">
              <li className="list_tasks">
               <p> <TiMediaPlayOutline /> Work with team to upgrate web application features, improvisation and bug fixes. </p>
                </li>
              <li className="list_tasks">
                <p> <TiMediaPlayOutline /> Communicate with client providing feedback and suggestions. </p>
              </li>
              <li className="list_tasks">
                <p> <TiMediaPlayOutline /> Write readable, clean code for diverse array of client and for internal project. </p>
              </li>

            </ul>
          </div>
          <div className="work_2">
            <h2 className="title">All-Ripe</h2>
            <p className="position"> Full Stack Developer</p>
            <p className="desc">2020 - 2021 </p>
            <ul className="list_activities">
              <li className="list_tasks">
                <p> <TiMediaPlayOutline /> Working with database queries, fetching data and authentication. </p>
              </li>
              <li className="list_tasks">
               <p>  <TiMediaPlayOutline /> Communicate with stakeholders on daily basis to provide projects details, feedback and suggestion. </p>
              </li>
              <li className="list_tasks">
               <p>  <TiMediaPlayOutline /> Work with diverse team to meet project goals and deliveries.  </p>
              </li>
            </ul>
          </div>
          {/* <div className="work_3">
            <h2 className="title">Sonoma Artisian Sourdough Bakers </h2>
            <p className="position"> Baker Assistant </p>
            <p className="desc">2020 - 2022 </p>
            <ul className="list_activities">
              <li className="list_tasks">
               <p>  <TiMediaPlayOutline /> Work in a team to provide bread for larger retail suppliers like Woolworths and Aldi. </p>
              </li>
              <li className="list_tasks">
                <p> <TiMediaPlayOutline /> Maintain food hygeine and safety to top level to prevent from contamination. </p>
              </li>
              <li className="list_tasks">
               <p>  <TiMediaPlayOutline /> Training newly joined staff and supervising. </p>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    );

}


export default Work;