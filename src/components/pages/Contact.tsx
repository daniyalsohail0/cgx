import React from "react";
import ContactForm from "./ContactForm";

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center md:w-3/4 w-11/12 py-16">
      <div className="md:flex flex-col gap-10 md:w-1/2 w-full hidden">
        <h1 className="text-4xl font-bold tracking-wide">Contact CGX</h1>
        <p className="text-gray-700 tracking-wide">
          We appreciate your interest in Cyber Genesis X. Whether you have a
          specific project in mind or would like to learn more about what we
          do, drop us a line below.
        </p>
        <p>
          <span className="font-semibold">Call us:</span>{" "}
          <span>(+44) 7467100942</span>
        </p>
        <p>
          <span className="font-semibold">Email us:</span>{" "}
          <span>team@cgx.co.uk</span>
        </p>
        <p>
          <span className="font-semibold">Visit us:</span>
          <br />
          Pop by our offices:
        </p>
        <p>
          <span className="font-semibold">Cyber Genesis X</span> <br /> 34
          Azalea Close <br />
          Barking
          <br />
          London
          <br />
          IG12BF
        </p>
        <div>
          <em>What happens after sending a message?</em>
          <ol className="list-decimal pl-6">
            <li>We'll email over an introductory pack straight away.</li>
            <li>One of our representatives will be in touch within 24 hours.</li>
          </ol>
        </div>
      </div>
      <div className="md:w-1/2 w-full m-2 p-8 shadow-xl rounded-xl">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
