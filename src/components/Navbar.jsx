import { assets } from "../assets/assets";

export  function Navbar() {
  return (
    <>
     <header className="w-full flex justify-between items-center font-semibold">
       
       <div className="flex items-center gap-2">
        <img className="w-7 bg-black rounded-full p-2" src={assets.arrow_left} />
        <img className="w-7 bg-black rounded-full p-2" src={assets.arrow_right} />
       </div>
       
       <div className="flex items-center gap-2">
        <p className="bg-white text-black rounded-2xl px-4 py-1 hidden md:block">
         Explore Premium
        </p>
        <p className="bg-black rounded-2xl px-4 py-1 hidden md:block">
         Install App
        </p>
        <p className="w-6 h-6 rounded-full fondo flex items-center justify-center">
         Jp
        </p>
       </div>

     </header>

     <section className="flex items-center gap-2 my-3">
      <p className="bg-white text-black px-4 py-1 rounded-2xl">All</p>
      <p className="bg-black px-4 py-1 rounded-2xl">Music</p>
      <p className="bg-black px-4 py-1 rounded-2xl">Potcast</p>
     </section>
    </>
  )
}
