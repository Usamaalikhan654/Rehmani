import React from 'react';
import "./Detail.css";
import { Container } from "react-bootstrap"
import colImg from "../../Assets/col-img.png"
import CarouselSlider from '../../components/Carousel/Carousel';
import Sliderimg from "../../Assets/slide-img1.png"
import Iframe from "iframe";

function Detail() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-lg-6'>
             <img className='img-block'  src={colImg}/>
        </div>
        

              <div  className="col-lg-6 page-text">
                 <h3 className='col-heading'>WHO WE ARE ?</h3>
                 {/* <div className='square-border'>
                   <div className='border-item'></div>
                 </div> */}

                 <div>
                   <p style={{ textAlign: "justify" }}>
                   Rehmani Properties is a holding of Rehmani Group of companies and is a trusted name in the market. We are Known to deliver not what we promise but what we even mention. We aim exclusivity and perfection in every project we pursue and with the will of Allah almighty, we have not face any disappointment so far. all our projects are conceived, Keeping the greater good of all the stakeholders in mind and are successfully delivering the desired results. With the same will, passion and commitment, rehmani properties is presenting a novel housing concept for smes, cottage industries and home based businesses. While ensuing the lifestyle for family with complete security, the project aims to offer all the facilities for businesses to flourish.
                   </p>
                 </div>
              </div>
</div>

 <div>
   <CarouselSlider/>
 </div>


  </div>
 
  )
}

export default Detail;