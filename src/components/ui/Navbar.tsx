"use client";

import React, { useState } from "react";
import { FaCloud } from "react-icons/fa";
import { FcAcceptDatabase, FcEngineering, FcPositiveDynamic } from "react-icons/fc";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { MdSecurity } from "react-icons/md";

const Navbar: React.FC = () => {
  const [services, setServices] = useState<boolean>(true);
  const [technologies, setTechnologies] = useState<boolean>(false);
  const [industry, setIndustry] = useState<boolean>(false);
  const [company, setCompany] = useState<boolean>(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  const handleMouseEnter = (type: string) => {
    if (type === "services") {
      setServices(true);
      setTechnologies(false);
      setIndustry(false);
      setCompany(false);
    } else if (type === "technologies") {
      setTechnologies(true);
      setServices(false);
      setIndustry(false);
      setCompany(false);
    } else if (type === "company") {
      setServices(false);
      setTechnologies(false);
      setIndustry(false);
      setCompany(true);
    } else if (type === "industry") {
      setServices(false);
      setTechnologies(false);
      setIndustry(true);
      setCompany(false);
    }
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  };

  const handleMouseLeave = (type: string) => {
    if (type === "services") {
      setTimeoutId(
        setTimeout(() => {
          setServices(true);
          setTimeoutId(null); // Reset timeoutId
        }, 200)
      );
    } else if (type === "technologies") {
      setTimeoutId(
        setTimeout(() => {
          setTechnologies(false);
          setTimeoutId(null); // Reset timeoutId
        }, 200)
      );
    }
  };

  return (
    <nav className="flex flex-col justify-center items-center relative w-full">
      <div className="hidden md:block my-6 w-3/4">
        <div className="flex justify-between items-center">
          <div>CGX</div>
          <ul className="flex items-center gap-4">
            <li
              className="cursor-pointer flex items-center gap-2 font-semibold"
              onMouseEnter={() => handleMouseEnter("services")}
              onMouseLeave={() => handleMouseLeave("services")}
            >
              Services
              {services ? <IoIosArrowDown /> : <IoIosArrowForward />}
            </li>
            <li
              className="cursor-pointer flex items-center gap-2 font-semibold"
              onMouseEnter={() => handleMouseEnter("technologies")}
              onMouseLeave={() => handleMouseLeave("technologies")}
            >
              Technologies
              {technologies ? <IoIosArrowDown /> : <IoIosArrowForward />}
            </li>
            <li
              className="cursor-pointer flex items-center gap-2 font-semibold"
              onMouseEnter={() => handleMouseEnter("industry")}
              onMouseLeave={() => handleMouseLeave("industry")}
            >
              Industries
              {industry ? <IoIosArrowDown /> : <IoIosArrowForward />}
            </li>
            <li
              className="cursor-pointer flex items-center gap-2 font-semibold"
              onMouseEnter={() => handleMouseEnter("company")}
              onMouseLeave={() => handleMouseLeave("company")}
            >
              Company
              {company ? <IoIosArrowDown /> : <IoIosArrowForward />}
            </li>
            <li className="font-semibold">Blogs</li>
            <li className="font-semibold">Career</li>
          </ul>
          <div>
            <button className="bg-blue-600 text-white px-3 py-2 rounded-full flex justify-center items-center gap-2 text-base hover:bg-blue-700 hover:gap-4 ease-in-out duration-200">
              Contact us
            </button>
          </div>
        </div>
        <div className="w-full border-t border-transparent"></div>
        {services && (
          <div
            className="p-2 absolute left-0 right-0 top-full z-50 bg-white flex justify-center items-center"
            onMouseEnter={() => clearTimeout(timeoutId!)}
            onMouseLeave={() => setServices(false)}
          >
            <div className="w-3/4 grid grid-cols-4">
              <div className="py-2 my-2">
                <h2 className="font-semibold flex gap-2 items-center">
                  <FcEngineering /> Engineering
                </h2>
                <ul className="grid gap-2 my-2">
                  <li className="hover:cursor-pointer hover:text-sky-300 ease-in-out duration-200">Web Applications</li>
                  <li>Mobile Applications</li>
                  <li>Software Application Development</li>
                  <li>Design & Implementation</li>
                  <li>Custom Software Development</li>
                </ul>
              </div>
              <div className="py-2 my-2">
                <h2 className="font-semibold flex gap-2 items-center">
                  <MdSecurity className="text-purple-400" /> Cyber Security
                </h2>
                <ul className="grid gap-2 my-2">
                  <li>Penetration Testing</li>
                  <li>Intrusion Detection and Prevention System</li>
                  <li>Incident Response</li>
                  <li>Identity and Access Management (IAM)</li>
                  <li>Security Compliance Review</li>
                  <li>IT Risk Management</li>
                </ul>
              </div>
              <div className="py-2 my-2">
                <h2 className="font-semibold flex gap-2 items-center">
                  <FaCloud className="text-sky-400" /> Cloud Consultation
                </h2>
                <ul className="grid gap-2 my-2">
                  <li>Infrastructure & Architecture Design</li>
                  <li>DevOps</li>
                  <li>Cloud Engineering</li>
                </ul>
              </div>
              <div className="py-2 my-2">
                <h2 className="font-semibold flex gap-2 items-center">
                  <FcPositiveDynamic /> Digital Marketing
                </h2>
                <ul className="grid gap-2 my-2">
                  <li>Search Engine Optimization</li>
                  <li>Branding & Campaign Design</li>
                  <li>Social Media Marketing</li>
                  <li>Product Design</li>
                </ul>
              </div>
            </div>
          </div>
        )}
        {technologies && (
          <div
            className="p-2 absolute left-0 right-0 top-full z-50 bg-white flex justify-center items-center bg-sky-400"
            onMouseEnter={() => clearTimeout(timeoutId!)}
            onMouseLeave={() => setTechnologies(false)}
          >
            technologies
          </div>
        )}
        {company && (
          <div
            className="p-2 absolute left-0 right-0 top-full z-50 bg-white flex justify-center items-center bg-sky-400"
            onMouseEnter={() => clearTimeout(timeoutId!)}
            onMouseLeave={() => setCompany(false)}
          >
            company
          </div>
        )}
        {industry && (
          <div
            className="p-2 absolute left-0 right-0 top-full z-50 bg-white flex justify-center items-center bg-sky-400"
            onMouseEnter={() => clearTimeout(timeoutId!)}
            onMouseLeave={() => setIndustry(false)}
          >
            industry
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
