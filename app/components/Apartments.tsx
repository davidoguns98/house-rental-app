import React from "react";
import Apartment from "./Apartment";

const Apartments = () => {
  return (
    <div>
      <h2 className="text-[32px] text-center mt-3 font-semibold">
        Trending Apartments
      </h2>
      <div className=" grid-cols-1  grid md:grid-cols-3">
        <Apartment />
        <Apartment />
        <Apartment />
      </div>
    </div>
  );
};

export default Apartments;
