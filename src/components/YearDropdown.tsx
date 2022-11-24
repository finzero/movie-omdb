import React from 'react';
import styled from 'styled-components';

const Select = styled.select`
  border: none;
  border-bottom: 2px solid #000000 !important;
  border-radius: 0 !important;
  color: #68717a;
  font-style: italic;
  @media (max-width: 425px) {
    font-size: 15px !important;
  }
`;

const YearDropdown = ({
  onSearchYear,
}: {
  onSearchYear: React.ChangeEventHandler<HTMLSelectElement>;
}) => {
  const currentYear = new Date().getFullYear();
  const yearData: number[] = [];
  for (let c = currentYear; c >= currentYear - 50; c--) {
    yearData.push(c);
  }

  return (
    <Select
      onChange={onSearchYear}
      name="year"
      id="year"
      className="form-control"
    >
      <option key={''} value={''}>
        All Year
      </option>
      {yearData.map((y) => (
        <option key={y} value={y}>
          {y}
        </option>
      ))}
    </Select>
  );
};

export default YearDropdown;
