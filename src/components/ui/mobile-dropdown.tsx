"use client";
import Link from "next/link";
import React, { useState } from "react";

type Props = {
  name: string;
  list: {
    name: string;
    slug: string;
  }[];
  setToggleMenu: (value: boolean) => void;
};

const MobileDropdown = ({ name, list, setToggleMenu }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setToggleMenu(false)
  }
  return (
    <div className="w-full">
      <button
        onClick={handleToggle}
        className="focus:outline-none flex justify-between items-center w-full"
      >
        <span className="text-xl font-semibold">{name}</span>{" "}
        <svg
          className={`fill-current h-6 w-6 inline-block transform ${
            isOpen ? "rotate-180" : ""
          } ease-in-out duration-300`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M10 12l-6-6-1.41 1.41L10 14.83l7.41-7.42L16 6z" />
        </svg>
      </button>
      {isOpen && (
        <div>
          <ul>
            {list.map((item, index) => (
              <li key={index} className="p-2">
                <Link href={item.slug} onClick={handleLinkClick}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileDropdown;