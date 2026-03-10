import React from 'react'
import { NavLink } from 'react-router-dom';
const Button = () => {
  return (
    <div>
       <button>
            <NavLink to='https://wa.me/1610466639' target='_blank' className='btn_design'>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Let's Talk
            </NavLink>
         </button>
    </div>
  )
}

export default Button
