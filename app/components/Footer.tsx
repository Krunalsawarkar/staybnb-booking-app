"use client";
import { FiHeart } from "react-icons/fi";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-200 py-4 relative bottom-0 left-0 top-[100%] w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          <div className="text-gray-600 text-center md:text-left">
            Staybnb {new Date().getFullYear()} © All rights reserved.
          </div>
          <div className="flex items-center mt-2 md:mt-0">
            <span className="mr-2">Made with</span>
            <div className="hidden md:block">
              <FiHeart className="text-red-500" />
            </div>
            <div className="md:hidden">
              <FiHeart className="text-red-500 inline-block align-middle" />
            </div>
            <span className="ml-2">by Krunal Sawarkar</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
