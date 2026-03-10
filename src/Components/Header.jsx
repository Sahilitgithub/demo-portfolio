import {Menu, Close} from '@mui/icons-material/';
import DarkAndLightMode from './DarkAndLightMode';
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  let [toggle, setToggle] = useState();

  return (
    <header>
        <div className='brandName'><NavLink to='/'><h1>Sahil-it</h1></NavLink></div>
        <DarkAndLightMode/>
        <nav className={!toggle ? 'navbar' : 'active'}>
            <ul>
                <li><NavLink to='/' onClick={() => setToggle(false)}>Home</NavLink></li>
                <li><NavLink to='/About' onClick={() => setToggle(false)}>About</NavLink></li>
                <li><NavLink to='/Services' onClick={() => setToggle(false)}>Services</NavLink></li>
                <li><NavLink to='/Skills' onClick={() => setToggle(false)}>Skills</NavLink></li>
                <li><NavLink to='/Projects' onClick={() => setToggle(false)}>Projects</NavLink></li>
                <li><NavLink to='/Testimonials' onClick={() => setToggle(false)}>Testimonials</NavLink></li>
                <li><NavLink to='/Contact' onClick={() => setToggle(false)}>Contact</NavLink></li>
            </ul>
        </nav>
        <div className='menu' onClick={() => setToggle(!toggle)}>
          {
            !toggle ? <Menu className='materiaICon' /> : <Close className='materiaICon' />
          }
        </div>
    </header>
  )
}

export default Header
