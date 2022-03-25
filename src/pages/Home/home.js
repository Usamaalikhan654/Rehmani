import React, { useRef,useState } from 'react'
import Footer from '../../components/Footer/Footer';
import Header from "../../components/Header/Header";
import Detail from './Detail';
import "./main.css";
import {Button} from "react-bootstrap";
import ReactPlayer from 'react-player'

import Backvideo from "../../Video/RehmaniCottages.mp4"

function Home() {

  const playerRef = useRef(null);
  const [playing, setPlaying] = useState(true)
  return (
<div>
    <Header/>
    <div>
    <div className='container-fluid'>
    {/* <ReactPlayer  style={{ width: "1362px",marginLeft: "-14px" }} height="780px" controls={false}  loop={true} playing={playing}  progressInterval={200}  url="http://www.rehmaniproperties.com/static/media/RehmaniCottages.fea0efa065f7a4069900.mp4"/> */}

    {/* <video>
      <source autoplay loop src="http://www.rehmaniproperties.com/static/media/RehmaniCottages.fea0efa065f7a4069900.mp4" type="video/mp4"/>
    </video> */}
    </div>
    
    <video style={{ width: "100%" }}  autoPlay loop>
  <source  src={Backvideo} type="video/mp4"/>
  <p>Your browser cannot play the provided video file.</p>
</video>
   
    {/* <div>
      <p className="legendHeading">
      <span className='Headingpart'>REHMANI PROPERTIES </span> 
      BY REHMANI PROPERTIES
      </p>
      <p className="legenSubHeading">
      Seal Of The Future
      </p>
      <Button className='HeadingButton text-white'>ABOUT THE PROJECT</Button>
    </div> */}
  </div>

       <div>
          <Detail/>
      </div>

      {/* <div>
          <Footer/>
      </div> */}
      <div className='map1'>
 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.799833628273!2d67.04281131500575!3d25.006916683985086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x64dac87bc14f76f7!2zMjXCsDAwJzI0LjkiTiA2N8KwMDInNDIuMCJF!5e0!3m2!1sen!2s!4v1647623174043!5m2!1sen!2szoom=12" width="600" height="450" style="border:0;" allowfullscreen=""   style={{ width: "100%",height: "540px",border: "none"}} loading="lazy"></iframe>
 </div>

 <div>
   <Footer/>
 </div>
  </div>
  )
}

export default Home;