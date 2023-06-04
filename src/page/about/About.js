import React from 'react'
import './about.css'
import Burchamp from '../../components/burchamp/Burchamp'

const About = () => {
  return (
    <>
      <Burchamp title="About Page" />
      <div className='container about_page'>
        <img src='img/img0-about-us.jpg' alt='img' />
        <h3 className='title_about'>GoStore is largest Electronics Retailer</h3>
        <p className='des_about'>Network of 400+ stores nationally, housing over 200 brands and 5000 products. From in-depth, expert buying advice to personal after-sales care tailored to each customer, we commit to our promise of ‘Personalising Technology’ every day.</p>
      </div>
    </>
  )
}

export default About
