"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { IoMenuOutline } from "react-icons/io5";
import MobileDropdown from "./mobile-dropdown";
import { BsCart } from "react-icons/bs";
import { LuUser } from "react-icons/lu";
import MobileNavFooter from "./mobile-nav-footer";
import NavSearch from "./nav-search";
import {
  companyLinks,
  servicesLinks,
  donationLinks,
  resourcesLinks } from '../../utils/navigation-links'

const Navbar = () => {
  const [donations, setDonations] = useState<boolean>(false);
  const [company, setCompany] = useState<boolean>(false);
  const [resources, setResources] = useState<boolean>(false);
  const [channels, setChannels] = useState<boolean>(false);
  const [services, setServices] = useState<boolean>(false)

  // Toggle for menu
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  const handleMouseEnter = (type: string) => {
    if (type === "donations") {
      setDonations(true);
      setCompany(false);
      setResources(false);
      setChannels(false);
    } else if (type === "company") {
      setDonations(false);
      setCompany(true);
      setResources(false);
      setChannels(false);
    } else if (type === "resources") {
      setDonations(false);
      setCompany(false);
      setResources(true);
      setChannels(false);
    } else if (type === "channels") {
      setDonations(false);
      setCompany(false);
      setResources(false);
      setChannels(true);
    }
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  };

  const handleMouseLeave = (type: string) => {
    switch (type) {
      case "donations":
        setTimeoutId(
          setTimeout(() => {
            setDonations(false);
            setTimeoutId(null); // Reset timeoutId
          }, 200)
        );
        break;
      case "company":
        setTimeoutId(
          setTimeout(() => {
            setCompany(false);
            setTimeoutId(null); // Reset timeoutId
          }, 200)
        );
        break;
      case "resources":
        setTimeoutId(
          setTimeout(() => {
            setResources(false);
            setTimeoutId(null); // Reset timeoutId
          }, 200)
        );
        break;
      case "services":
        setTimeoutId(
          setTimeout(() => {
            setServices(false);
            setTimeoutId(null); // Reset timeoutId
          }, 200)
        );
        break;
      default:
        break;
    }
  };  

  return (
    <nav className="flex flex-col justify-center items-center w-full border-none text-black p-2 relative">
      {/* Desktop Menu */}
      <div className="md:flex justify-between items-center hidden w-3/4">
        <Link href={`/`}>
          <Image
            src="/logo.png"
            alt="Cyber Genesis X Logo"
            width={150}
            height={50}
          />
        </Link>
        <ul className="flex gap-8">
          <li className="text-base font-semibold cursor-pointer hover:text-blue-500">
            <button
              onMouseEnter={() => handleMouseEnter("donations")}
              onMouseLeave={() => handleMouseLeave("donations")}
            >
              Donations
            </button>
          </li>
          <li className="text-base font-semibold cursor-pointer hover:text-blue-500">
            <button
              onMouseEnter={() => handleMouseEnter("company")}
              onMouseLeave={() => handleMouseLeave("company")}
            >
              Company
            </button>
          </li>
          <li className="text-base font-semibold cursor-pointer hover:text-blue-500">
            <button
              onMouseEnter={() => handleMouseEnter("resources")}
              onMouseLeave={() => handleMouseLeave("resources")}
            >
              Resources
            </button>
          </li>
          <li className="text-base font-semibold cursor-pointer hover:text-blue-500">
            <button
              onMouseEnter={() => handleMouseEnter("channels")}
              onMouseLeave={() => handleMouseLeave("channels")}
            >
              Channels
            </button>
          </li>
        </ul>
        <button className="bg-blue-600 px-4 py-2 text-white rounded-full text-base font-semibold hover:scale-105 duration-200 ease-in-out transition-transform">
          Contact Us
        </button>
      </div>

      {donations && (
        <div
          onMouseEnter={() => clearTimeout(timeoutId!)}
          onMouseLeave={() => setDonations(false)}
          className="p-2 absolute left-0 right-0 top-full z-50 bg-white flex flex-col gap-8 justify-center items-center place-self-center text-black w-3/4"
        >
          {donationLinks.map((link, index) => (
            <Link
              href={link.slug}
              key={index}
              className="hover:bg-sky-100 p-4"
              onClick={() => setDonations(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}

      {services && (
        <div
          onMouseEnter={() => clearTimeout(timeoutId!)}
          onMouseLeave={() => setCompany(false)}
          className="p-2 absolute left-0 right-0 top-full z-50 bg-white flex flex-col gap-8 justify-center items-center place-self-center text-black w-3/4"
        >
          {servicesLinks.map((link, index) => (
            <Link
              href={link.slug}
              key={index}
              className="hover:bg-sky-100 p-4"
              onClick={() => setServices(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}

      {resources && (
        <div
          onMouseEnter={() => clearTimeout(timeoutId!)}
          onMouseLeave={() => setResources(false)}
          className="p-2 absolute left-0 right-0 top-full z-50 bg-white flex flex-col gap-8 justify-center items-center place-self-center text-black w-3/4"
        >
          {resourcesLinks.map((link, index) => (
            <Link
              href={link.slug}
              key={index}
              className="hover:bg-sky-100 p-4"
              onClick={() => setResources(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}

      {company && (
        <div
          onMouseEnter={() => clearTimeout(timeoutId!)}
          onMouseLeave={() => setChannels(false)}
          className="p-2 absolute left-0 right-0 top-full z-50 bg-white flex flex-col gap-8 justify-center items-center place-self-center text-black w-3/4"
        >
          {companyLinks.map((link, index) => (
            <Link
              href={link.slug}
              key={index}
              className="hover:bg-sky-100 p-4"
              onClick={() => setChannels(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}

      {/* Mobile Menu */}
      <div className="md:hidden flex w-11/12 justify-between items-center relative py-4">
        <Link href={`/`}>
          <Image
            src="/assets/logo.png"
            alt="Al-khair logo"
            width={140}
            height={50}
          />
        </Link>
        <div className="flex items-center gap-2">
          <LuUser className="text-2xl" />
          <BsCart className="text-2xl" />
          <button onClick={() => setToggleMenu(true)}>
            <IoMenuOutline className="text-3xl" />
          </button>
        </div>
      </div>
      {toggleMenu && (
        <div
          className="z-[20] fixed -top-0 -right-0 w-full min-h-screen md:hidden list-none
      flex flex-col justify-between items-start bg-white animate-slide-in duration-200 ease-in-out text-black max-h-screen"
        >
          <div className="w-full">
            {/* Top toggle bar */}
            <div className="w-full flex justify-center items-center bg-[#294693] p-4">
              <div className="flex justify-between items-center w-11/12 py-4">
                <Link href={`/`}>
                  <Image
                    src="/assets/logo.png"
                    alt="Al-khair logo"
                    width={140}
                    height={50}
                  />
                </Link>
                <div className="flex items-center text-white gap-2">
                  <LuUser className="text-2xl" />
                  <BsCart className="text-2xl" />
                  <button onClick={() => setToggleMenu(false)}>
                    <IoMdClose className="text-3xl" />
                  </button>
                </div>
              </div>
            </div>

            {/* Search Bar */}
            <NavSearch />

            {/* Main navigation panel */}
            <ul className="px-6 py-4 w-full flex flex-col gap-4">
              <MobileDropdown
                name="Donations"
                list={donationLinks}
                setToggleMenu={setToggleMenu}
              />
              <MobileDropdown
                name="Company"
                list={companyLinks}
                setToggleMenu={setToggleMenu}
              />
              <MobileDropdown
                name="Resources"
                list={donationLinks}
                setToggleMenu={setToggleMenu}
              />
              <MobileDropdown
                name="Channels"
                list={donationLinks}
                setToggleMenu={setToggleMenu}
              />
              <li className="text-xl font-semibold">
                <Link href={`/contact-us`}>Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Navigation menu's footer */}
          <MobileNavFooter />
        </div>
      )}
    </nav>
  );
};

export default Navbar;