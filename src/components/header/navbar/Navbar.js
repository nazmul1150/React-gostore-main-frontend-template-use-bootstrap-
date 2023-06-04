import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import Magamenu from './magamenu/Magamenu'
import './navbar.css'

const Navbar = () => {
  const number = [1,2,3,4,5,6,7,8];

  const pathname = useLocation().pathname

  // const activeCss = (curr) => {
  //   let history = useHistory();
  //   if(history.location.pathname===curr){
  //     return "category-dropdown-menu";
  //   }
  // }

  return (
    <div className='navbar-section'>
     <div className='container'>
       <div className='navbar-menu'>
        <div className='nav-catagory dropdown'>
            <a className='category-button' role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i className="fa-solid fa-bars"></i>
            SHOP BY CATEGORIES
            </a>
            <div
            className={`${pathname === '/' ? 'dropdown-menu category-dropdown-menu category-dropdown-active-home' : 'dropdown-menu category-dropdown-menu'}`}
             //className= 'dropdown-menu category-dropdown-menu'
            >
                <ul>
                    <li >
                        <a href='#'>
                          <i className="fa-solid fa-calendar-day"></i>
                          Hot Deals!
                        </a>
                    </li>
                    <li >
                        <a href='#'>
                         <i className="fa-regular fa-star"></i>
                          Top 100 Offers
                        </a>
                    </li>
                    <li >
                        <a href='#'>
                         <i className="fa-regular fa-star"></i>
                          Smartphone & Tablet
                          <span>
                           <i className="fa-solid fa-chevron-right"></i>
                          </span>
                        </a>
                    </li>
                    <li >
                        <a href='#'>
                         <i className="fa-regular fa-star"></i>
                         Computer & Laptop
                          <span>
                           <i className="fa-solid fa-chevron-right"></i>
                          </span>
                        </a>
                    </li>
                    <li >
                        <a href='#'>
                         <i className="fa-regular fa-star"></i>
                         TV & Audio
                          <span>
                           <i className="fa-solid fa-chevron-right"></i>
                          </span>
                        </a>
                    </li>
                    <li >
                        <a href='#'>
                         <i className="fa-regular fa-star"></i>
                         Games & Accessories
                          <span>
                           <i className="fa-solid fa-chevron-right"></i>
                          </span>
                        </a>
                        <ul className='submenu '>
                          <li>
                            <Magamenu />
                          </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        {/* navmenu */}
        <div className='nav-menu'>
           <ul className='nav-menu-ul'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <div className='sub-dropdown-menu dropdown'>
                <a href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                 Shop 
                 <i className="fa-solid fa-chevron-down"></i>
                </a>
                <div className='dropdown-menu'>
                <ul>
                    <li>
                        <Link to='shop'>Shop Page</Link>
                    </li>
                    <li>
                        <Link to='/shopSingle'>Shop Single</Link>
                    </li>
                </ul>
                </div>
               </div>
            </li>
            <li>
              <div className='sub-dropdown-menu dropdown'>
                <a href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                 Page 
                 <i className="fa-solid fa-chevron-down"></i>
                </a>
                <div className='dropdown-menu'>
                <ul>
                    <li>
                        <Link to='/cart'>Cart Page</Link>
                    </li>
                    <li>
                        <Link to='/checkout'>Checkout Page</Link>
                    </li>
                    <li>
                        <Link to='/dashbord'>Dashbord</Link>
                    </li>
                    <li>
                        <Link to='/logreg'>Logine & Registation</Link>
                    </li>
                </ul>
                </div>
               </div>
            </li>
            <li>
              <div className='sub-dropdown-menu dropdown'>
                <a href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                 Blog 
                 <i className="fa-solid fa-chevron-down"></i>
                </a>
                <div className='dropdown-menu'>
                <ul>
                    <li>
                        <Link to='/blog'>Blog Page</Link>
                    </li>
                    <li>
                        <Link to='/blogsingle'>Blog Single</Link>
                    </li>
                </ul>
                </div>
               </div>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
           </ul>
        </div>
        <div className='nav-info'>
           <div className='resent-view-product dropdown'>
                <a href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Recently Viewed 
                 <i className="fa-solid fa-chevron-down"></i>
                </a>
                <div className='dropdown-menu'>
                <ul>
                  {number.map((item) => (
                    <li key={item}>
                    <a href='#' className='resent-view-thumbnal'>
                       <img src="./img/electronic-34-450x450.jpg" alt="product-img" />
                    </a>
                    <div className='resent-view-wrapper'>
                    <h3 className='resent-view-title'>
                       <a href='#'>
                         4K UHD LED Smart TV with Chromecast Built-in
                       </a>
                     </h3>
                     <label className='resent-view-price'>
                         <del>$500.0</del> <span>$400.0</span>
                     </label>
                    </div>
                   </li>
                  ))}
                    
                </ul>
                </div>
           </div>
           <div className='information'>
           <i class="fa-solid fa-mobile-retro"></i>(+84) 777 890 999
           </div>
        </div>
       </div>
     </div>
    </div>
  )
}

export default Navbar
