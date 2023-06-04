import React, { useState } from 'react'
import './carosoulhome.css'
import Slider from "react-slick";
import {carosouplSettings} from './CarosoulSestting'
import ProductHome from '../product/ProductHome';

const CarosoulHome = () => {


  let time = new Date().toLocaleTimeString();

  const [ctime, setCtime] = useState(time);

  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time);
  }

  setInterval(updateTime,1000);

  return (
    <div className='carosoal-home'>
        <div className='container'>
            <div className='carosoul-top'>
                <h3>Flash Sale Today!</h3>
                <div className='time'>
                  <label>Deals ends in:</label>
                  <h3>{ctime}</h3>
                </div>
            </div>
      <div className='carosoul-home-slider'>
      <Slider {...carosouplSettings}>
        <div className='home-carosoul'>
            <ProductHome />
        </div>
        <div className='home-carosoul'>
            <ProductHome />
        </div>
        <div className='home-carosoul'>
            <ProductHome />
        </div>
        <div className='home-carosoul'>
            <ProductHome />
        </div>
        <div className='home-carosoul'>
            <ProductHome />
        </div>
        <div className='home-carosoul'>
            <ProductHome />
        </div>
      </Slider>
      </div>
      </div>
    </div>
  )
}

export default CarosoulHome
