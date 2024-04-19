import React from 'react'
import './footer.css'
import './email.css'

function Bottom() {
  return (
    <div className='bottom'>
        <div className='emailContainer'>
            <h1>Keep up to date
                <br /> newsletter</h1>
            <div className='email'>
                <input type="text" placeholder='Email' /> 
                <div className='arrow'></div>
            </div>
        </div>
        <div className='footer'>
            <div className='navigation list'>
                <h2>Navigation</h2>
                <p>Home</p>
                <p>About</p>
                <p>Events</p>
            </div>
            <div className='resources list'>
                <h2>Resources</h2>
                <p>Privacy Policy</p>
                <p>Terms of Services</p>
                <p>Cookies</p>
            </div>
            <div className='followUs list'>
                <h2>Follow Us</h2>
                <p>Instagram</p>
                <p>Pinterest</p>
                <p>TikTok</p>
            </div>
            <div className='ladyIcon'></div>
        </div>
    </div>
  )
}

export default Bottom