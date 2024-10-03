import React from "react";

const Hero = () => {
  return (
    <section className=" relative bg-[url('/hero1.jpg')] w-full h-[85vh] bg-contain px-10 p-5">
      <div className="flex items-center justify-center">
        <h2 className="font-semibold text-[40px] px-10 ">
          Get the most suitable apartment
          <br /> within your budget.
        </h2>
      </div>
      <div className="flex justify-center absolute bottom-10 left-[50%] right-[50%] items-center">
        <input
          type="text"
          placeholder="Search for your preffered Area"
          className="min-w-[500px] border-none outline-none ring-offset-4 ring-offset-purple-300 px-3 rounded-md md:w-[70%] h-[42px]"
        />
        <button className="px-5 py-3 ml-[-4px] rounded-md hover:bg-blue-400 transition-all bg-blue-500 text-white">
          Search
        </button>
      </div>
    </section>
  );
};

export default Hero;
