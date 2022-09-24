import { useState, useEffect, useRef } from "react";
import Dropdown from "./DropdownList";
import Image from "next/image";
import Link from "next/link";
import arrow from "../../assets/arrow1.png"


const MenuItems = ({ items, depthLevel }) => {
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
    <li
      className={`${items.url ? "menu-item" : "menu-items"} `}
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={closeDropdown}
    >
      {items.url && items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {items.icon ? <Image src={items.icon} alt={items.title} /> : ""}
            {items.title}

            {depthLevel > 0 && max < 960 ? null : depthLevel > 0 &&
              max > 960 ? (
                <Image className="menu-icon" src={arrow} alt="arrow" />
            ) : (
              <span className="arrow" />
            )}
          </button>

          <Dropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : !items.url && items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            className={`${items?.parent ? "item-title" : "dropdown-title"} `}
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {items.icon ? (
              <Image className="menu-icon" src={items.icon} alt={items.title} />
            ) : (
              ""
            )}{" "}
            <span className="item-title--text">{items.title}</span>
            {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />}
          </button>
          {items?.parent ? <div className="divider"></div> : ""}

          <Dropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : (
        <Link href={items.url}>
          <a>{items.title}</a>
        </Link>
      )}
    </li>
  );
};

export default MenuItems;
