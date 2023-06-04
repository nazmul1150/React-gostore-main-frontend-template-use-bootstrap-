import React from 'react'
import { Link } from 'react-router-dom'
import './burchampSinglepage.css'

const BurchampSinglepage = ({title,category,subcategory}) => {
  return (
    <div className='burchamp-single'>
      <div className='container'>
        <div className='single-burchamp-link'>
            <Link to="/">Home</Link>
            <Link to="/blog"><i class="fa-solid fa-angle-right"></i> Blog</Link>
            <Link><i class="fa-solid fa-angle-right"></i> {category}</Link>
            <Link><i class="fa-solid fa-angle-right"></i> {subcategory}</Link>
            <span><i class="fa-solid fa-angle-right"></i> {title}</span>
        </div>
      </div>
    </div>
  )
}

export default BurchampSinglepage
