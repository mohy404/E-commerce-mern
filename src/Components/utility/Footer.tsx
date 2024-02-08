import React from 'react';
import { FaLaptop } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-4">
      <div className="container mx-auto flex flex-col items-center">
        <p className="text-lg font-medium mb-2">Created by Mohamed Mohy</p>
        <a 
          href="https://mohy-alpha.vercel.app/" 
          className="flex items-center justify-center text-blue-300 hover:text-blue-500 mb-2"
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaLaptop  className="mr-2" /> 
          Visit my Portfolio
        </a>
        <p className="text-sm">
          © {new Date().getFullYear()} All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
