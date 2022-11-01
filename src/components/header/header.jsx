import React from "react";
import { Logo } from "../logo";
import { Navigation } from "../navigation";
import "./header.css";

export const Header = () => {
  return (
    <header className={"header "}>
      <div className={"container header-container"}>
        <Logo />
          <Navigation/>
      </div>
    </header>
  );
};
