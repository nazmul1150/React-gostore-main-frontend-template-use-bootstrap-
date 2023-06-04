import React from 'react'
import { Link } from 'react-router-dom'
import './blogcart.css'

const BlogCart = () => {
  return (
    <div className='blog-cart'>
     <div className='blog-cart-img'>
        <Link to="#">
            <figure>
             <img src="img/blog-2.jpg" alt="blog-img" />
            </figure>
        </Link>
     </div>
     <div className='blog-cart-body'>
        <div className='blog-cart-mata'>
            <span>
              <i class="fa-regular fa-user"></i>
              Name
            </span>
            <span>
             <i class="fa-regular fa-calendar"></i>
              May 6, 2021
            </span>
            <span>
             <i class="fa-regular fa-message"></i>
              4
            </span>
        </div>
        <h3>
          <Link to="#">How to Tag Faces in the Android Gallery</Link>
        </h3>
        <div class="excerpt">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan faucibus ipsum id iaculis.
        </div>
        <Link to="#" className='read-more-cart'>Read More</Link>
     </div>
    </div>
  )
}

export default BlogCart
