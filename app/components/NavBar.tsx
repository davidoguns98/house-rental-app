import Image from "next/image";
import React from "react";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between p-3 px-12 shadow-md bg-[url('/navbarimage.avif')] bg-resize">
      <Image src="/hrapplogo.jpg" alt="logo" width={90} height={90} />
      <div className="hidden md:block">
        <p className="text-sm space-x-5">
          Become an Agent{" "}
          <span className="text-lg font-semibold text-blue-500">
            click here
          </span>
        </p>
      </div>

      <div>
        <button className="border-none px-5 py-2 bg-blue-400 rounded-full text-sm font-semibold hover:bg-blue-700 hover:text-white transistion-all cursor-pointer">
          Guest
        </button>
      </div>
    </div>
  );
};

export default NavBar;
