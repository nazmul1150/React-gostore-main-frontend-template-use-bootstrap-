import React from 'react'
import { Link } from 'react-router-dom'
import './shopmain.css'
import ProductHome from '../product/ProductHome'

const ShopMain = () => {
    const number = [1,2,3,4,5,6,7,8,9,10,11,12];
  return (
    <>
    <div className='shop-main-top'>
     <Link to="#" className='shop-main-top-title'>
        Show only products on sale
    </Link>
    <div className='shop-main-top-dropdown'>
        <Link to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" class="">
        Sort by latest<i class="fa-solid fa-chevron-down"></i>
        </Link>
        <div class="dropdown-menu">
            <ul>
                <li><a href="#">Sort by popularity</a></li>
                <li><a href="#">Sort by average rating</a></li>
                <li><a href="#">Sort by latest</a></li>
                <li><a href="#">Sort by price: low to high</a></li>
                <li><a href="#">Sort by price: high to low</a></li>
                </ul>
        </div>
    </div>
    </div>
    <div className='shop-main-body'>
        <div className='row shop-product-row'>
                {number.map((index)=>(
                  <div className='col-6 col-sm-4 col-md-3 shop-product'>
                    <div className=''>
                      <ProductHome />
                    </div>
                  </div>
                ))}
        </div>
        <div className='load-more'>
            <h3>You're viewed 20 of 79 products</h3>
            <Link to="#">LOAD MORE..</Link>
        </div>
    </div>
    </>
  )
}

export default ShopMain
