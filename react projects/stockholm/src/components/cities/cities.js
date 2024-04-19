import React from "react"
import './cities.css'

function Cities() {

  return (
    <div className='citiesContainer'>
       <div className='pictureContainer'>
       <h2> Top 10 places to visit</h2>
       <div className='olsTown picture'> </div>
        <div className='torg picture'> </div>
        <div className='palace picture'> </div>
        <div className='museum picture'></div>
        <div className='skansen picture'></div>
        <div className='hall picture'></div>
       </div>
        <div className='textContainer'>
        <p>1.stockholm old town</p>
        <p>2.sergels torg</p>
        <p>3.the royal palace</p>
        <p>4.forografiska meseum</p>
        <p>5.skansen</p>
        <p>6.Stockholm city hall</p>
        </div>
    </div>
  )
}

export default Cities