import { Link } from "react-router";
import { assets } from "../assets/assets";

export function Sidebar() {
  return (
    <div className="w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex">

      <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around">

        <Link to={'/'}>
          <div className="flex items-center gap-3 pl-8 cursor-pointer">
            <img className="w-6" src={assets.home_icon} alt="home-icon" />
            <p>Home</p>
          </div>
        </Link>
        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <img className="w-6" src={assets.search_icon} alt="search" />
          <p>Search</p>
        </div>

      </div>

      <div className="h-[85%] bg-[#121212] rounded">
        <div className="p-4 flex items-center justify-between">

          <div className="flex items-center gap-3">
            <img className="w-8" src={assets.stack_icon} alt="libary" />
            <p>Yout Library</p>
          </div>
          <div className="flex items-center gap-3">
            <img className="w-5" src={assets.arrow_icon} alt="arrow-icon" />
            <img className="w-5" src={assets.plus_icon} alt="plus" />
          </div>

        </div>

        <div className="bg-[#242424] m-2 p-4 rounded">
          <h1 className="font-semibold">Create your first playlist</h1>
          <p className="font-light">it,s easy we will help you</p>
          <button className="bg-white text-black px-4 py-1 rounded-full mt-3">
            Create Playlist
          </button>
        </div>

        <div className="bg-[#242424] m-2 p-4 rounded">
          <h1 className="font-semibold">Lest findsome podcasts to follow</h1>
          <p className="font-light">well keep you on new episodes</p>
          <button className="bg-white text-black px-4 py-1 rounded-full mt-3">
            browse podcasts
          </button>
        </div>

      </div>

    </div>
  )
}
