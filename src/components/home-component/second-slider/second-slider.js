import React from "react";
import { ComparisonSlider } from 'react-comparison-slider';
import "./suit-slider.scss"

const SecondSlider = () => {


    return(
        <div className="mt-20" id="second-slider">
            <ComparisonSlider
                defaultValue={50}
                itemOne={<img src="./img/second-slider/suit1.jpg" style={{width:"100%"}} alt=""/>}
                itemTwo={<img src="./img/second-slider/suit2.jpg" style={{width:"100%"}} alt=""/>}
                aspectRatio={16 / 9}
                orientation="horizontal"
            />
        </div>
    )
}


export default SecondSlider;