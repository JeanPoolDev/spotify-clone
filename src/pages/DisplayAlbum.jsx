import { useParams } from "react-router";
import { Navbar } from "../components/Navbar";
import { albumsData, assets } from "../assets/assets";

export function DisplayAlbum() {
  
  const {id} = useParams();

  const albumSongs = albumsData[id];

  return (
   <>
    <Navbar />

    <div className="mt-10 flex gap-6">
      <img className="w-48" src={albumSongs.image}  />
      <div className="space-y-3">
        <p>PlayList</p>
        <h1 className="text-7xl font-semibold">{albumSongs.name}</h1>
        <h2>{albumSongs.desc}</h2>
        <p>
          <img className="w-5 inline-block mr-1" src={assets.spotify_logo} />
          <b>Spotify - </b>
          1.456.432 likes -
          <b> 50 songs - </b> 
          about 2h 30 min 
        </p>
      </div>
    </div>




   </>
  )
}
