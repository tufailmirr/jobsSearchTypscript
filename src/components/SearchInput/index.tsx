import React from "react";
import { Input, Space } from "antd";
import { AudioOutlined } from "@ant-design/icons";
const { Search } = Input;

const SearchInput = ({
  label,
  text,
  onTextChange,
}: {
  label?: string;
  text?: string;
  onTextChange: (text: string) => void;
}): JSX.Element => {
  return (
    <div>
      {text}
      <Search
        placeholder="Search Some Jobs Here"
        onSearch={(text: string) => {
          onTextChange("svsdv");
        }}
        onChange={(event: React.FormEvent<HTMLInputElement>) => {
          onTextChange(event.currentTarget.value);
        }}
        enterButton
      />
    </div>
  );
};

export default SearchInput;
