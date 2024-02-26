import React, { FC } from "react";
import Image from "next/image";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <div className="container mx-auto mt-8">
      <div className="grid grid-cols-2 gap-4">
        <div className="col">
          <div className="ml-[150px]">
            <p className="text-lg">
              <Image
                src="/assets/APRI.png"
                width={50}
                height={50}
                alt="Picture of owner Personal Website"
              />
            </p>
          </div>
        </div>

        <div className="col">
          <nav className="flex justify-end items-center p-4 mr-12">
            <div className="flex space-x-8">
              <a href="#" className="text-black hover:text-gray-300">
                Home
              </a>
              <a href="#" className="text-black hover:text-gray-300">
                My Project
              </a>
              <a href="#" className="text-black hover:text-gray-300">
                Contact
              </a>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
