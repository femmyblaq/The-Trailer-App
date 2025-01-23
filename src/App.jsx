import React from "react";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Favorite from "./Pages/Favorite";
import Create from "./Pages/Create";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/favorite" element={<Favorite/>}/>
      <Route path="/create" element={<Create/>}/>
    </Routes>
    </>
  )
}


export default App;