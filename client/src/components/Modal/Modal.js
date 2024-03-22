import React, { useContext, useState } from "react";
import modal from "./modal.module.css";
import emailjs from "emailjs-com"
import { Context } from "../..";


const Modal = ({ active, setActive }) => {
  const { clothes } = useContext(Context);
  const [phone, setPhone] = useState("");
  const [adress, setAdress] = useState("");


  function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('gmail', 'youtube_template', e.target, 'user_JABO21I8Gm6sxByJH17Nu')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }
  

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
    fetch("https://65e848554bb72f0a9c4ed3e6.mockapi.io/basket", {
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
    <div
      className={active ? `${modal.modal_active}` : `${modal.modal}`}
      onClick={() => setActive(false)}
    >
      <div
        className={
          active ? `${modal.modal_content_active}` : `${modal.modal_content}`
        }
        onClick={(e) => e.stopPropagation()}
      >
          <form className={modal.modal_form} onSubmit={sendEmail} >
            <input
              name="phone"
              className={modal.modal_text_field}
              onChange={(e) => phoneHandler(e)}
              placeholder="Введите email"
              value={phone}
            />
          <input
            name="adress"
            className={modal.modal_text_field}
            onChange={(e) => adressHandler(e)}
            placeholder="Адрес доставки"
            value={adress}
          />
          <input
            className={modal.modal_submit}
            type="button"   
            value="Purchase"
            onClick={() => submitData()}
          />
        </form>
      </div>
    </div>
  );
};

export default Modal;
