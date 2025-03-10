import { useContext } from "react"
import { SpotifyContext } from "../context/spotiffyContext"

export function SongItem({ image, name, desc, id }) {

  const { playWithId } = useContext(SpotifyContext);

  return (
    <div
      onClick={() => playWithId(id)}
      className="min-w-[180px] p-2 rounded cursor-pointer hover:bg-[#ffffff26]">
      <img src={image} alt={name} />
      <p className="font-bold mt-2 mb-1">{name}</p>
      <p className="text-slate-200 text-sm">{desc}</p>
    </div>
  )
}
