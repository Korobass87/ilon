import React from "react";

import "./home.css";

export const Home = () => {
  return (
    <div className={"container"}>
      <div className={'content-wrap'}>
      <div className="left-content">

      <div className={"title-wrap"}>
        <h1 className={"title"}>
          ПУТЕШЕСТВИЕ <span>на красную планету</span>
        </h1>
      </div>

      <button className={"button"} type={"button"}>
        <div className={"button-border"}>Начать путешествие</div>
      </button>
      </div>

      <ul className={"advantage"}>
        <li>
          <h3 className={"advantage-header"}>
            МЫ <span>1</span> НА РЫНКЕ
          </h3>
        </li>{" "}
        <li>
          <h3 className={"advantage-header"}>
            ГАРАНТИРУЕМ <span>50%</span> БЕЗОПАСНОСТИ
          </h3>
        </li>{" "}
        <li>
          <h3 className={"advantage-header"}>
            КАЛЕНДАРИК ЗА <span>2001г.</span> В ПОДАРОК
          </h3>
        </li>{" "}
        <li>
          <h3 className={"advantage-header"}>
            ПУТЕШЕСТВИЕ <span>597</span> ДНЕЙ
          </h3>
        </li>
      </ul>
      </div>
    </div>
  );
};
