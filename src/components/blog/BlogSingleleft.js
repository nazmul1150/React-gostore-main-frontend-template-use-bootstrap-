import React from 'react'
import { Link } from 'react-router-dom'
import './blogSingleleft.css'
import BlogCart from './BlogCart'

const BlogSingleleft = () => {
  return (
    <>
      <div class="blog-cart-mata-single">
        <span><i class="fa-regular fa-user"></i>Name</span>
        <span><i class="fa-regular fa-calendar"></i>May 6, 2021</span>
        <span><i class="fa-regular fa-message"></i>4</span>
      </div>
      <h3 className='blog-single-title'>
      How to Tag Faces in the Android Gallery
      </h3>
      <div className='blog-single-img'>
        <img src='img/blog-1.jpg' alt="img" />
      </div>
      <div className='blog-single-body'>
        <h4>
          It has become an industry standard to put “mobile first” when designing for the mobile web and while this is, in general, a good thing – it has also left to a neglect of the tablet platform in mobile design
        </h4>
        <br></br>
        <p>As laptops have got slimmer, lighter and more compact, sacrifices have been made, the most obvious being the removal of many of the ports we used to rely on. Gone are the days when you could find a SDXD card slot on your MacBook Pro, with no Ethernet port you are reliant on a strong WiFi signal, and if you are still using old USB peripherals then you are going to have to kiss them goodbye if you want a new Mac laptop.</p>
        <br></br>
        <h6>WHAT PORTS DOES THE MACBOOK HAVE?</h6>
        <br></br>
        <p>When Apple unveiled its ultra-slim MacBook back in 2015, the new design caused quite a stir. Aside from being gorgeous and tiny, it also came with a hefty price tag and only one connection port – the relatively new USB-C. USB Type C offers up to 5Gbps transfers in addition to supporting charging. Like the MacBook Air, the 13in MacBook Pro has two Thunderbolt 3/USB-C ports. The 15in MacBook Pro offers four Thunderbolt 3/USB-C ports.</p>
        <br></br>
        <ul>
          <li>MacBook: One USB-C port</li>
          <li>MacBook Air: Two Thunderbolt 3/USB-C ports</li>
          <li>13in MacBook Pro: Two Thunderbolt 3/USB-C ports</li>
          <li>15in MacBook Pro: Four Thunderbolt 3/USB-C ports</li>
        </ul>
<br></br>
<table>
<tbody>
<tr>
<td><strong>DESCRIPTION</strong></td>
<td><strong>MACBOOK PRO</strong></td>
<td><strong>MACBOOK AIR 2017</strong></td>
<td><strong>MACBOOK AIR 2020</strong></td>
</tr>
<tr>
<td>Display</td>
<td>16″ LED-backlit display</td>
<td>13.3″ LED-backlit display</td>
<td>13.3″ LED-backlit display</td>
</tr>
<tr>
<td>Core</td>
<td>Intel Core i9 processor</td>
<td>Intel Core i7 processor</td>
<td>Apple M1 chip</td>
</tr>
<tr>
<td>Memory</td>
<td>64GB</td>
<td>8GB</td>
<td>16GB</td>
</tr>
<tr>
<td>Storage</td>
<td>8TB SSD</td>
<td>512GB SSD</td>
<td>2TB SSD</td>
</tr>
</tbody>
</table>
  </div>
  <div className='sher-sosial'>
    <h4>SHARE ON:</h4>
    <div class="footer-sosial-media">
      <a class="sosial-media-facebook" href="/blogsingle"><i class="fa-brands fa-facebook-f"></i></a>
      <a class="sosial-media-twitter" href="/blogsingle"><i class="fa-brands fa-twitter"></i></a>
      <a class="sosial-media-youtube" href="/blogsingle"><i class="fa-brands fa-youtube"></i></a>
      <a class="sosial-media-instagram" href="/blogsingle"><i class="fa-brands fa-instagram"></i></a>
    </div>
  </div>
  <div className='blog-single-tags'>
    <h4>TAGGED AS:</h4>
    <div className='blog-single-tags-section'>
      <Link to="#">Awesome</Link>
      <Link to="#">Develeper</Link>
      <Link to="#">iOS</Link>
      <Link to="#">Mockup</Link>
      <Link to="#">Photography</Link>
      <Link to="#">Web Design</Link>
      <Link to="#">WooCommerce</Link>
      <Link to="#">WordPress</Link>
    </div>
  </div>
  <div className='blog-single-administator'>
    <div className='blog-single-administator-img'>
      <img src='img/f458ff8b61e871611d3de680ec718a03.jpeg' alt='img' />
    </div>
    <div className='blog-single-administator-wrapper'>
      <div className='blog-single-administator-avater'>
        <h4><Link to="#">JOHN</Link></h4>
        <h6>Administator</h6>
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem adipiscing in adipiscing.</p>
    </div>
  </div>
  <div className='blog-single-administator-related-post'>
    <h3>Related Posts</h3>
    <div className='row'>
      <div className='col-12 col-sm-6 col-md-6'>
        <BlogCart />
      </div>
      <div className='col-12 col-sm-6 col-md-6'>
        <BlogCart />
      </div>
    </div>
  </div>
  <div className='blog-single-comments'>
  <h3>Comments (4)</h3>
  <ul className='blog-single-comments-ul'>
    <li>
    <div className='blog-single-comments-section'>
    <div className='blog-single-comments-img'>
      <img src='img/f458ff8b61e871611d3de680ec718a03.jpeg' alt='img' />
    </div>
    <div className='blog-single-comments-wrapper'>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem adipiscing in adipiscing.</p>
      <div className='blog-single-comments-avater'>
        <div className='blog-single-comments-avater-info'>
          <Link to="#">Nazmul</Link>
          <span className='blog-single-comments-date'>DECEMBER 14, 2020</span>
        </div>
        <div className='blog-single-comments-button'>
        <Link to="#">Reply</Link>
        </div>
      </div>
    </div>
   </div>
    </li>
    <li>
    <div className='blog-single-comments-section'>
    <div className='blog-single-comments-img'>
      <img src='img/f458ff8b61e871611d3de680ec718a03.jpeg' alt='img' />
    </div>
    <div className='blog-single-comments-wrapper'>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem adipiscing in adipiscing.</p>
      <div className='blog-single-comments-avater'>
        <div className='blog-single-comments-avater-info'>
          <Link to="#">Nazmul</Link>
          <span className='blog-single-comments-date'>DECEMBER 14, 2020</span>
        </div>
        <div className='blog-single-comments-button'>
        <Link to="#">Reply</Link>
        </div>
      </div>
    </div>
   </div>
    </li>
    <li className='blog-single-comments-ul-li'>
    <div className='blog-single-comments-section'>
    <div className='blog-single-comments-img'>
      <img src='img/f458ff8b61e871611d3de680ec718a03.jpeg' alt='img' />
    </div>
    <div className='blog-single-comments-wrapper'>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem adipiscing in adipiscing.</p>
      <div className='blog-single-comments-avater'>
        <div className='blog-single-comments-avater-info'>
          <Link to="#">Nazmul</Link>
          <span className='blog-single-comments-date'>DECEMBER 14, 2020</span>
        </div>
        <div className='blog-single-comments-button'>
        <Link to="#">Reply</Link>
        </div>
      </div>
    </div>
   </div>
    </li>
    <li className='blog-single-comments-ul-li'>
    <div className='blog-single-comments-section'>
    <div className='blog-single-comments-img'>
      <img src='img/f458ff8b61e871611d3de680ec718a03.jpeg' alt='img' />
    </div>
    <div className='blog-single-comments-wrapper'>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem adipiscing in adipiscing.</p>
      <div className='blog-single-comments-avater'>
        <div className='blog-single-comments-avater-info'>
          <Link to="#">Nazmul</Link>
          <span className='blog-single-comments-date'>DECEMBER 14, 2020</span>
        </div>
        <div className='blog-single-comments-button'>
        <Link to="#">Reply</Link>
        </div>
      </div>
    </div>
   </div>
    </li>
  </ul>
  </div>
  <div className='blog-single-comments-form'>
  <h3>Leave a comment</h3>
  <form>
    <div className='row'>
      <div className='col-12 col-sm-6 form-connents'>
        <label>Your Name</label>
        <input type="text" autoComplete='off' />
      </div>
      <div className='col-12 col-sm-6 form-connents'>
        <label>Your Email</label>
        <input type="email" autoComplete='off' />
      </div>
      <div className='col-12 col-sm-12 form-connents'>
        <label>Your Comment</label>
        <textarea rows="8" name='message' autoComplete='off'></textarea>
      </div>
    </div>
    <div className='comment-submit-button'>
      <input type="submit" value="submit" />
    </div>
  </form>
  </div>
    </>
  )
}

export default BlogSingleleft
