import React from "react";
import { Select } from "antd";

const { Option } = Select;

const Filter = ({
  value,
  onSelect,
  options,
  disabled,
}: {
  value?: string | number;
  onSelect: (text: any) => void;
  options: { value: string | number; name: string | number }[];
  disabled?: boolean;
}): JSX.Element => {
  return (
    <Select
      disabled={disabled}
      defaultValue={value}
      style={{ width: "100%" }}
      onChange={onSelect}
    >
      {options.map((item, index) => (
        <Option key={index} value={item.value}>
          {item.name}
        </Option>
      ))}
    </Select>
  );
};

export default Filter;
