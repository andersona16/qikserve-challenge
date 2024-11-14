import React from "react";
import { FaSearch } from "react-icons/fa";
import { InputStyled, IconWrapper } from "./styles";

const InputList: React.FC<{ onSearch: (query: string) => void }> = ({
  onSearch,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <InputStyled>
      <IconWrapper>
        <FaSearch size={20} color="#8a94a4" />
      </IconWrapper>
      <input
        type="text"
        placeholder="Search menu items"
        onChange={handleChange}
      />
    </InputStyled>
  );
};

export default InputList;
