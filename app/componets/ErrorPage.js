import React from "react";
import "../globals.css"
import { MagnifyingGlass } from "react-loader-spinner";

const ErrorPage = React.memo(() => {
  return (
    <div className="error flex text-[2.25rem] flex-col gap-6">
      <div className="error-animate w-[400px] flex justify-center">
        <MagnifyingGlass
          visible={true}
          height="150"
          width="150"
          ariaLabel="MagnifyingGlass-loading"
          wrapperStyle={{}}
          wrapperClass="MagnifyingGlass-wrapper"
          glassColor="#c0efff"
          color="#00446A"
        />
      </div>
      <h1 className="text-[1em] font-bold text-[#00446A]">
        Could'nt Find Your City
      </h1>
    </div>
  );
});

export default ErrorPage;
