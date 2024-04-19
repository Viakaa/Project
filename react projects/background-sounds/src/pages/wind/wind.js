import React, {useEffect, useRef} from 'react'
import Background from '../../assets/background/wind.gif'
import WindAudio from '../../assets/sounds/desert-binaural-wind-5976.mp3'
import Play from '../../components/play/play';
import '../pages.css'

function Wind() {
  const audioRef = useRef(null);

  const playAudio = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.loop = true;
      audio.play();
    }
  };

  useEffect(() => {
    const audio = new Audio(WindAudio);
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
export default Wind