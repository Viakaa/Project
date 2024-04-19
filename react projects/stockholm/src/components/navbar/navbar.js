import React from 'react'
import './navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
        <h1 className='stockholm'>Stockholm</h1>
        <form action="" >
        <input className='search' type="text" placeholder='search attraction' />
        <button className='searchIcon'></button>
        </form>
        <div className='languageContainer'>
         <select className='switchLanguage' >
         <option href='#' className='english language'>EN</option>
          <option href='#' className='ukrainian language'>UA</option>
          <option href='#' className='japanese language'>JP</option>
          <option href='#' className='spanish language'>SP</option>
         </select>
  
        </div>
    </div>
  )
}

export default Navbar