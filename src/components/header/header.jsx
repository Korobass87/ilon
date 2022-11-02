import React, { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import { Logo } from "../logo";
import { Navigation } from "../navigation";
import "./header.css";

export const Header = () => {
  const [show, setShow] = useState(false);

  function closeMenu() {
    setShow(false);
  }
  return (
    <header className={"header "}>
      <div className={"container header-container"}>
        <Logo />
        <button className={"burger"} onClick={() => setShow(true)}>
          <MenuOutlined className={"burger-icon"} />
        </button>
        <Navigation show={show} close={closeMenu} />
      </div>
    </header>
  );
};
