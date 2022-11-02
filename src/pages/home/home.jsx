import React from "react";
import Xarrow from "react-xarrows";
import "./home.css";

export const Home = () => {
  const screenWidth = window.innerWidth;

  return (
    <main>
      <div className={"container"}>
        <div className="circle" id="circle"></div>

        <div className={"content-wrap"}>
          <div className="left-content">
            <div className={"title-wrap"}>
              <h1 className={"title"}>
                ПУТЕШЕСТВИЕ <span>на красную планету</span>
              </h1>
            </div>

            <button className={"button"} id={"button"} type={"button"}>
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

        {screenWidth > 1200 && (
          <Xarrow
            zIndex={12}
            color={"rgba(255, 255, 255, 0.7)"}
            strokeWidth={1}
            path={"grid"}
            gridBreak={screenWidth > 1200 ? "80%" : "100%"}
            animateDrawing={3}
            showHead={false}
            start="circle"
            end="button"
          />
        )}
      </div>
    </main>
  );
};
