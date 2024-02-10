import React from 'react'
import './newAlbum.css'

function NewAlbum() {
  return (
    <div className='newAlbum'> 
        <div className='albumContainer'>
            <h1>1989 <br />
            (taylor’s version)</h1>
            <div className='albumSongs'>
                <div className='welcomeTo song'>
                    <p>1. "Welcome to new york"</p>
                    <div className='arrow'>
                    </div>
                </div>
                <div className='BlankSpace song'>
                    <p>2. “Blank Space”</p>
                    <div className='arrow'></div>
                </div>
                <div className='style song'>
                    <p>3. “Style”</p>
                    <div className='arrow'></div>
                </div>
             </div>
             <div className='listen'>Listen new album</div>
        </div>
        <div className='vinylDisc'></div>
        
    </div>
  )
}

export default NewAlbum