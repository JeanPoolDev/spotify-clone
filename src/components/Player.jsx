import { useContext } from "react";
import { assets } from "../assets/assets";
import { SpotifyContext } from "../context/spotiffyContext";

export function Player() {

  const { refBg, refBar, play, pause, loading, track, currentTime, totalTime } = useContext(SpotifyContext);

  return (
    <div className="h-[10%] bg-black justify-between flex items-center text-white px-4">

      <div className="hidden lg:flex items-center gap-4">
        <img className="w-12 " src={track.image} />
        <div>
          <p>{track.name}</p>
          <p>{track.desc.slice(0, 12)}</p>
        </div>
      </div>

      <div className="flex flex-col items-center">

        <div className="flex gap-4">
          <img className="w-4 cursor-pointer" src={assets.shuffle_icon} />
          <img className="w-4 cursor-pointer" src={assets.prev_icon} />
          {
            loading
              ? <img onClick={pause} className="w-4 cursor-pointer" src={assets.pause_icon} />
              : <img onClick={play} className="w-4 cursor-pointer" src={assets.play_icon} />

          }
          <img className="w-4 cursor-pointer" src={assets.next_icon} />
          <img className="w-4 cursor-pointer" src={assets.loop_icon} />
        </div>

        <div className="flex items-center gap-5">
          <p>{currentTime.minute}:{currentTime.second}</p>
          <div ref={refBg} className="w-[65vw] max-w-[500px] bg-white rounded-full cursor-pointer">
            <hr ref={refBar} className="h-1 bg-green-600 w-0 rounded-full border-none" />
          </div>
          <p>{totalTime.minute}:{totalTime.second}</p>
        </div>
      </div>

      <div className="hidden lg:flex items-center gap-2">
        <img className="w-4 cursor-pointer" src={assets.play_icon} />
        <img className="w-4 cursor-pointer" src={assets.mic_icon} />
        <img className="w-4 cursor-pointer" src={assets.queue_icon} />
        <img className="w-4 cursor-pointer" src={assets.speaker_icon} />
        <img className="w-4 cursor-pointer" src={assets.volume_icon} />
        <div className="w-20 bg-white rounded-full cursor-pointer">
          <hr className="h-1 bg-green-600 w-10 rounded-full border-none" />
        </div>
        <img className="w-4 cursor-pointer" src={assets.mini_player_icon} />
        <img className="w-4 cursor-pointer" src={assets.zoom_icon} />
      </div>

    </div>
  )
}
