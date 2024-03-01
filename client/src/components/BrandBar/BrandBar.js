import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "../..";
import brandbar from "./branbar.module.css";
import { Link } from "react-router-dom";
import { BASKET_ROUTE } from "../../utils/consts";

const BrandBar = observer(() => {
  const { clothes } = useContext(Context);
  return (
    <div className={brandbar.brandbar_content}>
      {clothes.clothes.map((clothes) => (
        <div className={brandbar.brandbar_column}>
          <div className={brandbar.brandbar_card} key={clothes.id}>
            <div className={brandbar.brandbar_card_img}>
              <img alt="shirt 1" src={clothes.img} align="left" />
              <div className={brandbar.brandbar_buttons}>
                <a href="1" className={brandbar.brandbar_button}>
                  add to cart
                </a>
                <Link
                  to={BASKET_ROUTE + "/" + clothes.id}
                  className={brandbar.brandbar_button}
                >
                  buy now
                </Link>
              </div>
            </div>
            <h4>{clothes.name}</h4>
            <p>{clothes.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
});

export default BrandBar;
