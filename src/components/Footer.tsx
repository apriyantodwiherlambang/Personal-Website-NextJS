import Link from "next/link";
import React, { FC } from "react";
import { AiFillGithub, AiOutlineLinkedin } from "react-icons/ai";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className="flex flex-col items-center bg-neutral-200 text-center text-black dark:bg-neutral-700 dark:text-neutral-200">
      <div className="container pt-9">
        <div className="mb-9 flex justify-center">
          <div className="flex items-center">
            <Link href="#!" className="mr-4" passHref>
              <AiOutlineLinkedin className="w-8 h-8" />
            </Link>
            <Link href="#!" passHref>
              <AiFillGithub className="w-8 h-8" />
            </Link>
          </div>
        </div>
       
      </div>
      <p className="w-full bg-neutral-300 text-center p-4 dark:bg-neutral-700 m-0">
              © 2023 Copyright:
              <span className="text-neutral-800 dark:text-neutral-400">
                Apriyanto Dwi Herlambang
              </span>
            </p>

    </footer>
  );
};

export default Footer;
