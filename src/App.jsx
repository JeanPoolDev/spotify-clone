import { useContext } from "react";
import { Player } from "./components/Player";
import { Sidebar } from "./components/Sidebar";
import { RouterSpotify } from "./router/RouterSpotify";
import { SpotifyContext } from "./context/spotiffyContext";

function App() {

  const { refAudio, track } = useContext(SpotifyContext);

  return (
    <div className="h-screen bg-black">
      {/* Sidebar */}
      <div className="h-[90%] flex">
        <Sidebar />
        <RouterSpotify />
      </div>
      {/* Player */}
      <Player />
      <audio ref={refAudio} preload="auto" src={track.file}></audio>
    </div>
  )
}

export default App;