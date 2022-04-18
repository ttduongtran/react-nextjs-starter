import React from "react";
import Image from "next/image"
import Logo from './duong1.svg'

const Topbar = () => (
  <header className="sticky top-0 z-30 bg-opacity-50 h-[72px] bg-gray-900 backdrop-filter backdrop-blur firefox:bg-opacity-90">
    <div className="max-w-8xl mx-auto xl:px-8">
      <div className="flex items-center justify-between px-4 py-5 border-b lg:px-8 sm:px-6 xl:px-0 border-gray-800">
        <a className="flex justify-content-center items-center" href="/react">
          <Image className="h-8 w-8" width={30} height={30} src={Logo} alt="" />
          <span className="pl-2 dark:text-white font-bold">Duong TT</span>
        </a>
        <div className="menu-items">
          <a className="ml-8 font-medium dark:text-white" href="#!">Home</a>
          <a className="ml-8 font-medium dark:text-white" href="#case-studies">Case Studies</a>
          <a className="ml-8 font-medium dark:text-white" href="#blogs">Experiments</a>
          <a className="ml-8 font-medium dark:text-white" href="#blogs">Blogs</a>
        </div>
        <div className="socials">
          <a className="text-gray-400 hover:text-white" href="">
            <span className="sr-only">GitHub repository</span>
          </a>
          <a className="text-gray-400 hover:text-white" href="">
            <span className="sr-only">Linked in</span>
          </a>
        </div>
      </div>
    </div>
  </header>
);


export default Topbar;
