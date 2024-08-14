"use client";
import React, { useState } from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import { IoMenuSharp } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import Dropdown from "./Dropdown";
import Link from "next/link";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const aboutDropdown = [
    {
      link: "/our-team",
      linkName: "Team",
    },
    {
      link: "/mission-vision",
      linkName: "Mission & Vision",
    },
    {
      link: "/careers",
      linkName: "Careers at EdSpare",
    },
  ];

  const productDropdown = [
    {
      link: "/edspare-school",
      linkName: "EdSpare School",
    },
    {
      link: "/edspare-eep-sep",
      linkName: "EdSpare EEP & SEP",
    },
    {
      link: "/edspare-student",
      linkName: "EdSpare Student",
    },
    {
      link: "/our-application",
      linkName: "Our Application",
    },
  ];

  const servicesDropdown = [
    {
      link: "/ai-teaching-model",
      linkName: "AI Based Teaching Model",
    },
    {
      link: "/student-teacher-networking",
      linkName: "Student & Teacher Network",
    },
    {
      link: "/our-library",
      linkName: "Our Library",
    },
    {
      link: "/panic-button",
      linkName: "Panic Button",
    },
    {
      link: "/our-schools",
      linkName: "Our Schools",
    },
    {
      link: "/tutoring-facilities",
      linkName: "One-to-one Tutoring",
    },
  ];

  return (
    <nav className="flex flex-col justify-center items-center sticky top-0 bg-white z-[10]">
      <div className="flex items-center justify-between my-10 md:w-3/4 w-11/12">
        <Link href="/">
          <h1 className="text-4xl font-extrabold text-[#FF204E]">CGX</h1>
        </Link>
        {/* <ul className="md:flex items-center hidden pl-4 gap-8">
          <li>
            <Link href="/shop">Company</Link>
          </li>
          <li>
            <Dropdown linkName="Services" dropdownList={aboutDropdown} />
          </li>
          <li>
            <Dropdown linkName="Products" dropdownList={productDropdown} />
          </li>
          <li>
            <Dropdown linkName="Services" dropdownList={servicesDropdown} />
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li className="border-[1px] border-solid border-gray-400 hover:border-gray-900 duration-200 ease-in-out p-2 mx-5 hover:cursor-pointer">
            <Link href='/'>
              <span className="font-semibold">Get in touch</span>
            </Link>
          </li>
        </ul> */}
        <button className="bg-black text-white duration-200 ease-in-out p-3 hover:opacity-80 font-bold rounded">
          <Link href="/">
            <span className="font-semibold">Get in touch</span>
          </Link>
        </button>
      </div>
      {/* <div className="flex md:hidden w-11/12 p-2 my-4 justify-between items-center relative">
        <h1 className="text-4xl font-extrabold text-red-700 md:hidden">CGX</h1>
        {!toggleMenu && (
          <IoMenuSharp
            fontSize={28}
            className="md:hidden cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <AiOutlineClose
            fontSize={28}
            className="md:hidden cursor-pointer"
            onClick={() => setToggleMenu(false)}
          />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-start rounded-md bg-[#fffbf2] animate-slide-in"
          >
            <li className="text-xl w-full my-2">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            <ul className="flex flex-col px-3 pt-6 text-md gap-4 text-[#535479]">
              <li>Shop</li>
              <li>
                <Dropdown
                  linkName="About EdSpare"
                  dropdownList={aboutDropdown}
                />
              </li>
              <li>
                <Dropdown linkName="Products" dropdownList={productDropdown} />
              </li>
              <li>
                <Dropdown linkName="Services" dropdownList={servicesDropdown} />
              </li>
              <li>Blog</li>
            </ul>
            <div className="flex pt-3">
              <button className="px-3 py-1 m-1 bg-transparent flex items-center gap-1">
                <Link href="/login">
                  <span>Login</span>
                </Link>
                <BiRightArrowAlt />
              </button>
              <button className="px-6 m-1 rounded-full bg-[#F7F9FC] hover:bg-[#130A46] hover:text-white">
                Contact Us
              </button>
            </div>
          </ul>
        )}
      </div> */}
      <div className="md:w-3/4 w-full border-[0.5px] border-solid border-gray-200"></div>
    </nav>
  );
};

export default Navbar;
