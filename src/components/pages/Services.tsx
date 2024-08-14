import React from "react";
import { IoLockClosedSharp } from "react-icons/io5";
import { AiOutlineSecurityScan } from "react-icons/ai";
import { FaNetworkWired } from "react-icons/fa6";
import { FcApproval } from "react-icons/fc";

// Define the types for the ServiceCard props
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Services: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="w-11/12 md:w-3/4 my-10">
        <div className="border-b-[1px] border-gray-200 w-full"></div>

        <div className="my-16 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            Why Work with Us?
          </h1>
          <div className="my-6 flex flex-col md:flex-row gap-10 justify-center items-center">
            <p className="flex items-center gap-4 text-lg md:text-xl leading-snug">
              <span className="text-4xl font-bold md:text-5xl">50+</span>
              Delivered Software Projects
            </p>
            <p className="flex items-center gap-4 text-lg md:text-xl leading-snug">
              <span className="text-4xl font-bold md:text-5xl">100%</span>
              Efficiency Rate
            </p>
            <p className="flex items-center gap-4 text-lg md:text-xl leading-snug">
              <IoLockClosedSharp className="text-4xl md:text-5xl" />
              Highly Accredited Security
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center py-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold uppercase text-gray-800 tracking-wide">
              Secure Your Infrastructure
            </h1>
            <p className="mt-4 md:text-lg text-md text-gray-600 leading-relaxed max-w-2xl mx-auto">
              We offer comprehensive IT services designed to help you build a
              stronger, more secure IT environment. Protect your business with
              our expert solutions.
            </p>
          </div>
        </div>

        <div className="py-12 flex flex-col justify-center items-center">
          <div className="blue-glassmorphism text-white px-6 py-3 m-8 text-center text-sm md:text-base rounded-md tracking-widest">
            OUR SERVICES
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
