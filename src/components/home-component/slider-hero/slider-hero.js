import React from 'react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider-hero.scss";



const SliderHero = () => {

    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2500,
        cssEase: "linear"
    };

    const numOfSlider = [1,2,3,4]

    return(
        <div className="w-full h-full overflow-hidden" id="slider-hero">
            <Slider {...settings}>
                {
                    numOfSlider.map((item,index)=>{
                        return(
                            <div key={index}>
                                <img src={`./img/slider-hero/pic${item}.jpg`}  alt="aj_store" className="img-slider"/>
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    )
}

export default SliderHero;

