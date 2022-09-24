import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Arrow from "../../assets/Vector.svg";
const SelectBox = ({ value, options, placeholder = "Select", onChange }) => {
  const node = useRef();

  const [open, setOpen] = useState(false);

  const handleClick = (e) => {
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setOpen(false);
  };

  const handleChange = (selectedValue) => {
    onChange(selectedValue);
    setOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <div ref={node} className="selectbox">
      <button className="selectbox-toggler" onClick={(e) => setOpen(!open)}>
        {value || placeholder}{" "}
        <Image
          src={Arrow}
          className={`arrow  ${open ? "arrow-down" : "arrow-up"}`}
          alt="arrow"
        />
      </button>
      {open && (
        <ul className="selectbox-menu">
          {options.map((opt) => (
            <li
              key={opt}
              className="selectbox-menu-item"
              onClick={(e) => handleChange(opt)}
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SelectBox;
