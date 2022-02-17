import React from "react";
import { Select } from "antd";

const { Option } = Select;

const Filter = ({
  value,
  onSelect,
  options,
}: {
  value?: string;
  onSelect: (text: string) => void;
  options: { value: string; name: string }[];
}): JSX.Element => {
  return (
    <Select defaultValue="" style={{ width: "100%" }} onChange={onSelect}>
      {options.map((item, index) => (
        <Option key={index} value={item.value}>
          {item.name}
        </Option>
      ))}
    </Select>
  );
};

export default Filter;
