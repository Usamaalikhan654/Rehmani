// src/components/bootstrap-carousel.component.js
import React from "react";
import "./Carousel.css";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sliderimg from "../../Assets/slide-img1.png"

class CarouselSlider extends React.Component {

    render() {
        return (
            <div>
                <div className='container' >
                    <div className="row slider-style">
                        <div className="col-sm-12">
                            <h3 className="slide-head">GALLERY</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                                <img style={{ height: "602px", marginTop: "10px",marginLeft: "72px" }} src={Sliderimg}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

export default CarouselSlider;