import React from "react";
import { Input } from "antd";
const { Search } = Input;

const SearchBox = () => {
  return (
    <>
      <Search
        placeholder="検索"
        onSearch={(value) => alert(value)}
        style={{ width: 595 }}
      />
    </>
  );
};

export default SearchBox;
