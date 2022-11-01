import React from "react";
import "./navigation.css";
import { NavLink } from "react-router-dom";
export const Navigation = () => {
  return (
    <nav className={"navigation"}>
      <ul className={'navigation-list'}>
        <li className={'navigation-item'}>
          <NavLink className={'navigation-link'} to={"/home"}>Главная</NavLink>
        </li>
        <li className={'navigation-item'}>
          <NavLink className={'navigation-link'} to={"/technology"}>Технология</NavLink>
        </li>
        <li className={'navigation-item'}>
          <NavLink className={'navigation-link'} to={"/schedule"}>График полетов</NavLink>
        </li>
        <li className={'navigation-item'}>
          <NavLink className={'navigation-link'} to={"/guaranty"}>Гарантии</NavLink>
        </li>
        <li className={'navigation-item'}>
          <NavLink className={'navigation-link'} to={"/about"}>О компании</NavLink>
        </li>
        <li className={'navigation-item'}>
          <NavLink className={'navigation-link'} to={"/contacts"}>Контакты</NavLink>
        </li>
      </ul>
    </nav>
  );
};
