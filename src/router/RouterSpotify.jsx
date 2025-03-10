import { Navigate, Route, Routes, useLocation } from "react-router";
import { Display } from "../pages/Display";
import { DisplayAlbum } from "../pages/DisplayAlbum";
import { albumsData } from "../assets/assets";
import { useEffect, useRef } from "react";

export function RouterSpotify() {

  const inputRef = useRef();
  const location = useLocation();
  const isAlbum = location.pathname.includes('album');
  const idAlbum = isAlbum ? location.pathname.split('/').pop() : '';
  const colorAlbum = albumsData[Number(idAlbum)].bgColor;

  useEffect(() => {
    isAlbum
      ? inputRef.current.style.background = `linear-gradient(${colorAlbum}, #121212)`
      : inputRef.current.style.background = `#121212`
  }, [colorAlbum, isAlbum])

  return (
    <div
      ref={inputRef}
      className="w-full bg-[#121212] m-2 rounded px-6 py-4 text-white overflow-auto lg:w-[75%] lg:ml-0 ">
      <Routes>
        <Route path="/" element={<Display />} />
        <Route path="/album/:id" element={<DisplayAlbum />} />
        <Route path="/*" element={<Navigate to={"/"} />} />
      </Routes>
    </div>
  )
}
