import React, {forwardRef} from 'react'
import './mainPage.css'

const MainPage = forwardRef((props, ref) => {
  return (
    <div  className='container'>
        <h1 ref={ref}>Taylor Swift </h1>
        <div className='pictureContainer'>
            <div  className='taylorSwift'></div>
        </div>
    </div>
  )
});

export default MainPage