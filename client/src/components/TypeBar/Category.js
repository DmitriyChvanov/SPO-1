import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "../..";
import typebar from "./Category.module.css";

const Category = observer(({ value, onClickCategory }) => {
  const { clothes } = useContext(Context);

  return (
    <div className={typebar.typebar_content}>
      <h3>
        SHOP BY
        <br /> ESSENTIALS
      </h3>
      <div className={typebar.typebar_categories}>
        <ul>
          {clothes.types.map((category, i) => (
            <li
              className={value === i ? `${typebar.active}` : ""}
              key={category.id}
              onClick={() => onClickCategory(i)}
            >
              {category.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
});

export default Category;
