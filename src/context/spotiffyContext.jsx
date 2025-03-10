import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const SpotifyContext = createContext();

export function SpotifyProvider({ children }) {

  const [loading, setLoading] = useState(false);
  const [track, setTrack] = useState(songsData[0]);
  const [range, setRange] = useState(5);
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

  const previous = () => {
    if (track.id > 0) {

      setTrack(songsData[track.id - 1]);

      setTimeout(() => {
        refAudio.current.play()
          .then(() => {
            setLoading(true);
          })
          .catch(error => {
            console.error("Error al reproducir la canción anterior:", error);
            setLoading(false);
          });
      }, 10);

    }
  }

  const next = () => {
    if (track.id < songsData.length - 1) {
      setTrack(songsData[track.id + 1])

      setTimeout(() => {
        refAudio.current.play()
          .then(() => {
            setLoading(true)
          }).catch(error => {
            console.error("Error al reproducir la canción siguiente:", error);
            setLoading(false)
          })
      }, 10);

    }
  }


  const seekSong = (e) => {
    refAudio.current.currentTime = ((e.nativeEvent.offsetX / refBg.current.offsetWidth) * refAudio.current.duration)
  }

  const volumen = (e) => {
    const newVolume = e.target.value / 10;

    setRange(e.target.value)

    if (refAudio.current) {
      refAudio.current.volume = newVolume;
    }
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
      playWithId,
      previous, next, seekSong, volumen, range
    }} >
      {children}
    </SpotifyContext.Provider>
  )
}