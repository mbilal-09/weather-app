'use client'
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CloudFilled, EyeFilled } from "@ant-design/icons"

export default function Weather() {
  const data = useSelector((state) => state.weatherData.weatherData);
  const current = data.weather?.current;
    
  return (
    <div className="bg-gray-800 p-6 rounded-lg w-9/12 grid grid-cols-1 lg:grid-cols-5">
      <div className="flex items-center col-span-1 lg:col-span-2 xl:col-span-3 mb-4 sm:mb-0 pb-2 sm:pb-0 border-b-[0.5px] sm:border-b-[0px] border-[#646464]">
        <div>
          <img
            src={current?.condition.icon}
            className="w-[100px] h-[100px] me-5"
            alt=""
          />
        </div>
        <div className="text-white">
          <span>{data.weather?.location?.name}, {data.weather?.location?.country}</span>
          <h1 className="text-6xl">{current?.temp_c}°C</h1>
          <span>{current?.condition.text}</span>
        </div>
      </div>
      <div className="col-span-1 lg:col-span-3 xl:col-span-2 grid grid-cols-1 sm:grid-cols-2">
        <div className="sm:me-5 sm:border-r-[0.5px] sm:pe-5 border-[#646464] col-span-1">
          <div className="flex justify-between p-1"><span><CloudFilled className="w-[16px] h-[10px] me-1" /> Cloud</span><span className="ms-3">{current?.cloud}%</span></div>
          <div className="flex justify-between p-1"><span className="flex items-center"><img src="https://cdn.pixabay.com/photo/2014/04/02/10/57/water-305029_1280.png" className="w-[12px] h-[16px] inline me-2" alt="" /> Humidity</span><span className="ms-3">{current?.humidity}%</span></div>
          <div className="flex justify-between p-1"><span className="flex items-center"><img width="16" height="23" className="me-1" src="https://img.icons8.com/ios-filled/50/FFFFFF/wind--v1.png"/> Wind Speed</span><span className="ms-3">{current?.wind_kph}kph</span></div>
        </div>
        <div className="col-span-1">
          <div className="flex justify-between p-1"><span><EyeFilled className="w-[16px] h-[10px] me-1" /> Visibility</span><span className="ms-3">{current?.vis_km}km</span></div>
          <div className="flex justify-between p-1"><span><img className="w-[16px] h-[18px] inline me-1" src="https://img.icons8.com/sf-black-filled/64/FFFFFF/temperature.png"/> Feels Like</span><span className="ms-3">{current?.feelslike_c}°C</span></div>
          <div className="flex justify-between p-1"><span><img className="w-[16px] h-[18px] inline me-1" src="https://img.icons8.com/external-kmg-design-glyph-kmg-design/32/FFFFFF/external-wind-direction-weather-kmg-design-glyph-kmg-design.png"/> Wind Direction</span><span className="ms-3">{current?.wind_dir}</span></div>
        </div>
      </div>
    </div>
  );
};
