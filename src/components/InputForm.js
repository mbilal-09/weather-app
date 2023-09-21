"use client";
import React from "react";
import { Button, Form, Input, ConfigProvider, Select } from "antd";
import { useDispatch } from "react-redux";
import WEATHER_SEACRH from "../context/actions/weatherAction";
import { cities } from "../../public/cities/cities"


function InputForm() {
  const dispatch = useDispatch();
  const onChange = (value) => {
    let city;
    value ? city = value : city = 'karachi'
    dispatch(WEATHER_SEACRH(city));
  };

  const filterOption = (input, option) =>
  (option?.label ?? '').toLowerCase().includes(input.toLowerCase());
  
  return (
    <div className="mb-4">
      <Select
        showSearch
        placeholder="Select a person"
        optionFilterProp="children"
        onChange={onChange}
        filterOption={filterOption}
        options={[...cities]}
      />
    </div>
  );
}

export default InputForm;
