import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "../..";
import typebar from "./TypeBar.module.css";

const TypeBar = observer(() => {
  const { clothes } = useContext(Context);
  return (
    <div className={typebar.typebar_content}>
      <h3>
        SHOP BY
        <br /> ESSENTIALS
      </h3>
      <div className={typebar.typebar_categories}>
        {clothes.types.map((type) => (
          <div
            className={typebar.typebar_category}
            // when type was select - change styles
            // active={type.id === clothes.selectedType.id}
            // onClick={() => clothes.setSelectedType(type)}
            key={type.id}
          >
            <div className={typebar.typebar_text}> {type.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default TypeBar;
