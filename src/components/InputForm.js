"use client";
import React from "react";
import { Button, Form, Input, ConfigProvider } from "antd";
import { useDispatch } from "react-redux";
import WEATHER_SEACRH from "../context/actions/weatherAction";
function InputForm() {
  const dispatch = useDispatch();
  const onFinish = async (values) => {
    let city;
    // const Wresponse = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=cc3d39a94d2b49bc9ff63938230509&q=${city}&days=7&aqi=no&alerts=no`);
    // const Aresponse = await fetch(`https://api.weatherapi.com/v1/astronomy.json?key=cc3d39a94d2b49bc9ff63938230509&q=${city}&dt=2023-09-06`);
    // const weather = await Wresponse.json();
    // const astronomy = await Aresponse.json();
    // const weatherData = {
    //   weather,
    //   astronomy,
    // };
    values ? city = values.cityname : city = 'karachi'
    dispatch(WEATHER_SEACRH(city));
  };

  return (
    <div className="mb-4">
        <Form name="basic" layout="inline" className="items-center" onFinish={onFinish}>
          <Form.Item
            label=""
            name="cityname"
            rules={[
              {
                required: true,
                message: "Please input your city name!",
              },
            ]}
          >
            <Input className="bg-gray-800 border-0 p-2 text-white city-input" placeholder="City Name" />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button className="ms-[-20px] text-white" htmlType="submit">
              Search
            </Button>
          </Form.Item>
        </Form>
    </div>
  );
}

export default InputForm;
