import React from 'react'
import Burchamp from '../../components/burchamp/Burchamp'
import ShopMain from '../../components/shop/ShopMain'
import Sidebarshop from '../../components/shop/Sidebarshop'
import './shop.css'

const Shop = () => {
  return (
    <>
      <Burchamp title="Shop Page" />
      <div className='shop-page'>
        <div className='container'>
        <div className='row'>
          <div className='col-12 col-sm-3 col-md-3 shop-sidebar-section'>
            <Sidebarshop />
          </div>
          <div className='col-12 col-sm-12 col-md-9 shop-mine-section'>
            <ShopMain />
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Shop
