import React from 'react'
import { Link } from 'react-router-dom'
import './brandimg.css'

const BrangImg = () => {
  return (
    <div className='brand-section'>
     <div className='container'>
      <div className='logo-item'>
        <div className='logo-brand'>
            <Link>
            <img src="img/brand-1.jpg" alt='logo-brand' />
            </Link>
            <Link>
            <img src="img/brand-7.jpg" alt='logo-brand' />
            </Link>
        </div>
        <div className='logo-brand'>
            <Link>
            <img src="img/brand-2.jpg" alt='logo-brand' />
            </Link>
            <Link>
            <img src="img/brand-8.jpg" alt='logo-brand' />
            </Link>
        </div>
        <div className='logo-brand'>
            <Link>
            <img src="img/brand-3.jpg" alt='logo-brand' />
            </Link>
            <Link>
            <img src="img/brand-9.jpg" alt='logo-brand' />
            </Link>
        </div>
        <div className='logo-brand'>
            <Link>
            <img src="img/brand-4.jpg" alt='logo-brand' />
            </Link>
            <Link>
            <img src="img/brand-10.jpg" alt='logo-brand' />
            </Link>
        </div>
        <div className='logo-brand'>
            <Link>
            <img src="img/brand-5.jpg" alt='logo-brand' />
            </Link>
            <Link>
            <img src="img/brand-11.jpg" alt='logo-brand' />
            </Link>
        </div>
        <div className='logo-brand'>
            <Link>
            <img src="img/brand-6.jpg" alt='logo-brand' />
            </Link>
            <Link>
            <img src="img/brand-12.jpg" alt='logo-brand' />
            </Link>
        </div>
      </div>
    </div>
    </div>
  )
}

export default BrangImg
