import React from "react";
import "./TopNav.scss";
import logo from "../../assets/ChifeZee_logo.png";
import { Link } from "react-router-dom";
import { FaCaretDown, FaCartArrowDown } from "react-icons/fa";

export default function TopNavComponent() {
  return (
    <div className="TopNavComponent">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <ul>
        <li>
          <Link to={"#"}>Home</Link>
        </li>
        <li>
          <Link to={"#"}>Menu</Link>
        </li>
        <li>
          <Link to={"#"}>About us</Link>
        </li>
        <li>
          <Link to={"#"}>Contact</Link>
        </li>
      </ul>
      <div className="button-div">
        <CartButton />
        <button>Sing in</button>
      </div>
    </div>
  );
}

export function CartButton() {
  return (
    <div className="CartButton">
      <div className="count">0</div>
      <FaCartArrowDown />
    </div>
  );
}
