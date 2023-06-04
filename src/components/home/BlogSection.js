import React from 'react'
import { Link } from 'react-router-dom'
import BlogCart from '../blog/BlogCart'
import './blogsection.css'
import Slider from "react-slick";
import { blogcarosoul } from '../carosoul/CarosoulSestting';

const BlogSection = () => {
  const number = [1,2,3,4,5,6,7,8,9]
  return (
    <div className='home-blog-section'>
      <div className='container'>
        <div className='home-blog-top'>
            <h3 className='home-title'>Most Popular Blog Posts</h3>
            <Link to="#">View More</Link>
        </div>
        <div className='home-blog-wrapper'>
        <Slider {...blogcarosoul}>
          {number.map((index)=>(
            <div key={index} className="blog-carosoul">
            <BlogCart />
          </div>
          ))}
        
        </Slider>
        </div>
      </div>
    </div>
  )
}

export default BlogSection
