import React from 'react'
import './homeservices.css'

const HomeServices = () => {
  return (
    <div className='home-services'>
      <div className='container'>
        <div className='row'>
            <div className='col-md-3 col-sm-6 col-6'>
                <div className='service-content'>
                    <div className='service-img'><img src="img/feature-1.png" alt="" /></div>
                    <div className='service-text'>
                        <h3>DELIVERY IN 24H</h3>
                        <p>Free shipping over $100</p>
                    </div>
                </div>
            </div>
            <div className='col-md-3 col-sm-6 col-6'>
            <div className='service-content'>
                    <div className='service-img'><img src="img/feature-2.png" alt="" /></div>
                    <div className='service-text'>
                        <h3>DELIVERY IN 24H</h3>
                        <p>Free shipping over $100</p>
                    </div>
                </div>
            </div>
            <div className='col-md-3 col-sm-6 col-6'>
            <div className='service-content'>
                    <div className='service-img'><img src="img/feature-3.png" alt="" /></div>
                    <div className='service-text'>
                        <h3>DELIVERY IN 24H</h3>
                        <p>Free shipping over $100</p>
                    </div>
                </div>
            </div>
            <div className='col-md-3 col-sm-6 col-6'>
            <div className='service-content'>
                    <div className='service-img'><img src="img/feature-4.png" alt="" /></div>
                    <div className='service-text'>
                        <h3>DELIVERY IN 24H</h3>
                        <p>Free shipping over $100</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default HomeServices
