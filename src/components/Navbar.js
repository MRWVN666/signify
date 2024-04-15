import React from 'react'
import img from '../assets/logo.jpg'

const Navbar = () => {
  return (
    <div className='Nav'>
      <img src={img} alt='logo' className='Logo' />
      <h1 className='Text'>Signify</h1>
    </div>
  )
}

export default Navbar
