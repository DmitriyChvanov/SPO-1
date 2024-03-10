import { observer } from "mobx-react-lite";
import React, { createContext, useContext } from "react";
import brandbar from "./branbar.module.css";
import { Link } from "react-router-dom";
import { BASKET_ROUTE } from "../../utils/consts";
import { Context } from "../..";

const BrandBar = observer((obj) => {
  const { clothes } = useContext(Context);
  const addToCartClick = () => {
    clothes.addBasketItem(obj);
  };
  return (
    <div className={brandbar.brandbar_card}>
      <div className={brandbar.brandbar_card_img}>
        <img alt="shirt 1" src={obj.img} align="left" />
        <div className={brandbar.brandbar_buttons}>
          <button
            href="1"
            className={brandbar.brandbar_button}
            onClick={addToCartClick}
          >
            add to cart
          </button>
          <Link
            to={BASKET_ROUTE}
            className={brandbar.brandbar_button}
            onClick={addToCartClick}
          >
            buy now
          </Link>
        </div>
      </div>
      <h4>{obj.name}</h4>
      <p>{obj.price}</p>
    </div>
  );
});

export default BrandBar;
