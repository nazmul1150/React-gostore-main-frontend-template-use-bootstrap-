import React from 'react'
import { Link} from 'react-router-dom'
import './footer.css'
import {tag} from '../../data/footerdata'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='footer-tag'>
            {tag.map((index)=>(
               <Link key={index.id} to="#">{index.name}</Link>
            ))}

        </div>
        <div className='footer-ariea'>
          <div className='row'>
            <div className='col-12 col-sm-6 col-md-4'>
              <h3 className='footer-title'>CONTACT INFO.</h3>
              <ul className='info-content'>
                <li>
                  <div className='footer-1-icon'>
                   <i class="fa-solid fa-mobile-retro"></i>
                  </div>
                 <div className='foooter-1-text'>
                  <span>Line 1: (+84) 8001 8588 79</span>
                  <span>Line 2: (+84) 8001 8588 89</span>
                 </div>
                </li>
                <li>
                  <div className='footer-1-icon'>
                    <i class="fa-regular fa-envelope"></i>
                  </div>
                 <div className='foooter-1-text'>
                  <span>gostoresupport@gmail.com</span>
                 </div>
                </li>
                <li>
                  <div className='footer-1-icon'>
                   <i class="fa-solid fa-location-dot"></i>
                  </div>
                 <div className='foooter-1-text'>
                  <span>Your Name Road, Your City, United of Kingdom</span>
                 </div>
                </li>
                <li>
                  <div className='footer-1-icon'>
                   <i class="fa-solid fa-calendar-days"></i>
                  </div>
                 <div className='foooter-1-text'>
                  <span>Monday-Saturday 9:00pm – 5:00pm</span>
                  <span>Sunday : Closed</span>
                 </div>
                </li>
              </ul>
            </div>
            <div className='col-12 col-sm-6 col-md-2 padding-top-footer-2'>
            <h3 className='footer-title'>POLICES</h3>
            <ul className='footer-2-ul'>
              <li>
                <Link to="#" className='footer-link'>Returns & Exchanges</Link>
              </li>
              <li>
                <Link to="#" className='footer-link'>Payment Terms</Link>
              </li>
              <li>
                <Link to="#" className='footer-link'>Delivery Terms</Link>
              </li>
              <li>
                <Link to="#" className='footer-link'>Payment & Pricing</Link>
              </li>
              <li>
                <Link to="#" className='footer-link'>Terms Of Use</Link>
              </li>
              <li>
                <Link to="#" className='footer-link'>Privacy Policy</Link>
              </li>
            </ul>
            </div>
            <div className='col-12 col-sm-6 col-md-2 padding-top-footer'>
            <h3 className='footer-title'>INFORMATIONS</h3>
            <ul className='footer-3-ul'>
              <li>
                <Link to="#" className='footer-link'>About Us</Link>
              </li>
              <li>
                <Link to="#" className='footer-link'>Careers</Link>
              </li>
              <li>
                <Link to="#" className='footer-link'>Orders & Shipping</Link>
              </li>
              <li>
                <Link to="#" className='footer-link'>Office Supplies</Link>
              </li>
              <li>
                <Link to="#" className='footer-link'>Contact Us</Link>
              </li>
              <li>
                <Link to="#" className='footer-link'>Customer Service</Link>
              </li>
            </ul>
            </div>
            <div className='col-12 col-sm-6 col-md-4 padding-top-footer'>
            <h3 className='footer-title'>STAY INFORMED BY NEWSLETTER</h3>
            <div className='footer-4'>
            <p>*Subscribe to our newsletter to receive early discount offers, updates and new products info for 30% Membership discount.</p>
            <form>
             <input className='subscribe' type="text" name="subscribe" placeholder="Your Email Hear..." autocomplete="off" />
             <input className='submit' type="submit" value="submit" />
            </form>
            <div className='footer-sosial-media'>
              <Link to="#" className='sosial-media-facebook'>
                <i class="fa-brands fa-facebook-f"></i>
              </Link>
              <Link to="#" className='sosial-media-twitter'>
                <i class="fa-brands fa-twitter"></i>
              </Link>
              <Link to="#" className='sosial-media-youtube'>
                <i class="fa-brands fa-youtube"></i>
              </Link>
              <Link to="#" className='sosial-media-instagram'>
                <i class="fa-brands fa-instagram"></i>
              </Link>
            </div>
            </div>
            </div>
          </div>
        </div>
        {/* copyright */}
        <div className='footer-copyright'>
          <span>	&copy;2023 All Rights Reserved</span>
        </div>
      </div>
    </div>
  )
}

export default Footer
