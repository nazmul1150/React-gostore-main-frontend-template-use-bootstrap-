import React, { useState } from 'react'
import './shopSingleSlider.css'
import Slider from 'react-slick';

const ShopSingleSlider = () => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const settings = {
    arrows:false,
    dots:false,
  }
  return (
    <div>
      <Slider 
      asNavFor={nav2}
       ref={(slider1) => setNav1(slider1)}
       className='single_product_img'
       {...settings}
      >
        <div>
          <img src='img/electronic-7 (1).jpg' alt='img' />
        </div>
        <div>
        <img src='img/electronic-72-600x600.jpg' alt='img' />
        </div>
        <div>
        <img src='img/electronic-73-600x600.jpg' alt='img' />
        </div>
        <div>
        <img src='img/electronic-71-600x600.jpg' alt='img' />
        </div>
        <div>
        <img src='img/electronic-74 (1).jpg' alt='img' />
        </div>
      </Slider>
      <Slider
        asNavFor={nav1}
        ref={(slider2) => setNav2(slider2)}
        slidesToShow={5}
        swipeToSlide={true}
        focusOnSelect={true}
        {...settings}
        className='single_product_img_carosoul_seting'
      >
        <div className='single_product_img_carosoul single_product_margin'>
          <img src='img/electronic-7 (1).jpg' alt='img' />
        </div>
        <div className='single_product_img_carosoul single_product_margin'>
        <img src='img/electronic-72-600x600.jpg' alt='img' />
        </div>
        <div className='single_product_img_carosoul single_product_margin'>
        <img src='img/electronic-73-600x600.jpg' alt='img' />
        </div>
        <div className='single_product_img_carosoul single_product_margin'>
        <img src='img/electronic-71-600x600.jpg' alt='img' />
        </div>
        <div className='single_product_img_carosoul single_product_margin'>
        <img src='img/electronic-74 (1).jpg' alt='img' />
        </div>
      </Slider>
    </div>
  )
}

export default ShopSingleSlider
