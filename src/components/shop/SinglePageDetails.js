import React from 'react'
import './singlePageDetails.css'

const SinglePageDetails = () => {
  return (
    <div className='single_page_product_details'>
     <div className='single_page_product_tabs' role="tablist">
      <a 
      class="active" 
      id="description-list"
      data-bs-toggle="list"
      href="#description"
      role="tab"
      aria-controls="description"
      >
         description
      </a>
      <a 
      class="" 
      id="information-list" 
      data-bs-toggle="list" 
      href="#information" 
      role="tab" 
      aria-controls="information"
      >
         information
      </a>
      <a 
      class="" 
      id="specification-list" 
      data-bs-toggle="list" 
      href="#specification" 
      role="tab" 
      aria-controls="specification"
      >
         information
      </a>
      <a 
      class="" 
      id="reviews-list" 
      data-bs-toggle="list" 
      href="#reviews" 
      role="tab" 
      aria-controls="reviews"
      >
         information
      </a> 
     </div>

    <div class="tab-content" id="single_page_product_tabContent">
      <div class="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="description-list">
     <p>
     A groundbreaking Retina display. Powerful dual-core and quad-core Intel processors. Fast flash storage. High-performance graphics. Great built-in apps. And now in the 13-inch model, a revolutionary new Force Touch trackpad and even longer battery life.1 Whatever you can imagine, MacBook Pro with Retina display gives you the power to create.
     </p>
      </div>
      <div class="tab-pane fade" id="information" role="tabpanel" aria-labelledby="information-list">
      <p>
     A groundbreaking Retina display. Powerful dual-core and quad-core Intel processors. Fast flash storage. High-performance graphics. Great built-in apps. And now in the 13-inch model, a revolutionary new Force Touch trackpad and even longer battery life.1 Whatever you can imagine, MacBook Pro with Retina display gives you the power to create.
     </p>
      </div>
      <div class="tab-pane fade" id="specification" role="tabpanel" aria-labelledby="specification-list">
      <p>
     A groundbreaking Retina display. Powerful dual-core and quad-core Intel processors. Fast flash storage. High-performance graphics. Great built-in apps. And now in the 13-inch model, a revolutionary new Force Touch trackpad and even longer battery life.1 Whatever you can imagine, MacBook Pro with Retina display gives you the power to create.
     </p>
      </div>
      <div class="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-list">
        <h3>3 reviews for Microsoft Surface Laptop 3-15” Touch-Screen</h3>
        <div className='rating_and_rating_count'>
          <div className='overall-rating'>
            <h2>CUSTOMER REVIEWS</h2>
            <div className='overall-rating-main'>
              <div class="overall-rating-left">
					     <span class="overall-rating-left-average">
						    4.33
               </span>
				       </div>
               <div className='overall-rating-right'>
               <div class="shop-single-rating">
                <span><i class="fa-solid fa-star"></i></span>
                <span><i class="fa-solid fa-star"></i></span>
                <span><i class="fa-solid fa-star"></i></span>
                <span><i class="fa-solid fa-star"></i></span>
                <span><i class="fa-solid fa-star"></i></span>
               </div>
               <h2>Based on 3 reviews</h2>
               </div>
            </div>
          </div>
          <div className='stars-count'>
           <div className='stars-count-section'>
            <div className='stars-count-section-1'>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            </div>
            <div className='stars-count-section-2'>
            <div className="progress">
              <div className="progress-bar" role="progressbar" style={{width:"75%" ,background:"rgba(249, 172, 0, 1)"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            </div>
            <div className='stars-count-section-3'>
              <p>2</p>
            </div>
           </div>
           <div className='stars-count-section'>
            <div className='stars-count-section-1'>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star"></i>
            </div>
            <div className='stars-count-section-2'>
            <div className="progress">
              <div className="progress-bar" role="progressbar" style={{width:"75%",backgroundColor:"transparent"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            </div>
            <div className='stars-count-section-3'>
              <p>0</p>
            </div>
           </div>
           <div className='stars-count-section'>
            <div className='stars-count-section-1'>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            </div>
            <div className='stars-count-section-2'>
            <div className="progress">
              <div className="progress-bar" role="progressbar" style={{width:"35%" ,background:"rgba(249, 172, 0, 1)"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            </div>
            <div className='stars-count-section-3'>
              <p>1</p>
            </div>
           </div>
           <div className='stars-count-section'>
            <div className='stars-count-section-1'>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            </div>
            <div className='stars-count-section-2'>
            <div className="progress">
              <div className="progress-bar" role="progressbar" style={{width:"75%",backgroundColor:"transparent"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            </div>
            <div className='stars-count-section-3'>
              <p>0</p>
            </div>
           </div>
           <div className='stars-count-section'>
            <div className='stars-count-section-1'>
            <i class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            </div>
            <div className='stars-count-section-2'>
            <div className="progress">
              <div className="progress-bar" role="progressbar" style={{width:"75%",backgroundColor:"transparent"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            </div>
            <div className='stars-count-section-3'>
              <p>0</p>
            </div>
           </div>
          </div>
        </div>
      </div>

    </div>

    </div>
  )
}

export default SinglePageDetails
