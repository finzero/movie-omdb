import React from 'react';
import styled from 'styled-components';
import SearchInput from '../components/SearchInput';
import YearDropdown from '../components/YearDropdown';

interface HeaderProps {
  onSearchTitle: React.ChangeEventHandler<HTMLInputElement>;
  onSearchYear: React.ChangeEventHandler<HTMLSelectElement>;
}

const MovieSearchBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: rgb(255, 255, 255);
  width: 100%;
  display: flex;
  align-items: center;
  padding: 15px;
  box-shadow: 0 4px 4px #00000040;
  z-index: 2;
`;

const Header = ({ onSearchTitle, onSearchYear }: HeaderProps) => {
  return (
    <MovieSearchBar>
      <div className="row w-100">
        <div className="col-7">
          <SearchInput onChange={onSearchTitle} />
        </div>
        <div className="col-5">
          <YearDropdown onSearchYear={onSearchYear} />
        </div>
      </div>
    </MovieSearchBar>
  );
};

export default React.memo(Header);
