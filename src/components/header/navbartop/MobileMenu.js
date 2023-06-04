import React from 'react'
import './mobilemenu.css'

const MobileMenu = () => {
  return (
    <div className='mobile-sidebar-menu'>
     <div className='mobile-menu-tabs' role="tablist">
      <a 
      class="active" 
      id="list-menu-list"
      data-bs-toggle="list"
      href="#list-menu"
      role="tab"
      aria-controls="list-menu"
      >
        <i class="fa-solid fa-bars"></i> Menu
      </a>
      <a 
      class="" 
      id="list-category-list" 
      data-bs-toggle="list" 
      href="#list-category" 
      role="tab" 
      aria-controls="list-category"
      >
        <i class="fa-solid fa-table-cells-large"></i> Category
      </a>
    </div>

    <div class="tab-content" id="nav-tabContent">
      <div class="tab-pane fade show active" id="list-menu" role="tabpanel" aria-labelledby="list-menu-list">
       <div className='menu-item-mobile'>
        <h3>Menu</h3>
        <ul className='mobile-menu-ul'>
          <li className='mobile-menu-li'>
            <a className='mobile-menu-link active' href='#'>
              Home
              <span><i class="fa-solid fa-chevron-right"></i></span>
              </a>
          </li>
          <li className='mobile-menu-li'>
            <a className='mobile-menu-link' href='#'>
              About
              <span><i class="fa-solid fa-chevron-right"></i></span>
              </a>
          </li>
          <li className='mobile-menu-li'>
            <a className='mobile-menu-link' href='#'>
              Shop
              <span><i class="fa-solid fa-chevron-right"></i></span>
              </a>
          </li>
          <li className='mobile-menu-li'>
            <a className='mobile-menu-link' href='#'>
              Page
              <span><i class="fa-solid fa-chevron-right"></i></span>
              </a>
          </li>
          <li className='mobile-menu-li'>
            <a className='mobile-menu-link' href='#'>
              Blog
              <span><i class="fa-solid fa-chevron-right"></i></span>
              </a>
          </li>
          <li className='mobile-menu-li'>
            <a className='mobile-menu-link' href='#'>
              Contact
              <span><i class="fa-solid fa-chevron-right"></i></span>
              </a>
          </li>
        </ul>
       </div>
      </div>
      <div class="tab-pane fade" id="list-category" role="tabpanel" aria-labelledby="list-category-list">
      <div className='menu-item-mobile'>
        <h3>Category</h3>
        <ul className='mobile-menu-ul'>
          <li className='mobile-menu-li'>
            <a className='mobile-menu-link active' href='#'>
              Hot Deals!
              <span><i class="fa-solid fa-chevron-right"></i></span>
              </a>
          </li>
          <li className='mobile-menu-li'>
            <a className='mobile-menu-link' href='#'>
            Top 100 Offers
              <span><i class="fa-solid fa-chevron-right"></i></span>
              </a>
          </li>
          <li className='mobile-menu-li'>
            <a className='mobile-menu-link' href='#'>
            Smartphone & Tablet
              <span><i class="fa-solid fa-chevron-right"></i></span>
              </a>
          </li>
          <li className='mobile-menu-li'>
            <a className='mobile-menu-link' href='#'>
            Computer & Laptop
              <span><i class="fa-solid fa-chevron-right"></i></span>
              </a>
          </li>
          <li className='mobile-menu-li'>
            <a className='mobile-menu-link' href='#'>
            TV & Audio
              <span><i class="fa-solid fa-chevron-right"></i></span>
              </a>
          </li>
          <li className='mobile-menu-li'>
            <a className='mobile-menu-link' href='#'>
            Games & Accessories
              <span><i class="fa-solid fa-chevron-right"></i></span>
              </a>
          </li>
        </ul>
       </div>
      </div>

    </div>

    </div>
  )
}

export default MobileMenu
