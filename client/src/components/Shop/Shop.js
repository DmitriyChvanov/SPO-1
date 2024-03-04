import React from "react";
import TypeBar from "../TypeBar/TypeBar";
import common from "../../common.module.css";
import shop from "../../components/Shop/shop.module.css";
import BrandBar from "../BrandBar/BrandBar";
const Shop = () => {
  return (
    <section className={shop.shop}>
      <div className={common.container_1300px}>
        <TypeBar />
        <BrandBar />
      </div>
    </section>
  );
};

export default Shop;
