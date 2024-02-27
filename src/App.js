import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar/NavBar";
import Promo from "./components/Promo/Promo";
import Media from "./components/Media/media";
import "./style.css";
import { observer } from "mobx-react-lite";
import { Context } from ".";
import { check } from "./http/userAPI";

const App = observer(() => {
  const { user } = useContext(Context);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   check().then(data => {
  //     user.setUser(true)
  //     user.setIsAuth(true)
  //   }).finally(()=> setLoading(false))
  // }, [])

  return (
    <BrowserRouter>
      <NavBar />
      <Promo />
      <Media />
      <AppRouter />
    </BrowserRouter>
  );
});

export default App;
