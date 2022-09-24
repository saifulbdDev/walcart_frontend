import { useState, useEffect, useRef } from "react";
import Dropdown from "./DropdownList";
import Image from "next/image";
import Arrow from "../../assets/arrow.png";

const DropdownMenu = ({ items, key, depthLevel = 0 }) => {
  const [dropdown, setDropdown] = useState(false);
  const [max, setMax] = useState(0);
  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    max > 960 && setDropdown(true);
  };

  const onMouseLeave = () => {
    max > 960 && setDropdown(false);
  };

  const closeDropdown = () => {
    dropdown && setDropdown(false);
  };

  useEffect(() => {
    setMax(window.innerWidth);
  }, []);
  return (
    <div
      className="navbar--middle-menu-menus-item"
      ref={ref}
      key={key}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={closeDropdown}
    >
      <>
        <button
          type="button"
          aria-haspopup="menu"
          aria-expanded={dropdown ? "true" : "false"}
          onClick={() => setDropdown((prev) => !prev)}
        >
          <span className="title"> {items.title} </span>
          <Image className="arrow" src={Arrow} alt="title" />
        </button>
        <div className="divider"></div>
        <ul className={`dropdown  ${dropdown ? "show" : ""}`}>
          {items.submenu.map((submenu) => (
            <li className="dropdown-item" key={submenu.title}>
              <a>{submenu.title}</a>
            </li>
          ))}
        </ul>
      </>
    </div>
  );
};

export default DropdownMenu;
