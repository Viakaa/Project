import React, {forwardRef} from 'react'
import './events.css'

const Events = forwardRef((props, ref) => {
  return (
    <div ref={ref}className='events'>
        <div className='eventsContainer'>
            <h1>the eras tour</h1>
        <div className='eventInfo'>
            <p>is the ongoing sixth concert tour by the American 
                singer-songwriter Taylor Swift, who described it as 
                a journey through all of her "musical eras". A homage 
                to her 10-album discography, the Eras Tour is Swift's most expansive tour yet,
                 with 151 shows across five continents. </p>
            <div className='check'>Check dates</div>
        </div>
        </div>
    </div>
  )
});

export default Events