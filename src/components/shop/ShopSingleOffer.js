import React from 'react'
import { Link } from 'react-router-dom'
import './shopSingleOffer.css'

const ShopSingleOffer = () => {
  return (
    <div className='shop_shingle_offer_section'>
      <h3>FREQUENTLY BOUGHT TOGETHER</h3>
      <div className='row'>
        <div className='col-12 col-sm-9 col-md-9'>
            <div className='shop_offer_img'>
                <img src="img/electronic-7.jpg" alt="img" />
                <span>+</span>
                <img src="img/electronic-60.jpg" alt="img" />
                <span>+</span>
                <img src="img/electronic-64.jpg" alt="img" />
            </div>
            <div className='shop_offer_text'>
                <p>This Product: Microsoft Surface Laptop 3-15” Touch-Screen – Core i5 – $750.00</p>
                <p>Desktop Webcam, HD 720p Widescreen – $200.00</p>
                <p>Verbatim Optical Mouse USB Accessibility – $30.00</p>
            </div>
        </div>
        <div className='col-12 col-sm-3 col-md-3'>
         <div className='shop_offer_price'>
            <h6>Price for all:</h6>
            <span>$980.00</span>
            <Link to="#">
                Add To Cart
            </Link>
         </div>
        </div>
      </div>
    </div>
  )
}

export default ShopSingleOffer
