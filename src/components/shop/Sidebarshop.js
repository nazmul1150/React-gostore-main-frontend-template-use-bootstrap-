import React from 'react'
import { Link } from 'react-router-dom'
import './sidebarshop.css'

const Sidebarshop = () => {
  return (
    <>
    {/* category */}
      <div className='shop-sidebar-category'>
        <h3 className='sidebar-title'>
            SHOP BY CATEGORIES
        </h3>
        <ul className='shop-sidebar-category-ul'>
            <li className='shop-sidebar-category-ul-li'>
             <Link to="#">
              <input name="category" type="checkbox" value="forever" />
               Accessories
             </Link>
              <button class="collapsed" data-bs-toggle="collapse" data-bs-target="#cat1-collapse" aria-expanded="false"> 
              </button>
              <div class="collapse" id="cat1-collapse">
                <ul class="shop-sidebar-category-dropdown">
                 <li><Link to="#">Backup Charger</Link></li>
                 <li><Link to="#">Headphone</Link></li>
                 <li><Link to="#">Power Socket</Link></li>
                 <li><Link to="#">Printer</Link></li>
                 <li><Link to="#">USB</Link></li>
                 <li><Link to="#">Webcam</Link></li>
                 <li><Link to="#">Wi-Fi Router</Link></li>
                </ul>
                </div>
            </li>
            <li className='shop-sidebar-category-ul-li'>
             <Link to="#">
              <input name="category" type="checkbox" value="forever" />
              Cameras & Photos
             </Link>
              <button class="collapsed" data-bs-toggle="collapse" data-bs-target="#cat2-collapse" aria-expanded="false"> 
              </button>
              <div class="collapse" id="cat2-collapse">
                <ul class="shop-sidebar-category-dropdown">
                 <li><Link to="#">Backup Charger</Link></li>
                 <li><Link to="#">Headphone</Link></li>
                 <li><Link to="#">Power Socket</Link></li>
                 <li><Link to="#">Printer</Link></li>
                 <li><Link to="#">USB</Link></li>
                 <li><Link to="#">Webcam</Link></li>
                 <li><Link to="#">Wi-Fi Router</Link></li>
                </ul>
                </div>
            </li>
            <li className='shop-sidebar-category-ul-li'>
             <Link to="#">
              <input name="category" type="checkbox" value="forever" />
              Computer & Laptop
             </Link>
              <button class="collapsed" data-bs-toggle="collapse" data-bs-target="#cat3-collapse" aria-expanded="false"> 
              </button>
              <div class="collapse" id="cat3-collapse">
                <ul class="shop-sidebar-category-dropdown">
                 <li><Link to="#">Backup Charger</Link></li>
                 <li><Link to="#">Headphone</Link></li>
                 <li><Link to="#">Power Socket</Link></li>
                 <li><Link to="#">Printer</Link></li>
                 <li><Link to="#">USB</Link></li>
                 <li><Link to="#">Webcam</Link></li>
                 <li><Link to="#">Wi-Fi Router</Link></li>
                </ul>
                </div>
            </li>
            <li className='shop-sidebar-category-ul-li'>
             <Link to="#">
              <input name="category" type="checkbox" value="forever" />
              Electronic & Housewares
             </Link>
              <button class="collapsed" data-bs-toggle="collapse" data-bs-target="#cat4-collapse" aria-expanded="false"> 
              </button>
              <div class="collapse" id="cat4-collapse">
                <ul class="shop-sidebar-category-dropdown">
                 <li><Link to="#">Backup Charger</Link></li>
                 <li><Link to="#">Headphone</Link></li>
                 <li><Link to="#">Power Socket</Link></li>
                 <li><Link to="#">Printer</Link></li>
                 <li><Link to="#">USB</Link></li>
                 <li><Link to="#">Webcam</Link></li>
                 <li><Link to="#">Wi-Fi Router</Link></li>
                </ul>
                </div>
            </li>
            <li className='shop-sidebar-category-ul-li'>
             <Link to="#">
              <input name="category" type="checkbox" value="forever" />
              Games & Accessories
             </Link>
              <button class="collapsed" data-bs-toggle="collapse" data-bs-target="#cat5-collapse" aria-expanded="false"> 
              </button>
              <div class="collapse" id="cat5-collapse">
                <ul class="shop-sidebar-category-dropdown">
                 <li><Link to="#">Backup Charger</Link></li>
                 <li><Link to="#">Headphone</Link></li>
                 <li><Link to="#">Power Socket</Link></li>
                 <li><Link to="#">Printer</Link></li>
                 <li><Link to="#">USB</Link></li>
                 <li><Link to="#">Webcam</Link></li>
                 <li><Link to="#">Wi-Fi Router</Link></li>
                </ul>
                </div>
            </li>
            <li className='shop-sidebar-category-ul-li'>
             <Link to="#">
              <input name="category" type="checkbox" value="forever" />
              Smartphone & Tablet
             </Link>
              <button class="collapsed" data-bs-toggle="collapse" data-bs-target="#cat6-collapse" aria-expanded="false"> 
              </button>
              <div class="collapse" id="cat6-collapse">
                <ul class="shop-sidebar-category-dropdown">
                 <li><Link to="#">Backup Charger</Link></li>
                 <li><Link to="#">Headphone</Link></li>
                 <li><Link to="#">Power Socket</Link></li>
                 <li><Link to="#">Printer</Link></li>
                 <li><Link to="#">USB</Link></li>
                 <li><Link to="#">Webcam</Link></li>
                 <li><Link to="#">Wi-Fi Router</Link></li>
                </ul>
                </div>
            </li>
            <li className='shop-sidebar-category-ul-li'>
             <Link to="#">
              <input name="category" type="checkbox" value="forever" />
              TV & Audio
             </Link>
              <button class="collapsed" data-bs-toggle="collapse" data-bs-target="#cat7-collapse" aria-expanded="false"> 
              </button>
              <div class="collapse" id="cat7-collapse">
                <ul class="shop-sidebar-category-dropdown">
                 <li><Link to="#">Backup Charger</Link></li>
                 <li><Link to="#">Headphone</Link></li>
                 <li><Link to="#">Power Socket</Link></li>
                 <li><Link to="#">Printer</Link></li>
                 <li><Link to="#">USB</Link></li>
                 <li><Link to="#">Webcam</Link></li>
                 <li><Link to="#">Wi-Fi Router</Link></li>
                </ul>
                </div>
            </li>
            <li className='shop-sidebar-category-ul-li'>
             <Link to="#">
              <input name="category" type="checkbox" value="forever" />
              Uncategorized
             </Link>
            </li>
        </ul>
      </div>
      {/* price */}
      <div className='shop-sidebar-price'>
        <h3 className='sidebar-title'>
        PRICE
        </h3>
     </div>
     <div className='shop-sidebar-colors'>
        <h3 className='sidebar-title'>
        COLORS
        </h3>
        <div className='colors-group'>
          <ul className='colors-ul'>
            <li>
              <Link>
              <span style={{background:"#d1d1d1"}}>Gray</span>
              </Link>
            </li>
            <li>
              <Link>
              <span style={{background:"#FC7C8D"}}>Gray</span>
              </Link>
            </li>
            <li>
              <Link>
              <span style={{background:"#FEE496"}}>Gray</span>
              </Link>
            </li>
            <li>
              <Link>
              <span style={{background:"#161616"}}>Gray</span>
              </Link>
            </li>
            <li>
              <Link>
              <span style={{background:"#0B5FB5"}}>Gray</span>
              </Link>
            </li>
            <li>
              <Link>
              <span style={{background:"#00A651"}}>Gray</span>
              </Link>
            </li>
            <li>
              <Link>
              <span style={{background:"#F50000"}}>Gray</span>
              </Link>
            </li>
          </ul>
        </div>
     </div>
     <div className='shop-sidebar-tags'>
        <h3 className='sidebar-title'>
        Tages
        </h3>
        <div class="shop-tag">
         <a href="/shop">Ryzen</a>
         <a href="/shop">Xeon</a>
         <a href="/shop">Athlon</a>
         <a href="/shop">Core i5</a>
         <a href="/shop">Core i7</a>
         <a href="/shop">Core i9</a>
         <a href="/shop">Celeron</a>
         <a href="/shop">iphon</a>
        </div>
     </div>
     <div className='shop-sidebar-brands'>
        <h3 className='sidebar-title'>
        BRANDS
        </h3>
        <ul className='shop-sidebar-category-ul'>
            <li className='shop-sidebar-category-ul-li'>
             <Link to="#">
              <input name="category" type="checkbox" value="forever" />
               Brand 01
             </Link>
            </li>
            <li className='shop-sidebar-category-ul-li'>
             <Link to="#">
              <input name="category" type="checkbox" value="forever" />
               Brand 02
             </Link>
            </li>
            <li className='shop-sidebar-category-ul-li'>
             <Link to="#">
              <input name="category" type="checkbox" value="forever" />
               Brand 03
             </Link>
            </li>
            <li className='shop-sidebar-category-ul-li'>
             <Link to="#">
              <input name="category" type="checkbox" value="forever" />
               Brand 04
             </Link>
            </li>
            <li className='shop-sidebar-category-ul-li'>
             <Link to="#">
              <input name="category" type="checkbox" value="forever" />
               Brand 05
             </Link>
            </li>
        </ul>
     </div>
     
    </>
  )
}

export default Sidebarshop
