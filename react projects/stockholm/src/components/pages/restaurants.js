import React from 'react'
import './pages.css';

function Restaurants() {
  return (
    <div  className='placesContainer'>
        <div id='bestRestaurants'>
        <div className='foodPicture'></div>
            <h1>The best 
                <br />restaurants</h1>
            <div className='restaurants'>
                <div className='ekstedt border line'>
                    <img />
                    <div className='name'>
                        <h3>Restaurant Ekstedt</h3>
                        <div className='location'>
                        <div className='locationIcon'></div>
                        <p>Humlegårdsgatan 17, 114 46 Stockholm</p>
                        </div>
                    </div>
                </div>
                <div className='meatballs border line'>
                <img />
                    <div className='name'>
                        <h3>Meatballs for the People</h3>
                       <div className='location'>
                       <div className='locationIcon'></div>
                        <p>Nytorgsgatan 30, 116 40 Stockholm</p>
                       </div>
                    </div>
                </div>
                <div className='lilla border line'>
                <img />
                    <div className='name'>
                        <h3>Lilla Ego</h3>
                        <div className='location'>
                        <div className='locationIcon'></div>
                        <p>Västmannagatan 69, 113 26 Stockholm</p>
                        </div>
                    </div>
                </div>
                <div className='brasserie line'>
                <img />
                    <div className='name'>
                        <h3>Brasserie Astoria</h3   >
                       <div className='location'>
                       <div className='locationIcon'></div>
                        <p>Nybrogatan 15, 114 39 Stockholm</p>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Restaurants