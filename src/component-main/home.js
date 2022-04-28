import React from 'react';
import SliderHero from "../components/home-component/slider-hero/slider-hero";
import UnderHero from "../components/home-component/under-hero/under-hero";
import SecondSlider from "../components/home-component/second-slider/second-slider";
import Address from "../components/home-component/address/address";




const Home = () => {


    return(
        <div>
            <SliderHero/>
            <UnderHero/>
            <SecondSlider/>
            <Address/>
        </div>
    )
}

export default Home;