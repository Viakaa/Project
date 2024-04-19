import React, {useEffect, useRef} from 'react'
import Background from '../../assets/background/sea.gif'
import SeaAudio from '../../assets/sounds/gentle-ocean-waves-mix-2018-19693.mp3'
import Play from '../../components/play/play';
import '../pages.css'

function Sea (){
  const audioRef = useRef(null);

  const playAudio = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.loop = true;
      audio.play();
    }
  };

  useEffect(() => {
    const audio = new Audio(SeaAudio);
    audioRef.current = audio;

    return () => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    };
  }, []);

  return (
    <div>
      <div className='background' style={{ backgroundImage: `url(${Background})` }}>
        <Play playAudio={playAudio} />
      </div>
    </div>
  );
}

export default Sea;
