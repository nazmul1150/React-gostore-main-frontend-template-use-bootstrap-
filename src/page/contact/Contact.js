import React from 'react'
import './contact.css'
import Burchamp from '../../components/burchamp/Burchamp'

const Contact = () => {
  return (
    <>
    <Burchamp title="Contact Page" />
      <div className='container contact_page'>
        <div className='row'>
        <div className='col-12 col-sm-6 col-md-6'>
          <h3 className='contact_title'>CONTACT US .</h3>
            <div className='contact_info'>
                <div className='contact_info_icon'>
                <i class="fa-solid fa-mobile-retro"></i>
                </div>
                <div className='contact_info_text'>
                    <span className='contact_info_name'>CALL US</span>
                    <span>(+84) 8 3555 3203</span>
                </div>
            </div>
            <div className='contact_info'>
                <div className='contact_info_icon'>
                <i class="fa-regular fa-envelope"></i>
                </div>
                <div className='contact_info_text'>
                    <span className='contact_info_name'>EMAIL ADDRESS:</span>
                    <span>info@gmail.com</span>
                </div>
            </div>
            <div className='contact_info'>
                <div className='contact_info_icon'>
                <i class="fa-solid fa-location-dot"></i>
                </div>
                <div className='contact_info_text'>
                    <span className='contact_info_name'>STORE LOCATION</span>
                    <span>101 Your Name Road, Your City, United of Kingdom203</span>
                </div>
            </div>
            <div class="footer-sosial-media">
              <a class="sosial-media-facebook" href="#">
              <i class="fa-brands fa-facebook-f"></i>
              </a>
              <a class="sosial-media-twitter" href="#">
              <i class="fa-brands fa-twitter"></i>
              </a>
              <a class="sosial-media-youtube" href="#">
              <i class="fa-brands fa-youtube"></i>
              </a>
              <a class="sosial-media-instagram" href="#">
              <i class="fa-brands fa-instagram"></i>
              </a>
            </div>
        </div>
        <div className='col-12 col-sm-6 col-md-6'>
        <h3 className='contact_title'>GET IN TOUCH .</h3>
        <div className='contact_form_page'>
          <form>
            <div className='row'>
               <div class="col-12 col-sm-6 checkout_form">
                 <label>Name</label>
                 <input type="text" autocomplete="off" />
              </div>
              <div class="col-12 col-sm-6 checkout_form">
                 <label>Email</label>
                 <input type="email" autocomplete="off" />
              </div>
              <div class="col-12 col-sm-12 checkout_form">
                 <label>Subject</label>
                 <input type="text" autocomplete="off" />
              </div>
              <div class="col-12 col-sm-12 checkout_form">
                 <label>Message</label>
                 <textarea name="message" rows="6"></textarea>
              </div>
            </div>
            <input type="submit" value="Submit" />
          </form>
        </div>
        </div>
        </div>
      </div>
      {/* <div className='contact_map'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115713.70243733548!2d89.93849388510894!3d24.99830813880813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3757d67552cd9be5%3A0x5f5a1e73907e02f1!2sSherpur%20Sadar%20Upazila!5e0!3m2!1sen!2sbd!4v1680437268929!5m2!1sen!2sbd" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div> */}
    </>
  )
}

export default Contact
