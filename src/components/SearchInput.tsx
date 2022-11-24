import React from 'react';
import styled from 'styled-components';

interface ISearchInputProp {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const Input = styled.input`
  border: none;
  border-bottom: 2px solid #000000 !important;
  border-radius: 0 !important;
  font-style: italic;

  @media (max-width: 425px) {
    font-size: 15px !important;
  }
`;

const SearchInput = ({ onChange }: ISearchInputProp) => {
  return (
    <Input
      className="form-control"
      type="text"
      name="search"
      id="search"
      placeholder="Search Movie Title"
      onChange={onChange}
    />
  );
};

export default SearchInput;
