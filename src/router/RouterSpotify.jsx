import { Route, Routes } from "react-router";
import { Display } from "../pages/Display";
import { DisplayAlbum } from "../pages/DisplayAlbum";
import { DisplayHome } from "../layout/DisplayHome";

export function RouterSpotify() {
  return (
    <DisplayHome>
      <Routes>
        <Route path="/" element={<Display />} />
        <Route path="/album/:id" element={<DisplayAlbum />} />
      </Routes>
    </DisplayHome>
  )
}
