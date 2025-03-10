import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const SpotifyContext = createContext();

export function SpotifyProvider({ children }) {

  const [loading, setLoading] = useState(false);
  const [track, setTrack] = useState(songsData[0]);
  const [time, setTime] = useState({
    currentTime: {
      minute: 0,
      second: 0
    },
    totalTime: {
      minute: 0,
      second: 0
    }
  });

  const refAudio = useRef();
  const refBg = useRef();
  const refBar = useRef();

  const play = () => {
    refAudio.current.play();
    setLoading(true);
  }

  const pause = () => {
    refAudio.current.pause();
    setLoading(false);
  }

  const playWithId = async (id) => {
    await setTrack(songsData[id]);
    await refAudio.current.play();
    setLoading(true);
  }

  useEffect(() => {

    const audio = refAudio.current;

    const handleTimeUpdate = () => {
      refBar.current.style.width = (Math.floor(audio.currentTime / audio.duration * 100)) + '%';
      setTime({
        currentTime: {
          minute: Math.floor(audio.currentTime / 60),
          second: Math.floor(audio.currentTime % 60)
        },
        totalTime: {
          minute: Math.floor(audio.duration / 60),
          second: Math.floor(audio.duration % 60)
        }
      })
    }

    audio.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
    }

  }, [track])


  return (
    <SpotifyContext.Provider value={{
      refAudio, refBg, refBar,
      track, setTrack,
      play, pause,
      loading, setLoading,
      time, setTime, ...time,
      playWithId
    }} >
      {children}
    </SpotifyContext.Provider>
  )
}