import React, { useState } from 'react';
import { Input, Select, Space } from 'antd';
import useFilter from './hook'

import './style.scss';
import { useSelector } from 'react-redux';
import { contactSelector } from '../../redux/selector/selector';

export default function FilterBlock() {
  const [value, setValue] = useState();
  const dataContacts = useSelector(contactSelector)
  const { handleSearch, handleGender, handleNationality } = useFilter();

  const { Option } = Select;
  const { Search } = Input;

  const onSearch = value => console.log(value);

  const arrCountries = dataContacts && dataContacts.map((item) => item.location.country)
  const countries = arrCountries && arrCountries.reduce((array, item) => {
    if(!array.includes(item)) {
      return [...array, item]
    }
    return array
  },[])
  const options = [];
  countries && countries.map((value) => options.push({label: value, value}))  
  const selectProps = {
    mode: 'multiple',
    style: {
      width: '100%',
    },
    value,
    options,
    onChange: (newValue) => {
      setValue(newValue);
    },
    placeholder: 'Select Item...',
    maxTagCount: 'responsive',
  };  

  return (
    <div className="wraperFilterBlock">
       <Search placeholder="input search text" allowClear onSearch={onSearch} onChange={(e) => handleSearch(e.target.value)} style={{ width: 200 }} />
       <Select placeholder="gender" style={{ width: 120 }} allowClear onChange={handleGender}>
        <Option  value="male">male</Option>
        <Option value="female">female</Option>
      </Select>
      <Space direction="vertical" style={{ width: 320 }} onChange={handleNationality(value)}>
        <Select {...selectProps} />
      </Space>
    </div>
  );
}
