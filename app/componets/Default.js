import React from "react";
import "../globals.css"

const Default = () => {
  return (
    <>
      <div className="default flex flex-col text-[3.75rem] gap-5">
        <h1 className="text-[#00446A] font-bold text-[1em]">Weather Wizard</h1>
        <h1 className="text-[#00446A] font-semibold text-center text-[0.5em]">
          Search a City
        </h1>
      </div>
    </>
  );
};

export default Default;
