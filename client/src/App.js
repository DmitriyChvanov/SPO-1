// import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style.css";
import { observer } from "mobx-react-lite";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home";
import Basket from "./pages/Basket";

const App = observer(() => {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Basket" element={<Basket />} />
      </Routes>
    </BrowserRouter>
  );
});

export default App;
