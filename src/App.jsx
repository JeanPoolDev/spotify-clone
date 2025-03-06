import { Player } from "./components/Player";
import { Sidebar } from "./components/Sidebar";
import { Display } from "./pages/Display";
import { RouterSpotify } from "./router/RouterSpotify";

function App(){
  return(
    <div className="h-screen bg-black">
      {/* Sidebar */}
      <div className="h-[90%] flex">
        <Sidebar />
        <RouterSpotify />
      </div>
      {/* Player */}
      <Player />
    </div>
  )
}

export default App;