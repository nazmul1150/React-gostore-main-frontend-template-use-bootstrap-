import React from 'react'
import BurchampSinglepage from '../../components/burchamp/BurchampSinglepage'
import './shopSingle.css'
import ShopSingleSlider from '../../components/shop/ShopSingleSlider'
import ShopSingleSummery from '../../components/shop/ShopSingleSummery'
import ShopSingleOffer from '../../components/shop/ShopSingleOffer'
import SinglePageDetails from '../../components/shop/SinglePageDetails'
import ShopReviews from '../../components/shop/ShopReviews'
import ProductHome from '../../components/product/ProductHome'

const ShopSingle = () => {
  return (
    <>
      <BurchampSinglepage category="category" subcategory="subcategory" title="Microsoft Surface Laptop 3-15” Touch-Screen" />
      <div className='container shop-single-page'>
        <div className='row'>
            <div className='col-12 col-sm-6'>
                    <ShopSingleSlider />
            </div>
            <div className='col-12 col-sm-6'>
               <ShopSingleSummery />
            </div>
        </div>
        <div className='shop-single-offer-section'>
          <ShopSingleOffer />
        </div>
        <div className='shop-single-tabs-detals'>
          <SinglePageDetails />
        </div>
        <div className='shop-single-reviews'>
          <ShopReviews />
        </div>
        <div className='related-product-title'>
          <h3>You may be interested in…</h3>
        </div>
        <div className='shop-single-related_product'>
          <div className='row'>
            <div className='col-12 col-sm-6 col-md-3 related_product_colum'>
              <ProductHome />
            </div>
            <div className='col-12 col-sm-6 col-md-3 related_product_colum'>
              <ProductHome />
            </div>
            <div className='col-12 col-sm-6 col-md-3 related_product_colum'>
              <ProductHome />
            </div>
            <div className='col-12 col-sm-6 col-md-3 related_product_colum'>
              <ProductHome />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ShopSingle
