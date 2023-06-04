import React from 'react'
import './cart.css'
import Burchamp from '../../components/burchamp/Burchamp'
import { Link } from 'react-router-dom'
import ProductHome from '../../components/product/ProductHome'

const Cart = () => {
  return (
    <div>
      <Burchamp title="Cart Page" />
      <div className='container cart_page'>
        <div className='row'>
            <div className='col-12 col-sm-8'>
                <table>
                    <thead>
                        <tr>
                            <th>PRODUCT</th>
                            <th>&nbsp;</th>
                            <th>PRICE</th>
                            <th>QUANTITY</th>
                            <th>SUBTOTAL</th>
                            <th>&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='product-thumbnail'>
                                <img src="img/electronic-24-500x500.jpg" alt="img" />
                            </td>
                            <td className='product-name'>
                                <Link to="#">
                                    Canon Digital Camera w/ 42x Optical Zoom
                                </Link>
                            </td>
                            <td className='product-price'>
                               $56.00
                            </td>
                            <td>
                                <div className='cart-product-qty'>
                                <label class="qty">
                                <input type="button" class="minus" value="-" />
                                <input type="number" step="1" min="0" max="" name="" title="Qty" size="4" placeholder="" inputmode="numeric" autocomplete="off" value="1" />
                                <input type="button" class="plus" value="+" />
                                </label>
                                </div>
                            </td>
                            <td className='product-price'>
                               $56.00
                            </td>
                            <td className='product-cross'>
                               <Link to="#">
                                 <i class="fa-solid fa-xmark"></i>
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className='cart_page_action'>
                    <div className='cupon'>
                        <form>
                            <input type='text' autoComplete='off' />
                            <input type='submit' value='APPLY COUPON' />
                        </form>
                    </div>
                    <div className='cat_buttons'>
                        <Link className='empty_cart'>Empty Cart</Link>
                        <Link className='update_cart'>Update Cart</Link>
                    </div>
                </div>
            </div>
            <div className='col-12 col-sm-4'>
              <div className='cart_total'>
                <h3>CART TOTALS</h3>
                <div className='total-price-list'>
                    <span>SUBTOTAL</span>
                    <span>$155.00</span>
                </div>
                <div className='border'></div>
                <div className='shpping'>
                <span>SHIPPING</span>
                <div className='celect_shping'>
                    <label>
                        <input type='radio' name="check" />
                        Free shipping
                    </label>
                    <label>
                        <input type='radio' name="check" />
                        Local Pickup: <strong>$10.00</strong>
                    </label>
                </div>
                </div>
                <div className='border'></div>
                <div className='total-price-cart'>
                    <span>TOTAL</span>
                    <span>$155.00</span>
                </div>
                <Link className='cart-total-button'>Proceed to checkout</Link>
              </div>
            </div>
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
    </div>
  )
}

export default Cart
