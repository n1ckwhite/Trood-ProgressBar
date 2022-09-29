import React from "react";
import stylesApp from "./App.module.css";
import { data } from "../../utils/data";
export const App = () => {
  const { v4: uuidv4 } = require("uuid");
  const total = data.items.reduce((a, b) => a + b.value, 0);
  const totalPercent = data.items.map((i) => {
    return {
      name: i.name,
      color: i.color,
      value: i.value,
      percent: Math.round((i.value * 100) / total),
      px: Math.round((i.value * 100) / total / 2),
    };
  });
  return (
    <div className={stylesApp.app}>
      <ul className={stylesApp.bar}>
        {totalPercent.map((item) => {
          return (
            <li
              key={uuidv4()}
              className={stylesApp.block}
              style={{
                width: item.percent + "%",
              }}
            >
              {[...Array(item.px)].map(() => (
                <div
                  key={uuidv4()}
                  className={stylesApp.item}
                  style={{ background: item.color }}
                ></div>
              ))}
            </li>
          );
        })}
      </ul>
      <ul className={stylesApp.textData}>
        {totalPercent.map((item) => {
          return (
            <li key={uuidv4()} className={stylesApp.textBlock}>
              <div
                className={stylesApp.circle}
                style={{ background: item.color }}
              ></div>
              <p className={stylesApp.text}>
                {item.name} : {item.value} ( {item.percent} % )
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
