"use client";
import Card from "@/app/componets/Card";
import Default from "@/app/componets/Default";
import ErrorPage from "@/app/componets/ErrorPage";
import "./globals.css"
import axios from "axios";
import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { Oval } from "react-loader-spinner";

const page = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [isloading, setIsloading] = useState(null);
  const [error, setError] = useState(null);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

  const getWeather = async (e) => {
    e.preventDefault();
    setIsloading(true);
    try {
      const response = await axios.get(url);
      setWeather(response.data);
      setError(null);
    } catch (e) {
      setError(e);
    } finally {
      setIsloading(false);
      setCity("");
    }
  };

  return (
    <>
      <div className="main h-screen w-full flex justify-center items-center bg-slate-200 relative">
        <div className="absolute top-8 w-max h-12 bg-white flex items-center p-5 rounded-3xl">
          <form className="flex items-center bg-[#fff]" onSubmit={getWeather}>
            <input
              placeholder="Search City"
              className="search outline-none text-[#355c7d] w-80 font-semibold text-xl"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <button className="btn-icon font-bold text-[#355c7d] select-none text-[1.8rem]">
              <BsSearch />
            </button>
          </form>
        </div>

        {isloading === true ? (
          <Oval
            height={80}
            width={80}
            color="#355c7d"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#355c7d"
            strokeWidth={4}
            strokeWidthSecondary={4}
          />
        ) : isloading === false && error === null ? (
          <Card data={weather} />
        ) : 
        error ? (
          <ErrorPage error={error} />
        ) : (
          <Default />
        )}
      </div>
    </>
  );
};

export default page;
