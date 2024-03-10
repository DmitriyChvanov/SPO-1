import React, { useContext } from "react";
import basket from "./basket.module.css";
import common from "../../common.module.css";
import { useState } from "react";
import { Context } from "../..";

const Basket = () => {
  const { clothes } = useContext(Context);
  const [phone, setPhone] = useState("");
  const [adress, setAdress] = useState("");

  const [basketState, setBasketState] = useState(clothes.basket);

  const deleteBasketItem = (item) => {
    const basket = [...clothes.basket];
    let basketIndex = -1;
    for (let i = 0; i < basket.length; i++) {
      const basketItem = basket[i];
      if (basketItem.id === item.id) {
        basketIndex = i;
      }
    }
    if (basketIndex !== -1) {
      basket.splice(basketIndex, 1);
      clothes.setBasket(basket);
      setBasketState(basket);
    }
    // clothes.basketItemDelete(item);
    // setBasketState(clothes.basket);
  };

  const basketCountAdd = (item) => {
    const basket = [...clothes.basket];
    for (let i = 0; i < basket.length; i++) {
      if (basket[i].id === item.id) {
        basket[i].count++;
        clothes.setBasket(basket);
        setBasketState(basket);
      }
    }
  };
  const basketCountRemove = (item) => {
    const basket = [...clothes.basket];
    for (let i = 0; i < basket.length; i++) {
      if (basket[i].id === item.id) {
        basket[i].count--;
        if (basket[i].count === 0) {
          deleteBasketItem(item);
        } else {
          clothes.setBasket(basket);
          setBasketState(basket);
        }
      }
    }
  };

  const phoneHandler = (e) => {
    setPhone(e.target.value);
  };

  const adressHandler = (e) => {
    setAdress(e.target.value);
  };

  const submitData = () => {
    const basket = [...clothes.basket];
    const arrOfClothes = [];

    for (let i = 0; i < basket.length; i++) {
      arrOfClothes.push(`${basket[i].id}  ${basket[i].count}`);
    }
    const newTask = {
      basket: `${arrOfClothes}`,
      phone: phone,
      adress: adress,
    };
    fetch("https://65e848554bb72f0a9c4ed3e6.mockapi.io/Basket", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newTask),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        // handle error
      })
      .then((task) => {
        // do something with the new task
      })
      .catch((error) => {
        // handle error
      });
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
              type="button"
              value="Продолжить"
              onClick={() => submitData()}
            />
            <p>
              Номера телефонов могут
              <br /> начинаться только на +7 
            </p>
          </form>
          <div className={basket.basket_cards}>
            {basketState.map((item) => (
              <div className={basket.basket_card} key={item.id}>
                <img src={item.img} alt="basket_card" />
                <div className={basket.basket_card_info}>
                  <h4>{item.name}</h4>
                  <p>{item.price * item.count}</p>
                  <div className={basket.basket_change_amount}>
                    <button
                      className={basket.basket_add}
                      onClick={() => basketCountAdd(item)}
                    >
                      +
                    </button>
                    <div className={basket.basket_amount}>{item.count}</div>
                    <button
                      className={basket.basket_remove}
                      onClick={() => basketCountRemove(item)}
                    >
                      -
                    </button>
                  </div>
                </div>
                <span
                  className={basket.delete}
                  onClick={() => deleteBasketItem(item)}
                ></span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
