import React from "react";
import Image from "next/image";
import Arrow from "../../assets/arrow.png";
import Groupmenu from "../../assets/Group.png";
import Link from "next/link";

import DropdownMenu from "./DropdownMenu";
import { menuData, mainMenu } from "../../Data";
import MenuItems from "./MenuItems";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar--left-menu">
        <ul className="menus">
          {menuData.map((menu, index) => {
            const depthLevel = 0;
            return (
              <MenuItems items={menu} key={index} depthLevel={depthLevel} />
            );
          })}
        </ul>
      </div>

      <div className="navbar--middle-menu">
        <ul className="navbar--middle-menu-menus">
          {mainMenu.map((menu, index) => {
            return (
              <li className="navbar--middle-menu-menus-item" key={menu.title}>
                <Link href="#">
                  {menu?.submenu?.length ? (
                    <DropdownMenu items={menu} />
                  ) : (
                    <a>{menu.title}</a>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="navbar--right-menu">
        <Image className="groupicon" src={Groupmenu} alt="" />
        <div className="gtext">
          <span>
            <p className="weekend">Only this weekend</p>
            <p className="discount">Super Discount</p>
          </span>
          <Image className="arrow" src={Arrow} alt="" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
