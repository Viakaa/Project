import React, {useEffect, useRef} from 'react'
import Background from '../../assets/background/train.gif'
import TrainAudio from '../../assets/sounds/train-50499.mp3'
import Play from '../../components/play/play';
import '../pages.css'

function Train() {
  const audioRef = useRef(null);

  const playAudio = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.loop = true;
      audio.play();
    }
  };

  useEffect(() => {
    const audio = new Audio(TrainAudio);
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

export default Train