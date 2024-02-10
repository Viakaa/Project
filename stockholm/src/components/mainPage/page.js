import React from 'react'
import './page.css'
import Navbar from '../navbar/navbar'

function MainPage() {
  return (
    <div className='container'>
            <Navbar/>
      <div className='top10Container'>
      </div>
      <h1 className='title'>Top 10 
      <br /> attractions 
      <br />in Stockholm</h1>
    </div>
  )
}

export default MainPage