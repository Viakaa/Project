import React from 'react'
import Background from '../../assets/background/homescreen.gif'
import {SoundsList} from '../../components/soundsList/soundsList'
import SoundsItem from '../../components/soundsItem/soundsItem'
import './home.css'

function Home() {
  return (
    <div className='home' style={{ backgroundImage: `url(${Background})` }}>
   <div className='sounds-container'>
     <h1 className='title'>Choose a sound</h1>
     <div className='sounds'> 
     {SoundsList.map((soundsItem, key) => {
         return (<SoundsItem
           key={key}
           image={soundsItem.image}
           name={soundsItem.name}
       />
     );
   })}
   </div>
     </div>
       </div>
        )
      }

export default Home