import React from 'react'
import { Link } from 'react-router-dom'
import './bannerhome.css'

const BannerHome = () => {
  return (
    <div className='banner-home-section'>
      <div className='container'>
        <div className='row'>
            <div className='col-md-6 col-sm-6 col-12'>
                <div className='banner'>
                    <Link to="/" className='banner-img'><img src="img/banner-1-electronic-1.jpg" alt="nammer-img" /></Link>
                    <div className='banner-content'>
                        <h5>NEW ARRIVALS</h5>
                        <h3>
                         <span>VIRTUAL REALITY 3D</span>
                         <span>MOBILE GAME</span>
                        </h3>
                        <Link to="/" className='banner-button-link'>Buy Now</Link>
                    </div>
                </div>
            </div>
            <div className='col-md-6 col-sm-6 col-12'>
                <div className='banner'>
                    <Link to="/" className='banner-img'><img src="img/banner-2-electronic-1.jpg" alt="nammer-img" /></Link>
                    <div className='banner-content'>
                        <h5>NEW ARRIVALS</h5>
                        <h3>
                         <span>VIRTUAL REALITY 3D</span>
                         <span>MOBILE GAME</span>
                        </h3>
                        <Link to="/" className='banner-button-link'>Buy Now</Link>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default BannerHome
