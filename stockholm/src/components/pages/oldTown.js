import './pages.css';
import Cities from '../cities/cities';

function OldTown() {

  return (
    <div className='placesContainer'>
              <Cities/>
        <div id='oldTown'></div>
        <div className='information'>
            <h1>1. Stockholm old town</h1>
            <p className='description'>The Old Town, unsurprisingly, is the oldest part of Stockholm. 
                It's certainly the tourist's go-to destination, but that doesn’t 
                detract from its architectural and otherwise urban beauty.</p>
                <div className='location'> 
                <div className='locationIcon'>
                </div><p>Gamla stan, Södermalm</p></div>
        </div>
    </div>
  )
}

export default OldTown