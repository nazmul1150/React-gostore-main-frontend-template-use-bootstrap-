import React from 'react'
import './shopReviews.css'

const ShopReviews = () => {
  return (
    <div className='shop_single_page_reviews'>
      <div className='reviewlist'>
        <ul>
            <li>
                <div className='reviewlist_img'>
                    <img src ="img/f458ff8b61e871611d3de680ec718a03.jpeg" />
                </div>
                <div className='reviewlist_container'>
                    <div className='reviewlist_container_meta'>
                        <div className='reviewlist_container_star'>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        </div>
                        <h3>Nazmul</h3>
                        <p> – April 26, 2021</p>
                    </div>
                    <p>I ordered on Friday evening and on Monday at 12:30 the package was with me. I have never encountered such a fast order processing.</p>
                </div>
            </li>
            <li>
                <div className='reviewlist_img'>
                    <img src ="img/f458ff8b61e871611d3de680ec718a03.jpeg" />
                </div>
                <div className='reviewlist_container'>
                    <div className='reviewlist_container_meta'>
                        <div className='reviewlist_container_star'>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        </div>
                        <h3>Nazmul</h3>
                        <p> – April 26, 2021</p>
                    </div>
                    <p>I ordered on Friday evening and on Monday at 12:30 the package was with me. I have never encountered such a fast order processing.</p>
                </div>
            </li>
            <li>
                <div className='reviewlist_img'>
                    <img src ="img/f458ff8b61e871611d3de680ec718a03.jpeg" />
                </div>
                <div className='reviewlist_container'>
                    <div className='reviewlist_container_meta'>
                        <div className='reviewlist_container_star'>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        </div>
                        <h3>Nazmul</h3>
                        <p> – April 26, 2021</p>
                    </div>
                    <p>I ordered on Friday evening and on Monday at 12:30 the package was with me. I have never encountered such a fast order processing.</p>
                </div>
            </li>
        </ul>
      </div>
      <div className='review_form'>
        <h3>Add a review</h3>
        <p>Your email address will not be published. Required fields are marked *</p>
        <form>
    <div className='row'>
    <div className='col-12 col-sm-12 form-connents'>
        <label>Your review *</label>
        <textarea rows="3" name='message' autoComplete='off'></textarea>
      </div>
      <div className='col-12 col-sm-12 form-connents'>
        <label>Choose pictures (maxsize: 50 kB, max files: 2)</label>
        <input type="file" autoComplete='off' />
      </div>
      <div className='col-12 col-sm-6 form-connents'>
        <label>Name *</label>
        <input type="text" autoComplete='off' />
      </div>
      <div className='col-12 col-sm-6 form-connents'>
        <label>Email *</label>
        <input type="email" autoComplete='off' />
      </div>
      
    </div>
    <div className='comment-submit-button'>
      <input type="submit" value="submit" />
    </div>
  </form>
      </div>
    </div>
  )
}

export default ShopReviews
