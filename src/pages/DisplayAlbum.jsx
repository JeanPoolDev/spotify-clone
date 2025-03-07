import { useParams } from "react-router";
import { Navbar } from "../components/Navbar";
import { albumsData, assets, songsData } from "../assets/assets";

export function DisplayAlbum() {
  
  const {id} = useParams();
  const albumSongs = albumsData[id];

  return (
   <>
    <Navbar />

    <div className="mt-10 flex flex-col gap-6 md:flex-row">
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

    <div className="grid grid-cols-3 my-4 sm:grid-cols-4 text-[#a7a7a7] p-2">
      <p><b className="mr-4">#</b>Title</p>
      <p>Album</p>
      <p className="hidden sm:block">Date Added</p>
      <img src={assets.clock_icon} className="w-4 m-auto" />
    </div>

    <hr />
      {
        songsData.map((song, index) => (
          <div 
            key={song.id}
            className="grid grid-cols-3 sm:grid-cols-4 my-4 text-[#a7a7a7] 
            hover:bg-[#ffffff2b] items-center p-2 cursor-pointer">
            <p>
              <b className="mr-4">{index + 1}</b>
              <img src={song.image} className="inline-block w-10 mr-4" />
              {song.name}
            </p>
            <p className="hidden sm:block" >{albumSongs.name}</p>
            <p>5 days ago</p>
            <p className="m-auto">{song.duration}</p>
          </div>
        ))
      }

   </>
  )
}
