import React, {useState} from 'react'
import '../../pages/pages.css'

function Play({ playAudio }) {
    const [isClicked, setIsClicked] = useState(false);
  
    const handlePlayClick = () => {
      setIsClicked(true);
      playAudio();
    };
  return (
    <div className={`playButton ${isClicked ? 'hidden' : ''}`} onClick={handlePlayClick}>
        <img />
    </div>
  )
}

export default Play