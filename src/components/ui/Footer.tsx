import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white py-8 px-4">
      <div className="md:w-3/4 w-11/12 mx-auto flex flex-col md:flex-row justify-between">
        {/* Company Info */}
        <div className="mb-8 md:mb-0">
          <h2 className="text-2xl font-bold mb-4">Cyber Genesis X</h2>
          <p className="mb-4">
            34 Azelea Close, Barking, IG1 2BF
          </p>
          <p className="mb-4">
            <a href="tel:+447467100942" className="hover:underline">+44 (7467) 100-942</a>
          </p>
          <p>
            <a href="mailto:team@cgx.co.uk" className="hover:underline">team@cgx.co.uk</a>
          </p>
        </div>

        {/* Quick Links */}
        {/* <div className="mb-8 md:mb-0">
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:underline">Home</a>
            </li>
            <li>
              <a href="/about" className="hover:underline">About Us</a>
            </li>
            <li>
              <a href="/services" className="hover:underline">Services</a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">Contact</a>
            </li>
          </ul>
        </div> */}

        {/* Social Media */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
              <FaFacebookF className="text-2xl" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
              <FaTwitter className="text-2xl" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
              <FaLinkedinIn className="text-2xl" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
              <FaInstagram className="text-2xl" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-8 border-t border-gray-700 pt-4">
        <p>&copy; {new Date().getFullYear()} Cyber Genesis X. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
