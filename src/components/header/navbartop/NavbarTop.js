import React, { useEffect } from 'react'
import Navbar from '../navbar/Navbar';
import MobileMenu from './MobileMenu';
import './navbartop.css'
import { Link } from 'react-router-dom';


const NavbarTop = ({show,MenuControl}) => {

    const number = [1,2,3,4,5,6,7,8,9,10];
  return (
    <>
    <div className='navbar-top'>
     <div className='container'>
        <div className='navbar-top-section'>
            <div className='navbar-top-left'>
                <Link to='/'>
                  <img src="img/logo.png" alt="logo" />
               </Link>
               <a data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                <i class="fa-solid fa-bars"></i>
                </a>
                 <div class="mobile-menu-section offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <MobileMenu />
                </div>
            </div>
            <div className='navbar-top-meddle'>
                <div className='sticky-menu-icon'>
                  <a onClick={MenuControl}><i class="fa-solid fa-bars"></i></a>
                </div>
               <div className='navbar-top-search'>
                <form>
                    <select>
                    <option selected>All Categories</option>
                    <option value="1">One</option>
                    <option value="backup-charger">&nbsp;&nbsp;&nbsp;Backup Charger</option>
                    <option value="backup-charger">&nbsp;&nbsp;&nbsp;Backup Charger</option>
                    <option value="2">Two</option>
                    <option value="backup-charger">&nbsp;&nbsp;&nbsp;Backup Charger</option>
                    <option value="backup-charger">&nbsp;&nbsp;&nbsp;Backup Charger</option>
                    <option value="3">Three</option>
                    <option value="backup-charger">&nbsp;&nbsp;&nbsp;Backup Charger</option>
                    <option value="backup-charger">&nbsp;&nbsp;&nbsp;Backup Charger</option>
                    </select>
                    <div className='search-content'>
                      <input type="text" name="s" placeholder="Search for products" autocomplete="off" />
                     <input type="submit" value="submit" />
                    </div>
                </form>
               </div>
            </div>
            <div className='navbar-top-right'>
               <div className='navbar-top-section'>
               <div className='language dropdown'>
                <a href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                 English 
                 <i className="fa-solid fa-chevron-down"></i>
                </a>
                <div className='dropdown-menu'>
                <ul>
                    <li >
                        <a href='#'>English</a>
                    </li>
                    <li >
                        <a href='#'>Bangla</a>
                    </li>
                </ul>
                </div>
               </div>
               <div className='currency dropdown'>
                <a href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                 USD 
                 <i className="fa-solid fa-chevron-down"></i>
                </a>
                <div className='dropdown-menu'>
                <ul>
                    <li >
                        <a href='#'>USD</a>
                    </li>
                    <li >
                        <a href='#'>TAKA</a>
                    </li>
                </ul>
                </div>
               </div>
               <div className='user dropdown'>
                <a href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="fa-regular fa-user"></i>
                </a>
                <div className='dropdown-menu'>
                <ul>
                    <h3>LOGIN</h3>
                    <form>
                        <div className='logine-email'>
                            <label>Username or Email Address</label>
                            <input type="text" name="log" autoComplete='off' />
                        </div>
                        <div className='logine-password'>
                          <label>Password</label>
                          <input type="password" name="password" autoComplete='off' />
                        </div>
                        <div className='submit-button'>
                            <input type="submit" value="LOG IN" />
                            <label>
                                <input name="rememberme" type="checkbox"  value="forever" />
                                     Remember Me
                            </label>
                        </div>
                    </form>
                </ul>
                </div>
               </div>
               <div className='navbar-top-wishlist'>
                <button type='button' className='btn p-0 position-relative'>
                <i class="fa-regular fa-heart"></i>
                <span className='position-absolute top-0 start-100 translate-middle badge'>
                    0
                </span>
                <span class="visually-hidden">unread messages</span>
                </button>
               </div>
               <div className='navbar-top-cart'>
                <button type='button' className='btn p-0 position-relative' data-bs-toggle="offcanvas" data-bs-target="#offcanvasCart" aria-controls="offcanvasCart">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                <span className='position-absolute top-0 start-100 translate-middle badge'>
                    0
                </span>
                <span class="visually-hidden">unread messages</span>
                </button>
                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasCart" aria-labelledby="offcanvasCartLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">CART (0)</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <div className='cart-content'>
                            <ul className='cart_list'>

                                {number.map((item)=>(
                                    <li>
                                    <a href='#' className='cart-thumbnal'>
                                        <img src="./img/electronic-34-450x450.jpg" alt="product-img" />
                                    </a>
                                    <div className='cart-item-wrapper'>
                                        <a className='close-cart-product'>
                                          <i class="fa-solid fa-xmark"></i>
                                        </a>
                                        <h3 className='cart-product-title'>
                                            <a href='#'>
                                            4K UHD LED Smart TV with Chromecast Built-in
                                            </a>
                                        </h3>
                                        <label className='cart-product-price'>
                                            $500.0
                                        </label>
                                        <div className='cart-product-qty'>
                                          <label className='qty'>
                                            <input type="button" value="-" class="minus" />
                                            <input type="number" step="1" min="0" max="" name="" value="1" title="Qty" size="4" placeholder="" inputmode="numeric" autocomplete="off" />
                                            <input type="button" value="+" class="plus" />
                                          </label>
                                          <label className='cart-product-price'>
                                            $500.0
                                          </label>
                                        </div>
                                    </div>
                                </li>
                                ))}

                            </ul>
                            <div className='cart-dropdown-footer'>
                                <div className='total-price'>
                                   <span className='subtotal-title'>SUBTOTAL :</span>
                                   <span className='subtotal-price'>$998.00</span>
                                </div>
                                <div className='cart-check-button'>
                                    <a className='view-cart' href='#'>view cart</a>
                                    <a className='checkout-cart' href='#'>checkout</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               </div>
               </div>
            </div>
        </div>
        <div className='mobile-logo'>
         <a href='/'>
                  <img src="img/logo.png" alt="logo" />
        </a>
        </div>
     </div>
    </div>
    <div className={show ? "sticky-nav-menubar" : "menu-none"}>
        <Navbar />
    </div>
    </>
  )
}

export default NavbarTop
