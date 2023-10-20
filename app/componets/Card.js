import Image from "next/image";
import React, { useState } from "react";
import "../globals.css";

const Card = React.memo(({ data }) => {
  const [celsius, setCelsius] = useState(true);

  const today = new Date();
  const dateFormatter = new Intl.DateTimeFormat("en-us", {
    dateStyle: "full",
  });

  const sunset = data.sys.sunset;
  const sunrise = data.sys.sunrise;
  const time = (timestamp) => {
    const date = new Date(timestamp * 1000);
    let hours = date.getHours();
    let minutes = "0" + date.getMinutes();
    return `${hours}:${minutes.substr(-2)}`;
  };

  const changeUnit = () => {
    setCelsius(!celsius);
  };

  const convertIntoCelsius = (F) => {
    return `${(((F - 32) * 5) / 9).toFixed(0)}`;
  };

  return (
    <>
      <section className="card h-[690px] w-[460px] overflow-hidden bg-[#355c7d] rounded-xl mt-16 text-white">
        <div className="w-full h-20 flex justify-center items-center text-[1.5rem] font-semibold">
          {data.name}, {data.sys.country}
        </div>
        <div className="w-full flex">
          <div className="image-container text-[1.25rem] brightness-180 w-1/2 flex flex-col justify-center items-center ">
            <Image
              src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
              alt="/"
              width={180}
              height={180}
            />
            <h1 className="text-[1em] font-semibold -mt-10">
              {data.weather[0].main}
            </h1>
          </div>
          <div className="main-temp w-1/2 h-50 flex justify-center items-center font-bold text-[6rem] -ml-2">
            {celsius === false ? (
              <h1>
                {data.main.temp.toFixed(0)}
                <span className="font-normal">&#176;F</span>
              </h1>
            ) : (
              <h1>
                {(((data.main.temp - 32) * 5) / 9).toFixed(0)}
                <span className="font-normal">&#176;C</span>
              </h1>
            )}
          </div>
        </div>
        {celsius === false ? (
          <div className="w-full h-8 mt-2 flex justify-end pr-8">
            <button onClick={changeUnit}>View in &#176;C</button>
          </div>
        ) : (
          <div className="w-full h-8 mt-2 flex justify-end pr-8">
            <button onClick={changeUnit}>View in &#176;F</button>
          </div>
        )}
        <section className="flex justify-center mt-3 items-center h-max">
          <div className="bg-[rgba(0,0,0,0.3)] cursor-pointer w-11/12 flex gap-8 p-6 flex-col rounded-lg h-full">
            <div className="bottom-header flex flex-col gap-3 text-[1.5rem]">
              <h1 className="text-[1em] text-center">Weather in {data.name}</h1>
              <h1 className="text-center text-[0.7em]">
                {dateFormatter.format(today)}
              </h1>
            </div>
            <div className="flex items-center justify-center w-full">
              <div className="bottom-divs text-center text-[2.25rem] w-1/3">
                {celsius === false ? (
                  <h1 className="text-[1em] relative font-semibold">
                    {data.main.feels_like.toFixed(0)}
                    <span className="text-[0.6em] absolute top-0">&#176;F</span>
                  </h1>
                ) : (
                  <h1 className="text-[1em] relative font-semibold">
                    {convertIntoCelsius(data.main.feels_like)}
                    <span className="text-[0.6em] absolute top-0">&#176;C</span>
                  </h1>
                )}
                <h1 className="text-[0.5em]">Feels Like</h1>
              </div>
              <div className="bottom-divs text-center text-[2.25rem] w-1/3">
                <h1 className="text-[1em] font-semibold">
                  {data.main.humidity}
                </h1>
                <h1 className="text-[0.5em]">Humidity</h1>
              </div>
              <div className="bottom-divs text-center text-[2.25rem] w-1/3">
                <h1 className="text-[1em] font-semibold">
                  {data.wind.speed.toFixed(0)}
                </h1>
                <h1 className="text-[0.5em]">Wind (mph)</h1>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="bottom-divs text-center text-[2.25rem] w-1/3">
                <h1 className="text-[1em] font-semibold">{time(sunrise)}</h1>
                <h1 className="text-[0.5em]">Sunrise</h1>
                <h1 className="text-[0.35em] -mt-1">PST</h1>
              </div>
              <div className="bottom-divs text-center text-[2.25rem] w-1/3">
                <h1 className="text-[1em] font-semibold">{time(sunset)}</h1>
                <h1 className="text-[0.5em]">Sunset</h1>
                <h1 className="text-[0.35em] -mt-1">PST</h1>
              </div>
              <div className="bottom-divs text-center text-[2.25rem] w-1/3">
                <h1 className="text-[1em] font-semibold">
                  {data.wind.gust ? data.wind.gust : 0}
                </h1>
                <h1 className="text-[0.5em]">Gust</h1>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
});

export default Card;
