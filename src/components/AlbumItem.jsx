import { Link } from "react-router";

export default function AlbumItem({ image, name, desc, id }) {
  
  return (
   <Link
    to={(`/album/${id}`)} 
    className="min-w-[180px] p-2 rounded cursor-pointer hover:bg-[#ffffff26]">
    <img src={image} alt={name} />
    <p className="font-bold mt-2 mb-1">{name}</p>
    <p className="text-slate-200 text-sm">{desc}</p>
  </Link>
  )
}
