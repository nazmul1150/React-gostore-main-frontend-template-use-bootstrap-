import React from 'react'
import { Link } from 'react-router-dom'
import './producthome.css'

const ProductHome = () => {
  return (
    <div className='product-home-section'>
      <div className='product-home-img'>
        <Link to="#" className='img-corosoul'>
          <img src="img/electronic-9.jpg" alt="img" />
        </Link>
        <div className='com-wislist'>
          <div className='compair'>
            <Link className='compair-icon' tp="#">
               <i class="fa-solid fa-repeat"></i>
               <label>compair</label>
            </Link>
          </div>
          <div className='wishllist'>
            <Link className='wishllist-icon' tp="#">
               <i class="fa-regular fa-heart"></i>
               <label>wishlist</label>
            </Link>
          </div>
        </div>
      </div>
      <div className='carosoul-title'>
        <h3><Link to="#">Simple Mobile 4G LTE Prepaid Smartphone</Link></h3>
      </div>
      <div className='carosoul-rating'>
        <span><i class="fa-solid fa-star"></i></span>
        <span><i class="fa-solid fa-star"></i></span>
        <span><i class="fa-solid fa-star"></i></span>
        <span><i class="fa-solid fa-star"></i></span>
        <span><i class="fa-regular fa-star"></i></span>
        <label>(3.5)</label>
      </div>
      <div className='product-group-price-button-meta-wrapperr'>
        <div className='product-group-price-button-meta'>
          <div className='price-group'>
            <span className='price-dece'><del>$500.0</del></span>
            <span className='price-main'>$400.0</span>
          </div>
          <div className='product-group-button-meta'>
            <Link className='product-group-button-cart'>
              Add to cart
            </Link>
            <Link className='product-group-button-quick-view'>
              Quick View
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductHome
