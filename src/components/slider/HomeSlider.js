import React from 'react'
import { Link } from "react-router-dom";
import './homeslider.css'
import Slider from "react-slick";

const HomeSlider = () => {
    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true
      };
  return (
    <div className='slider-section'>
    <div className='container'>
        <div className='home-slider'>
      <Slider {...settings}>
          <div className='slider-section'>
            <div className='slider-content'>
                <h5>Coming Soon On May</h5>
                <h3>
                    <strong>NEW CAMERA</strong> <br></br>
                    <strong>20.3MP</strong>  60FPS <br></br>
                    <strong>4K</strong> VIDEO
                </h3>
                <Link to='/' className='slider-button'>Buy Now</Link>
            </div>
            <div className='slider-img'>
                <Link to="#"><img src="img/slide1-electronic-1.png" alt="" /></Link>
            </div>
          </div>
          <div className='slider-section'>
            <div className='slider-content'>
                <h5>Coming Soon On May</h5>
                <h3>
                    <strong>NEW LAPTOP</strong> <br></br>
                    <strong>20.3MP</strong>  60FPS <br></br>
                    <strong>4K</strong> VIDEO
                </h3>
                <Link to='/' className='slider-button'>Buy Now</Link>
            </div>
            <div className='slider-img'>
                <Link to="#"><img src="img/slide2-electronic1.png" alt="" /></Link>
            </div>
          </div>
        </Slider>
        </div>
    </div>
    </div>
  )
}

export default HomeSlider
