'use client'
import Link from "next/link";
import React, { useState } from "react";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

// Define the types for the dropdown items
interface DropdownItem {
  link: string;
  linkName: string;
}

// Define the types for the component props
interface DropdownProps {
  linkName: string;
  dropdownList: DropdownItem[];
}

const Dropdown: React.FC<DropdownProps> = ({ linkName, dropdownList }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div
      className="navbar-item"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link className="navbar-link" href="#">
        {linkName}{" "}
        {isOpen ? (
          <MdKeyboardArrowUp className="text-xl" />
        ) : (
          <MdKeyboardArrowDown className="text-xl" />
        )}
      </Link>
      {isOpen && (
        <div className="dropdown-content">
          {dropdownList.map((item, index) => (
            <Link href={item.link} key={index}>
              {item.linkName}{" "}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
