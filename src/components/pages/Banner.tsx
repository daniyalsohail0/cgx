import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex md:flex-row flex-col justify-between items-center md:w-3/4 h-[600px] my-5 gap-4">
        <div className="md:w-1/2 w-11/12 font-inter">
          <h1 className="md:text-5xl text-4xl font-bold uppercase text-gray-800 tracking-wide">
            High Assurance Custom Software Design & Development
          </h1>
          <p className="text-gray-600 my-6 md:w-3/5 w-full leading-8">
            For organizations looking to drive change, we deliver your
            technology vision.
          </p>
          <button className="bg-black text-white py-4 px-4 my-4 text-md font-semibold hover:opacity-70 duration-200 ease-in-out">
            Tell us about your project
          </button>
        </div>
        <div className="md:w-1/2 w-11/12 flex md:justify-end justify-center items-center h-full">
          <div className="relative bg-red-700 md:h-1/2 h-full w-1/6"></div>
          <Image
            src="/christina-wocintechchat-com-L85a1k-XqH8-unsplash (1).jpg"
            alt="work getting done"
            width={500}
            height={600}
            className="object-cover"
          />
        </div>
      </div>

      <div className="md:flex flex-col justify-center md:w-3/4 w-11/12 my-4">
        <p className="text-gray-500 font-semibold underline decoration-red-700 underline-offset-4 decoration-2 py-6">
          Our Facilitators
        </p>
        <div className="grid grid-cols-3 md:grid-cols-6 justify-between items-center gap-10">
          <Image src="/ibm.png" alt="ibm cloud" width={150} height={150} />
          <Image src="/aws.png" alt="aws cloud" width={150} height={150} />
          <Image src="/azure.png" alt="azure cloud" width={150} height={150} />
          <Image src="/gcp.png" alt="gcp cloud" width={150} height={150} />
          <Image src="/splunk.png" alt="splunk" width={150} height={150} />
          <Image src="/burpsuite.png" alt="burpsuite" width={150} height={150} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
