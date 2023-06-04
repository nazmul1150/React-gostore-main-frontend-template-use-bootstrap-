import React from 'react'
import { Link } from 'react-router-dom'
import BlogCart from '../../components/blog/BlogCart'
import Burchamp from '../../components/burchamp/Burchamp'
import './blog.css'

const Blog = () => {

    const number = [1,2,3,4,5,6,7,8,9];
  return (
    <>
      <Burchamp title="Bloge Page" />
      <div className='container blog-page'>
        <div className='row'>
            {number.map((index) => (
               <div key={index} className='col-12 col-sm-4 col-md-4 blog-page-cart-section'>
                 <BlogCart />
               </div>
            ))}
        </div>
        <div className='load-more-blog'>
            <Link to="#">LOAD MORE..</Link>
        </div>
      </div>
    </>
  )
}

export default Blog
