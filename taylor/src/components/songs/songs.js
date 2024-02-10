import React from 'react'
import './songs.css'

function Songs() {
  return (
    <div className='songs'>
        <div className='mostPopular'>Explore The most popular songs</div>
        <div className='songsContainer'>
            <div className='shakeItOut picture'>
                <p>shake it out</p>
            </div>
            <div className='cruelSummer picture' >
                <p>cruel summer</p>
            <div className='playContainer'>
                    <div className='playPauseLeft' ></div>
                    <div className='rewindLeft' ></div>
                    <div className='pause'></div>
                    <div className='rewindRight' ></div>
                    <div className='playPauseRight' ></div>
                </div></div>
            <div className='blankSpace picture'><p>blank space</p></div>
        </div>
    </div>
  )
}

export default Songs