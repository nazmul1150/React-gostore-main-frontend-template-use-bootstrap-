import React from 'react'
import { Link } from 'react-router-dom'
import './blogsidebar.css'

const BlogSidebar = () => {
  return (
    <>
      <div className='blog-sidebar-category'>
        <h3>CATEGORIES</h3>
        <ul className='blog-sidebar-ul'>
            <li>
            <i class="fa-solid fa-angle-right"></i> <Link to="">Accessories</Link>
            </li>
            <li>
            <i class="fa-solid fa-angle-right"></i> <Link to="">Cameras</Link>
            </li>
            <li>
            <i class="fa-solid fa-angle-right"></i><Link to="">Laptops</Link>
            </li>
            <li>
            <i class="fa-solid fa-angle-right"></i><Link to="">Quote</Link>
            </li>
            <li>
            <i class="fa-solid fa-angle-right"></i><Link to="">Smartphone</Link>
            </li>
            <li>
            <i class="fa-solid fa-angle-right"></i><Link to="">Video</Link>
            </li>
        </ul>
      </div>
      <div className='blog-sidebar-post'>
        <h3>RECENT POST</h3>
        <ul className='blog-sidebar-ul'>
            <li>
            <i class="fa-solid fa-angle-right"></i> <Link to="">How to Tag Faces in the Android Gallery</Link>
            </li>
            <li>
            <i class="fa-solid fa-angle-right"></i><Link to="">How to Tag Faces in the Android Gallery</Link>
            </li>
            <li>
            <i class="fa-solid fa-angle-right"></i><Link to="">How to Tag Faces in the Android Gallery</Link>
            </li>
            <li>
            <i class="fa-solid fa-angle-right"></i><Link to="">How to Tag Faces in the Android Gallery</Link>
            </li>
            <li>
            <i class="fa-solid fa-angle-right"></i><Link to="">How to Tag Faces in the Android Gallery</Link>
            </li>
            <li>
            <i class="fa-solid fa-angle-right"></i><Link to=""> How to Tag Faces in the Android Gallery</Link>
            </li>
        </ul>
      </div>
      <div className='blog-sidebar-post'>
        <h3>LET’S GET SOCIAL</h3>
        <div class="footer-sosial-media">
            <a class="sosial-media-facebook" href="/blogsingle">
                <i class="fa-brands fa-facebook-f"></i>
            </a>
            <a class="sosial-media-twitter" href="/blogsingle">
                <i class="fa-brands fa-twitter"></i>
            </a>
            <a class="sosial-media-youtube" href="/blogsingle">
                <i class="fa-brands fa-youtube"></i></a>
                <a class="sosial-media-instagram" href="/blogsingle">
                    <i class="fa-brands fa-instagram"></i>
                    </a>
            </div>
      </div>
      <div className='blog-sidebar-newslatter'>
        <h3>NEWSLETTER</h3>
        <form>
            <input type="text" name="subscribe" placeholder="Your Email Hear..." autocomplete="off" />
            <input type="submit" value="submit" />
        </form>
      </div>
    </>
  )
}

export default BlogSidebar
