import React from 'react'
import './pages.css';

function Skansen() {
  return (
    <div  className='placesContainer'>
          <div id='skansenZoo'>
        <div className='photosContainer1'>
                <div className='pigPicture pictures'></div>
                <div className='bearPicture pictures'></div>
            </div>
            <div className='photosContainer2'>
                <div className='towerPicture pictures'></div>
                <div className='skansenPicture pictures'></div>
            </div>
        <div className='information'>
            <h1>5. skansen</h1>
            <div className='location'> 
                <div className='locationIcon'>
                </div><p>Djurgårdsslätten 49-51, 115 21 Stockholm</p></div>
                <p className='description'>
                Skansen is the oldest open-air museum and zoo in Sweden located 
                <br />on the island Djurgården in Stockholm.
                <br />
                There is an open-air zoo containing a wide range of Scandinavian 
                <br />
                animals including the brown bear, moose, grey seal, Eurasian lynx, 
                <br />
                wolf,fox, otter, reindeer, harbour seal, Eurasian eagle owl, great 
                <br />grey owl and wolverine, as well as some non-Scandinavian animals.
                </p>
            </div>
           <div className='hallPicture'></div>
        </div>
    </div>
  )
}

export default Skansen