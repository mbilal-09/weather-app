"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import InputForm from "@/components/InputForm";
import Weather from "@/components/WeatherSection";
import store from "@/context/store";
import { Provider, useSelector } from "react-redux";
import Forcast from "@/components/Forcast";
import Astronomy from "@/components/Astronomy";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <DataProvider>
      <main
        className={`flex min-h-screen flex-col items-center text-white ${inter.className}`}
      >
        <div className="flex items-center">
          <img
            src="https://cdn.pixabay.com/photo/2013/04/01/09/22/warm-98532_1280.png"
            className="w-[100px] h-[100px] animate-[spin_5s_linear_infinite]"
            alt=""
          />
          <p className="my-10 text-[50px] font-bold	ms-5">Weather Forecast</p>
        </div>
        <InputForm />
        <Weather />
        <Forcast />
        <Astronomy />
      </main>
    </DataProvider>
  );
}

const DataProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
