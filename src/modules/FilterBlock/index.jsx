import React from 'react';
import { Input, Select, Space } from 'antd';
import useFilter from './hook'
import './style.scss';

const options = [];

for (let i = 10; i < 36; i++) {
  const value = i.toString(36) + i;
  options.push({
    label: `Long Label: ${value}`,
    value,
  });
}

const { Option } = Select;
const { Search } = Input;

const onSearch = value => console.log(value);

export default function FilterBlock() {
  const { handleSearch, handleGender } = useFilter();
  const [value, setValue] = React.useState();
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
  console.log(options);

  return (
    <div className="wraperFilterBlock">
       <Search placeholder="input search text" allowClear onSearch={onSearch} onChange={(e) => handleSearch(e.target.value)} style={{ width: 200 }} />
       <Select placeholder="gender" style={{ width: 120 }} allowClear onChange={handleGender}>
        <Option  value="male">male</Option>
        <Option value="female">female</Option>
      </Select>
      <Space direction="vertical" style={{ width: 320 }}>
        <Select {...selectProps} />
      </Space>
    </div>
  );
}
