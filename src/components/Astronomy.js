import React from "react";
import { useSelector } from "react-redux";

export default function Astronomy() {
  const data = useSelector((state) => state.weatherData.weatherData);
  const astronomy = data?.astronomy?.astronomy?.astro;

  return (
    <div className="flex justify-center items-center bg-gray-800 p-6 rounded-lg w-9/12 my-6">
      <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-2">
        <div className="text-center bg-gray-900 p-6 mx-1 rounded-lg md:col-span-1">
          <p>Sun Rise</p>
          <span>{astronomy?.sunrise}</span>
        </div>
        <div className="text-center bg-gray-900 p-6 mx-1 rounded-lg md:col-span-1">
          <p>Sun Set</p>
          <span>{astronomy?.sunset}</span>
        </div>
        <div className="text-center bg-gray-900 p-6 mx-1 rounded-lg md:col-span-1">
          <p>Moon Rise</p>
          <span>{astronomy?.moonrise}</span>
        </div>
        <div className="text-center bg-gray-900 p-6 mx-1 rounded-lg md:col-span-1">
          <p>Moon Set</p>
          <span>{astronomy?.moonset}</span>
        </div>
        <div className="text-center bg-gray-900 p-6 mx-1 rounded-lg sm:col-span-2 md:col-span-1">
          <p>Moon Phase</p>
          <span>{astronomy?.moon_phase}</span>
        </div>
      </div>
    </div>
  );
}
