import Logo from "@/socialIcons/Logo";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href="/">
            <div className=" rounded-full object-cover flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer size-16">
              <Logo />
            </div>
          </Link>
          <nav className="md:ml-auto flex flex-wrap gap-5 items-center text-base justify-center">
            <Link href="/">
              <span className="mr-5 hover:text-primary-600 text-primary-900 font-pop font-medium cursor-pointer ">
                Home
              </span>
            </Link>
            <a className="mr-5 hover:text-primary-600 text-primary-900 font-pop font-medium cursor-pointer ">
              Second Link
            </a>
            <a className="mr-5 hover:text-primary-600 text-primary-900 font-pop font-medium cursor-pointer ">
              Third Link
            </a>
            <a className="mr-5 hover:text-primary-600 text-primary-900 font-pop font-medium cursor-pointer ">
              Fourth Link
            </a>
          </nav>
          <Link href="sign-in">
            <button className="hover:bg-primary-700 font-pop font-medium hover:border-primary-700 hover:text-white text-black-100 cursor-pointer rounded-md border border-black px-3 py-1.5">
              Sign In
            </button>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
