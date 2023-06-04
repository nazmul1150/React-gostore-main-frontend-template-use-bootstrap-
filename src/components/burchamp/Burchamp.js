import React from 'react'
import { Link } from 'react-router-dom'
import './burchamp.css'

const Burchamp = ({title}) => {
  return (
    <div className='burchamp'>
      <div className='container'>
        <h3>{title}</h3>
        <div className='burchamp-link'>
            <Link to="/">Home</Link>
            <span><i class="fa-solid fa-angle-right"></i> {title}</span>
        </div>
      </div>
    </div>
  )
}

export default Burchamp
