import React from 'react'
import './magamenu.css'

const Magamenu = () => {
  return (
    <div className='maga-menu'>
        <div className='category-magamenu'>
            <ul className="magamenu-ul">
                <li><a href='#'>Iphone</a></li>
                <li><a href='#'>Ipad</a></li>
                <li><a href='#'>Huawei</a></li>
                <li><a href='#'>Amazon</a></li>
                <li><a href='#'>Microsoft</a></li>
                <li><a href='#'>Phone Case</a></li>
                <li><a href='#'>Tablet Case</a></li>
            </ul>
        </div>
        <div className='product-magamenu'>
           <ul className="magamenu-product-ul">
                <li>
                    <div className='magamenu-product'>
                        <a href='#'><img src="img/electronic-23-3.jpg" alt="product" /></a>
                        <div className='magamenu-product-body'>
                            <a href='#'>New Unlocked 128 GB of Storage Smartphone</a>
                            <div className='magamenu-product-rating'>
                                <span className='rating'><i className="fa-solid fa-star"></i></span>
                                <span className='rating'><i className="fa-solid fa-star"></i></span>
                                <span className='rating'><i className="fa-solid fa-star"></i></span>
                                <span className='rating'><i className="fa-solid fa-star"></i></span>
                                <span className='rating'><i className="fa-solid fa-star"></i></span>
                                <span className='rating-value'>(3)</span>
                            </div>
                            <p>$500.0</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className='magamenu-product'>
                        <a href='#'><img src="img/electronic-23-3.jpg" alt="product" /></a>
                        <div className='magamenu-product-body'>
                            <a href='#'>New Unlocked 128 GB of Storage Smartphone</a>
                            <div className='magamenu-product-rating'>
                                <span className='rating'><i className="fa-solid fa-star"></i></span>
                                <span className='rating'><i className="fa-solid fa-star"></i></span>
                                <span className='rating'><i className="fa-solid fa-star"></i></span>
                                <span className='rating'><i className="fa-solid fa-star"></i></span>
                                <span className='rating'><i className="fa-regular fa-star"></i></span>
                                <span className='rating-value'>(3)</span>
                            </div>
                            <p>$500.0</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className='magamenu-product'>
                        <a href='#'><img src="img/electronic-23-3.jpg" alt="product" /></a>
                        <div className='magamenu-product-body'>
                            <a href='#'>New Unlocked 128 GB of Storage Smartphone</a>
                            <div className='magamenu-product-rating'>
                                <span className='rating'><i className="fa-solid fa-star"></i></span>
                                <span className='rating'><i className="fa-solid fa-star"></i></span>
                                <span className='rating'><i className="fa-solid fa-star"></i></span>
                                <span className='rating'><i className="fa-regular fa-star"></i></span>
                                <span className='rating'><i className="fa-regular fa-star"></i></span>
                                <span className='rating-value'>(3)</span>
                            </div>
                            <p>$500.0</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div className='img-magamenu'>
            <a href='#'>
                <img src="img/vertical-menu-2.jpg" alt="banner-img" />
                <div className='img-magamenu-body'>
                    <h5>COMING SOON</h5>
                    <h3>S21 NOTE + S PEN 5G</h3>
                    <button href='#'>
                        buy now
                        <i class="fa-solid fa-arrow-right-long"></i>
                    </button>
                </div>
            </a>
        </div>
    </div>
  )
}

export default Magamenu
