import React from 'react'
import { Link } from 'react-router-dom'
import './shopSingleSummery.css'

const ShopSingleSummery = () => {
  return (
    <>
      <div className='shop-single-rating'>
        <span><i class="fa-solid fa-star"></i></span>
        <span><i class="fa-solid fa-star"></i></span>
        <span><i class="fa-solid fa-star"></i></span>
        <span><i class="fa-solid fa-star"></i></span>
        <span><i class="fa-regular fa-star"></i></span>
        <label>(3.5)</label>
      </div>
      <h3 className='shop-single-title'>Microsoft Surface Laptop 3-15” Touch-Screen</h3>
      <div className='product-details__short-description'>
        <p>
          Screen Size: 8 Inches <br></br>
          Screen Resolution: 1280 x 800 pixels
        </p>
      </div>
      <div className='product_price_amount'>
      <label>
        <del>$500.0</del> <span>$400.0</span>
      </label>
      </div>
      <div className='produvt_varitation'>
        <h3>SERIES CPU</h3>
        <Link to="#">Cor i5</Link>
        <Link to="#">Cor i7</Link>
        <Link to="#">Cor i9</Link>
      </div>
      <div class="single-product-qty">
        <label class="qty">
          <input type="button" class="minus" value="-" />
          <input type="number" step="1" min="0" max="" name="" title="Qty" size="4" placeholder="" inputmode="numeric" autocomplete="off" value="1" />
          <input type="button" class="plus" value="+" />
        </label>
        <Link to="#" className='single_product_qty_product_add_to_cart'>Add To Cart</Link>
        <Link to="#" className='single_product_qty_product_buy_now'>Buy Now</Link>
      </div>
      <div className='single_product_button'>
        <Link className='single_product_wishlist'><i class="fa-regular fa-heart"></i>Wishlist</Link>
        <Link className='single_product_compare'><i class="fa-solid fa-repeat"></i>Compare</Link>
      </div>
      <div className='single_product_meta_content'>
        <p className='single_product_avility'>Availability:<span>In Stock</span></p>
        <p className='single_product_sku'>SKU:<span>0001</span></p>
        <div className='single_product_brands'>
          Brands:
          <div>
          <Link>Brand 05,</Link> &nbsp;
          <Link>Brand 06</Link>
          </div>
        </div>
      </div>
      <div className='single_product_sher_button'>
      <div class="footer-sosial-media">
            <a class="sosial-media-facebook" href="/blogsingle">
                <i class="fa-brands fa-facebook-f"></i>
            </a>
            <a class="sosial-media-twitter" href="/blogsingle">
                <i class="fa-brands fa-twitter"></i>
            </a>
            <a class="sosial-media-youtube" href="/blogsingle">
                <i class="fa-brands fa-youtube"></i></a>
                <a class="sosial-media-instagram" href="/blogsingle">
                    <i class="fa-brands fa-instagram"></i>
                    </a>
            </div>
      </div>
    </>
  )
}

export default ShopSingleSummery
