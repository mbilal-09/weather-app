import React from "react";
import { useSelector } from "react-redux";

export default function Astronomy() {
  const data = useSelector((state) => state.weatherData.weatherData);
  const astronomy = data?.astronomy?.astronomy.astro;
  console.log("astronomy -->", data);
  let dayTime = '';
  if (astronomy?.is_sun_up === 1 && astronomy?.is_moon_up === 1) {
    dayTime = 'Evening';
  } else if (astronomy?.is_sun_up === 1) {
    dayTime = 'Day';
  } else {
    dayTime = 'Night';
  }

  return (
    <div className="flex justify-between items-center bg-gray-800 p-6 rounded-lg w-9/12 my-6">
      <span className="text-3xl w-[20%]">{dayTime}</span>
      <div className="w-[80%] flex justify-between items-center">
        <div className="text-center bg-gray-900 p-6 mx-1 rounded-lg">
          <p>Sun Rise</p>
          <span>{astronomy?.sunrise}</span>
        </div>
        <div className="text-center bg-gray-900 p-6 mx-1 rounded-lg">
          <p>Sun Set</p>
          <span>{astronomy?.sunset}</span>
        </div>
        <div className="text-center bg-gray-900 p-6 mx-1 rounded-lg">
          <p>Moon Rise</p>
          <span>{astronomy?.moonrise}</span>
        </div>
        <div className="text-center bg-gray-900 p-6 mx-1 rounded-lg">
          <p>Moon Set</p>
          <span>{astronomy?.moonset}</span>
        </div>
        <div className="text-center bg-gray-900 p-6 mx-1 rounded-lg">
          <p>Moon Phase</p>
          <span>{astronomy?.moon_phase}</span>
        </div>
      </div>
    </div>
  );
}
