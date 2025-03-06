import { albumsData, songsData } from "../assets/assets";
import AlbumItem from "./AlbumItem";
import { SongItem } from "./SongItem";

export function Album() {
  return (
    <>
    <div className="mb-4">
      <h1 className="mb-4 text-2xl font-semibold">Featured Charts</h1>
      <div className="flex overflow-auto">
        {
        albumsData.map(album => (
          <AlbumItem key={album.id} {...album}/>
        ))
        }
      </div>
    </div>

    <div className="mb-4">
    <h1 className="mb-4 text-2xl font-semibold">Today biggets hits</h1>
    <div className="flex overflow-auto">
      {
        songsData.map(song => (
          <SongItem key={song.id} {...song}/>
        ))
      }
    </div>
    </div>
  </>
  )
}
