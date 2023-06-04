import React from 'react';
import { Link } from 'react-router-dom';
import './homeisotop.css';
import Slider from "react-slick";
import {carosouplisotop} from '../carosoul/CarosoulSestting';
import ProductHome from '../product/ProductHome';

const HomeIsotop = ({cat}) => {
  const number = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
  return (
    <div className='home-isotop-section'>
      <div className='container'>
        <div className='home-top-section'>
            <h3 className='home-title'>Smartphone & Tablet</h3>
        
            <div className='home-top-tabs' role="tablist">
             <a
              class="active" 
              id={`new-${cat}-list`}
              data-bs-toggle="list"
              href={`#new-${cat}`}
              role="tab"
              aria-controls={`#new-${cat}`}
              >
               New
              </a>

              <a
              class="" 
              id={`best-seller-${cat}-list`}
              data-bs-toggle="list"
              href={`#best-seller-${cat}`}
              role="tab"
              aria-controls={`#best-seller-${cat}`}
              >
                Best Seller
              </a>

              <a
              class="" 
              id={`top-rate-${cat}-list`}
              data-bs-toggle="list"
              href={`#top-rate-${cat}`}
              role="tab"
              aria-controls={`#top-rate-${cat}`}
              >
                Top Rate
              </a>
            </div>

        </div>
        <div className='home-isotop'>
        <div className='home-isotop-banner'>
                <Link to="">
                    <img src="img/banner-tab-tab-1.jpg" alt="banner" />
                </Link>
        </div>
            <div className='home-isotop-main' role="tablist">
             <div class="tab-content" id="nav-tabContent">
            <div
            class="tab-pane fade show active"
            id={`new-${cat}`}
            role="tabpanel"
             aria-labelledby={`new-${cat}-list`}
            >
              <Slider {...carosouplisotop}>
                {number.map((index)=> (
                  <div key={index} className='home-isotop-product'>
                  <ProductHome />
                  </div>
                ))}
              </Slider>
          </div>

          <div
            class="tab-pane fade"
            id={`best-seller-${cat}`}
            role="tabpanel"
             aria-labelledby={`best-seller-${cat}-list`}
            >
             <Slider {...carosouplisotop}>
                {number.map((index)=> (
                  <div key={index} className='home-isotop-product'>
                  <ProductHome />
                  </div>
                ))}
              </Slider>
          </div>

          <div
            class="tab-pane fade"
            id={`top-rate-${cat}`}
            role="tabpanel"
             aria-labelledby={`top-rate-${cat}-list`}
            >
              <Slider {...carosouplisotop}>
                {number.map((index)=> (
                  <div key={index} className='home-isotop-product'>
                  <ProductHome />
                  </div>
                ))}
              </Slider>
          </div>

            </div>

            </div>
            <div className='home-isotop-category'>
                <ul className='home-isotop-ul'>
                    <li><Link to="#">Iphone</Link></li>
                    <li><Link to="#">Ipad</Link></li>
                    <li><Link to="#">Samsung</Link></li>
                    <li><Link to="#">Huawei</Link></li>
                    <li><Link to="#">Amazon</Link></li>
                    <li><Link to="#">Phon Case</Link></li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default HomeIsotop
