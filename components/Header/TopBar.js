import React, { useState } from "react";
import Link from "next/link";
import Dropdown from "./SelectBox";
import { leftMenu } from "../../Data";

const TopBar = () => {
  const [language, setLanguage] = useState("English");
  const [currency, setCurrency] = useState("USD");

  return (
    <div className="top-bar">
      <div className="top-bar--left">
        <ul className="top-bar--left--menus">
          {leftMenu.map((item) => (
            <li className="top-bar--left--menus--item" key={item.title}>
              <Link href={item.link}>
                <a>{item.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="top-bar--right">
        <ul className="top-bar--right--menus">
          <li className="top-bar--right--menus--item">
            <a>Order Tracking</a>
          </li>
          <li className="top-bar--right--menus--item">
            <Dropdown
              placeholder="Select Vegetable"
              value={language}
              onChange={(v) => setLanguage(v)}
              options={["English", "Bangla"]}
            />
          </li>
          <li className="top-bar--right--menus--item">
            <Dropdown
              placeholder="Select Vegetable"
              value={currency}
              onChange={(v) => setCurrency(v)}
              options={["USD", "Taka"]}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopBar;
