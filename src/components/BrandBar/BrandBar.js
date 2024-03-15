import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import brandbar from "./branbar.module.css";
import { Link } from "react-router-dom";
import { BASKET_ROUTE } from "../../utils/consts";
import { Context } from "../..";

const BrandBar = observer((obj) => {
  const { clothes } = useContext(Context);

  // const []
  const addToCartClick = () => {
    clothes.addBasketItem(obj);
  };
  return (
    <div className={brandbar.brandbar_card}>
      <div className={brandbar.brandbar_card_img}>
        <img alt="shirt 1" src={obj.img} align="left" />
        <svg
          className={brandbar.heart_icon}
          width="35"
          height="35"
          viewBox="0 0 45 37"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          // onClick={}
        >
          <path d="M38.5289 2.82608C36.5921 1.22627 34.1047 0.347083 31.5265 0.347083C28.5486 0.347083 25.6659 1.52932 23.6189 3.59427C23.2509 3.96604 22.9059 4.36511 22.5821 4.79854C20.0753 1.46765 15.8868 -0.241392 11.7442 0.514465C8.30651 1.1373 5.60387 3.02342 3.71651 6.11644C1.05357 10.4833 0.835631 14.6952 3.0724 18.6357C4.26798 20.7438 5.81916 22.7982 7.81504 24.916C11.4706 28.7957 15.7977 32.4781 21.4333 36.5005C21.7933 36.7586 22.1789 36.889 22.5812 36.889C23.2006 36.889 23.6189 36.5763 23.8262 36.423C28.9112 32.7978 32.9056 29.4564 36.398 25.9018C38.348 23.9178 40.5609 21.4794 42.1792 18.4339C42.8727 17.1327 43.6633 15.3814 43.6165 13.3808C43.5124 9.07556 41.8015 5.52444 38.5289 2.82608ZM39.5303 17.0297C38.0895 19.7377 36.0565 21.9727 34.2565 23.8033C31.0271 27.091 27.3345 30.2026 22.5759 33.633C17.3974 29.8925 13.3889 26.4576 10.0006 22.8598C8.17151 20.9191 6.75887 19.0541 5.68151 17.1557C3.97592 14.1516 4.16563 11.137 6.27975 7.67308C7.7021 5.34032 9.72092 3.92199 12.2815 3.45773C12.7721 3.36787 13.2689 3.32382 13.7586 3.32382C16.7939 3.32382 19.4824 4.99763 21.0009 7.90389L21.2586 8.3893C21.5233 8.88527 22.0686 9.16718 22.6068 9.18039C23.1706 9.16982 23.6797 8.84828 23.9277 8.34261C24.4606 7.25728 25.0421 6.41508 25.7515 5.69799C27.2392 4.19949 29.3436 3.3388 31.5265 3.3388C33.4086 3.3388 35.2165 3.97573 36.6186 5.1333C39.2268 7.2837 40.5345 10.0058 40.6183 13.4486C40.6474 14.748 40.0853 15.9866 39.5303 17.0297Z" />
        </svg>
      </div>
      <div className={brandbar.brandbar_card_info_block}>
        <div className={brandbar.brandbar_card_info}>
          <h4>{obj.name}</h4>
          <p>{obj.price}</p>
        </div>
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
    </div>
  );
});

export default BrandBar;
