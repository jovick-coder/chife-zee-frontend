import React from "react";
import "./HeroComponent.scss";
import { FaCaretDown, FaShoppingBag } from "react-icons/fa";

function HeroComponent() {
  return (
    <div className="HeroComponent">
      <div className="text-div">
        <p>ENJOY YOUR MEAL</p>
        <h1>
          Good food is wise <span className="red-text">medicine</span>
          <button className="fancy">
            Order Now
            <FaShoppingBag />
          </button>
        </h1>
      </div>
    </div>
  );
}

export default HeroComponent;
