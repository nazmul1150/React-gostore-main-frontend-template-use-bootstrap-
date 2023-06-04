import React from 'react'
import Burchamp from '../../components/burchamp/Burchamp'
import './checkout.css'
import { Link } from 'react-router-dom'

const CheckOut = () => {
  return (
    <>
    <Burchamp title="CheckOut Page" />
      <div className='container checkout_page'>
        <div className='woocommerce_checkout_info'>
          <h4>RETURNING CUSTOMER? <Link to='#'>CLICK HERE TO LOGIN</Link></h4>
          <h4>HAVE A COUPON? <Link to='#'>CLICK HERE TO ENTER YOUR CODE</Link></h4>
        </div>
        <div className='form_title'>
          <h3>BILLING DETAILS</h3>
        </div>
        <div className='row'>
          <div className='col-12 col-sm-8'>
          <form>
          <div className='row'>
            <div className='col-12 col-sm-6 checkout_form'>
              <label>First name *</label>
              <input type='text' autoComplete='off' />
            </div>
            <div className='col-12 col-sm-6 checkout_form'>
              <label>Last name *</label>
              <input type='text' autoComplete='off' />
            </div>
            <div className='col-12 col-sm-12 checkout_form'>
            <label>Country / Region *</label>
            <select>
              <option>Select a country / region…</option>
              <option value="AF">Afghanistan</option>
              <option value="BN">Bangladesh</option>
            </select>
            </div>
            <div className='col-12 col-sm-12 checkout_form'>
              <label>Street address *</label>
              <input type='text' autoComplete='off' />
              <input type='text' autoComplete='off' />
            </div>
            <div className='col-12 col-sm-12 checkout_form'>
              <label>Town / City *</label>
              <input type='text' autoComplete='off' />
            </div>
            <div className='col-12 col-sm-12 checkout_form'>
              <label>County (optional)</label>
              <input type='text' autoComplete='off' />
            </div>
            <div className='col-12 col-sm-12 checkout_form'>
              <label>Postcode *</label>
              <input type='text' autoComplete='off' />
            </div>
            <div className='col-12 col-sm-12 checkout_form'>
              <label>Phone *</label>
              <input type='text' autoComplete='off' />
            </div>
            <div className='col-12 col-sm-12 checkout_form'>
              <label>Email address *</label>
              <input type='email' autoComplete='off' />
            </div>
            <div className='col-12 col-sm-12 checkout_form checkout_pading'>
              <a class="collapsed" data-bs-toggle="collapse" data-bs-target="#ship-different-address" aria-expanded="false">
              Ship to a different address?
              </a>
              <div class="collapse" id="ship-different-address">
                <div className='row'>
                <div className='col-12 col-sm-6 checkout_form'>
              <label>First name *</label>
              <input type='text' autoComplete='off' />
            </div>
            <div className='col-12 col-sm-6 checkout_form'>
              <label>Last name *</label>
              <input type='text' autoComplete='off' />
            </div>
            <div className='col-12 col-sm-12 checkout_form'>
            <label>Country / Region *</label>
            <select>
              <option>Select a country / region…</option>
              <option value="AF">Afghanistan</option>
              <option value="BN">Bangladesh</option>
            </select>
            </div>
            <div className='col-12 col-sm-12 checkout_form'>
              <label>Street address *</label>
              <input type='text' autoComplete='off' />
              <input type='text' autoComplete='off' />
            </div>
            <div className='col-12 col-sm-12 checkout_form'>
              <label>Town / City *</label>
              <input type='text' autoComplete='off' />
            </div>
            <div className='col-12 col-sm-12 checkout_form'>
              <label>County (optional)</label>
              <input type='text' autoComplete='off' />
            </div>
            <div className='col-12 col-sm-12 checkout_form'>
              <label>Postcode *</label>
              <input type='text' autoComplete='off' />
            </div>
                </div>
              </div>
            </div>
            <div className='col-12 col-sm-12 checkout_form checkout_pading'>
              <label>Order notes (optional)</label>
              <textarea rows='5'></textarea>
            </div>
          </div>
        </form>
          </div>
          <div className='col-12 col-sm-4'>
            <div className='order_details'>
              <h3>YOUR ORDER</h3>
              <div className='cart_item border-bottom cart_item_padding_botton'>
                <label className='product_name'>PRODUCT</label>
                <label className='product_total'>SUBTOTAL</label>
              </div>
              <div className='cart_item_product_details cart_item_padding_top cart_item_padding_botton border-bottom'>
              <div className='cart_item' style={{paddingBottom:"8px"}}>
                <label className='product_name'>
                Canon Digital Camera w/ 42x Optical Zoom  × 1
                </label>
                <label className='product_total'>
                $56.00
                </label>
              </div>
              <div className='cart_item'>
                <label className='product_name'>
                Canon Digital Camera w/ 42x Optical Zoom  × 1
                </label>
                <label className='product_total'>
                $56.00
                </label>
              </div>
              </div>
              <div className='cart_item cart_item_padding_top cart_item_padding_botton'>
                <label className='product_name'>SUBTOTAL</label>
                <label className='product_total'>$155.00</label>
              </div>
              <div className='cart_item border-bottom cart_item_padding_botton'>
                <label className='product_shiping_name'>SHIPPING</label>
                <label className='product_total'>
                <div class="celect_shping">
                  <label><input type="radio" name="check" />Free shipping</label>
                  <label><input type="radio" name="check" />Local Pickup: <strong>$10.00</strong></label>
                </div>
                </label>
              </div>
              <div className='cart_item cart_item_padding_top'>
                <label className='product_name'>TOTAL</label>
                <label className='product_total_price'>$165.00</label>
              </div>
            </div>
            <div className='payment_list'>
              <form>
                <div>
                <label>
                  <input type='radio' name="payment" /> 
                  Check payments
                </label>
                <div className='payment-text'>
                  <p>
                    Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.
                  </p>
                </div>
                </div>
                <div>
                <label>
                  <input type='radio' name="payment" /> 
                  PayPal
                  <img src="img/AM_mc_vs_ms_ae_UK.png" alt="img" />
                </label>
                </div>
                <div>
                  <input type='submit' value="Place order" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CheckOut
