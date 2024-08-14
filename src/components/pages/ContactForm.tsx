"use client";
import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";

interface Country {
  name: {
    common: string;
  };
}

const ContactForm: React.FC = () => {
  const [fullName, setFullName] = useState<string>("");
  const [organizationName, setOrganizationName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [contactNumber, setContactNumber] = useState<string>("");
  const [organizationStrength, setOrganizationStrength] = useState<string>("");
  const [source, setSource] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // Add logic to handle form submission
    console.log("Form submitted:", {
      fullName,
      organizationName,
      email,
      selectedCountry,
      contactNumber,
      organizationStrength,
      source,
      message,
    });
  };

  return (
    <div>
      <h1 className="text-2xl">Speak with out team</h1>
      <form
        className="flex flex-col bg-white rounded-lg py-8"
        onSubmit={handleSubmit}
      >
        <label>Full Name</label>
        <input
          className="p-2 border-[1px] border-solid border-[#EEEDF0] rounded my-2"
          type="text"
          placeholder="John Doe"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <label>Organization Name</label>
        <input
          className="p-2 border-[1px] border-solid border-[#EEEDF0] my-2"
          type="text"
          placeholder="St. James School"
          value={organizationName}
          onChange={(e) => setOrganizationName(e.target.value)}
        />
        <label>Email</label>
        <input
          className="p-2 border-[1px] border-solid border-[#EEEDF0] my-2"
          type="email"
          placeholder="johndoe@stjameschool.org"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Contact Number</label>
        <input
          className="p-2 border-[1px] border-solid border-[#EEEDF0] my-2"
          type="number"
          placeholder="+44 7666 111199"
          value={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
        />
        <label>Message</label>
        <textarea
          className="p-2 border-[1px] border-solid border-[#EEEDF0] my-2"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <br />
        <button
          className="bg-black text-white py-3 px-2 ease-in-out duration-200 hover:opacity-70"
          type="submit"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
