import React from 'react'
import BannerHome from '../../components/banner/BannerHome'
import CarosoulHome from '../../components/carosoul/CarosoulHome'
import HomeIsotop from '../../components/home/HomeIsotop'
import HomeServices from '../../components/services/HomeServices'
import HomeSlider from '../../components/slider/HomeSlider'
import HeaderTop from '../../components/header/headertop/HeaderTop'
import './home.css'
import BlogSection from '../../components/home/BlogSection'
import BrangImg from '../../components/home/BrangImg'

const Home = () => {
  return (
    <div>
      <HomeSlider />
      <HomeServices />
      <BannerHome />
      <CarosoulHome />
      <HomeIsotop cat="phon" />
      <div className='container home-padding-1'>
        <HeaderTop />
      </div>
      
      <div className='home-padding-2'>
        <HomeIsotop cat="laptop" />
      </div>

      <BannerHome />
      <div className='home-padding-1'>
        <HomeIsotop cat="tv" />
      </div>

      <BlogSection />
      <BrangImg />
     
      
    </div>
  )
}

export default Home
