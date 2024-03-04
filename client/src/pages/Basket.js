import React from "react";
import basket from "./basket.module.css";
import common from "../common.module.css";
import { useState } from "react";
import basket_image_shirt from "../img/basket_image_shirt.png";

const Basket = () => {
  const [phone, setPhone] = useState();
  const [adress, setAdress] = useState();

  const phoneHandler = (e) => {
    setPhone(e.target.value);
  };

  const adressHandler = (e) => {
    setAdress(e.target.value);
  };

  return (
    <div className={basket.basket}>
      <div className={common.container_1300px}>
        <div className={basket.basket_content}>
          <form className={basket.basket_form}>
            <input
              name="phone"
              className={basket.basket_text_field}
              onChange={(e) => phoneHandler(e)}
              placeholder="Введите номер телефона"
              value={phone}
            />
            <input
              name="adress"
              className={basket.basket_text_field}
              onChange={(e) => adressHandler(e)}
              placeholder="Адрес доставки"
              value={adress}
            />
            <input
              className={basket.basket_submit}
              type="submit"
              value="Продолжить"
            />
          </form>
          <div className={basket.basket_cards}>
            <div className={basket.basket_card}>
              <img src={basket_image_shirt} alt="basket_card" />
              <div className={basket.basket_card_info}>
                <h4>A SHIRT</h4>
                <p>100</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
