import React from "react";
import "./navigation.css";
import { NavLink } from "react-router-dom";
export const Navigation = ({ show, close }) => {
  return (
    <nav className={"navigation " + (show ? "show" : "")}>
      <ul className={"navigation-list"}>
        <li className={"navigation-item"}>
          <NavLink
            onClick={close}
            className={({ isActive }) =>
              isActive ? "navigation-link active" : "navigation-link"
            }
            to={"/home"}
          >
            Главная
          </NavLink>
        </li>
        <li className={"navigation-item"}>
          <NavLink
            onClick={close}
            className={({ isActive }) =>
              isActive ? "navigation-link active" : "navigation-link"
            }
            to={"/technology"}
          >
            Технология
          </NavLink>
        </li>
        <li className={"navigation-item"}>
          <NavLink
            onClick={close}
            className={({ isActive }) =>
              isActive ? "navigation-link active" : "navigation-link"
            }
            to={"/schedule"}
          >
            График полетов
          </NavLink>
        </li>
        <li className={"navigation-item"}>
          <NavLink
            onClick={close}
            className={({ isActive }) =>
              isActive ? "navigation-link active" : "navigation-link"
            }
            to={"/guaranty"}
          >
            Гарантии
          </NavLink>
        </li>
        <li className={"navigation-item"}>
          <NavLink
            onClick={close}
            className={({ isActive }) =>
              isActive ? "navigation-link active" : "navigation-link"
            }
            to={"/about"}
          >
            О компании
          </NavLink>
        </li>
        <li className={"navigation-item"}>
          <NavLink
            onClick={close}
            className={({ isActive }) =>
              isActive ? "navigation-link active" : "navigation-link"
            }
            to={"/contacts"}
          >
            Контакты
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
