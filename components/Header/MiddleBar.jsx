import React from "react";
import Logo from "../../assets/logo.png";
import Picon from "../../assets/picon.png";
import Wishlist from "../../assets/wishlist.png";
import Cart from "../../assets/cart.png";
import search from "../../assets/search.svg";

import Image from "next/image";
const MiddleBar = () => {
  return (
    <div className="middle-bar">
      <div className="middle-bar--logo">
        <Image className="logo" src={Logo} alt="" />
      </div>
      <div className="middle-bar--search">
        <div className="middle-bar--search--box">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            className="middle-bar--search--box-icon"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.25 14.25C11.5637 14.25 14.25 11.5637 14.25 8.25C14.25 4.93629 11.5637 2.25 8.25 2.25C4.93629 2.25 2.25 4.93629 2.25 8.25C2.25 11.5637 4.93629 14.25 8.25 14.25Z"
              stroke="#898989"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.7488 15.7503L12.4863 12.4878"
              stroke="#898989"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <input type="text" placeholder="What do you want to order?" />
          <button className="serach-btn">Search</button>
        </div>
      </div>
      <div className="middle-bar--actions">
        <div className="profile">
          <Image className="Picon" src={Picon} alt="" />
          <div className="ptext">
            {" "}
            <p className="psign">Sign In</p>
            <p className="p-account">Account</p>
          </div>
        </div>
        <div className="wishlist">
          <Image className="wicon" src={Wishlist} alt="" />
        </div>
        <div className="cart">
          <Image className="cicon" src={Cart} alt="" />
        </div>
      </div>
    </div>
  );
};

export default MiddleBar;
