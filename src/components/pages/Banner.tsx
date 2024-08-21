import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="flex flex-col justify-center items-center">

      <div className="flex flex-col justify-center items-center md:w-3/4 md:my-32 my-16">

        <h1 className="md:text-5xl text-3xl text-center font-bold leading-relaxed my-8 p-2">
          Deliver software solutions that drive change{" "}
          <span className="bg-sky-200 rounded">months faster</span>
        </h1>
      
        <p className="my-8 text-center md:text-base md:w-2/3 text-sm p-2">
          We help technology-first companies deliver software and business value
          faster by bringing in best development practices and skills that
          unblock in-house teams.
        </p>

        <div className="md:flex flex-col justify-center items-center md:w-3/4 w-11/12 my-8">
          <div className="grid grid-cols-3 md:grid-cols-6 justify-between items-center gap-10">
            <Image src="/ibm.png" alt="ibm cloud" width={150} height={150} />
            <Image src="/aws.png" alt="aws cloud" width={150} height={150} />
            <Image
              src="/azure.png"
              alt="azure cloud"
              width={150}
              height={150}
            />
            <Image src="/gcp.png" alt="gcp cloud" width={150} height={150} />
            <Image src="/splunk.png" alt="splunk" width={150} height={150} />
            <Image
              src="/burpsuite.png"
              alt="burpsuite"
              width={150}
              height={150}
            />
          </div>
        </div>

        <button className="bg-blue-600 text-white px-6 py-3 rounded-full flex justify-center items-center gap-2 text-base hover:bg-blue-700 hover:gap-4 ease-in-out duration-200">
          Learn more
          <FaArrowRight />
        </button>
      
      </div>
      
    </div>
  );
};

export default Banner;
