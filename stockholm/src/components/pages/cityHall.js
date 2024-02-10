import React from 'react'
import './pages.css';

function CityHall() {
  return (
    <div  className='placesContainer'>
           <div id='cityHall'>
            <div className='info'>
                <div className='place'>
                    <h1>6. Stockholm city hall</h1>
            <div className='location'> 
            <div className='locationIcon white'>
            </div><p>Hantverkargatan 1, 111 52 Stockholm</p></div>
        </div>
            <p className='description'>The Stockholm City Hall is one of Sweden's most famous buildings, 
            <br />and one of the capital's most visited tourist attractions. The 
            <br />Stockholm City Hall is the venue of the Nobel Prize banquet held on 
            <br />10 December each year. Between May and September, the City 
            <br />Hall Tower offers a breathtaking view of Stockholm.</p>   
        </div>
        <div id='otherPlaces'>
        <div className='textPlaces'>
                <div> <p>7. Monteliusvägen</p></div>
                <div><p>8. Gröna Lund</p></div>
                <div><p>9. Vasa Museum</p></div>
                <div><p>10. SkyView </p></div>
            </div>
            <div className='placesPhotos'>
            <img className='Monteliusvägen' />
            <img className='grönaLund'/>
            <img className='vasaMuseum' />
            <img className='skyView' />
            </div>
        </div>
        </div>
        
    </div>
  )
}

export default CityHall