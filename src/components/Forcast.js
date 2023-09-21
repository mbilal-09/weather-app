import React from "react";
import { useSelector } from "react-redux";

function Forcast() {
  const data = useSelector((state) => state.weatherData.weatherData);
  const forecast = data?.weather?.forecast?.forecastday;

  function getDate(date) {
    let d = new Date(date)
    let days =['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    return days[d.getDay()]
  }

  return (
    <div className="bg-gray-800 p-4 rounded-lg w-9/12 mt-6 grid md:grid-cols-3 gap-2">
        {forecast?.map((item, index) => {
            return(
        <div key={index} className="flex flex-col items-center justify-center bg-[#0B131E] p-4 rounded-lg h-44 md:col-span-1">
            <span>{getDate(item.date)}</span>
            <img src={item.day?.condition.icon} className="w-[50px] h-[50px] my-3"></img>
            <span className="text-center">{item.day?.condition?.text}</span>
        </div>
            )
        })}
    </div>
  );
}

export default Forcast;
