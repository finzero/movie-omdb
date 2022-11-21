import React, { ChangeEventHandler } from 'react';

interface HeaderProps {
  onSearchTitle: ChangeEventHandler<HTMLInputElement>;
  onSearchYear: ChangeEventHandler<HTMLSelectElement>;
}

export default function Header({ onSearchTitle, onSearchYear }: HeaderProps) {
  const currentYear = new Date().getFullYear();
  const yearData: number[] = [];
  for (let c = currentYear; c >= currentYear - 50; c--) {
    yearData.push(c);
  }

  return (
    <div className="movie-searchbar">
      <div className="row w-100">
        <div className="col-7">
          <input
            className="form-control col-md-5"
            type="text"
            name="search"
            id="search"
            placeholder="Search Movie Title"
            onChange={onSearchTitle}
          />
        </div>
        <div className="col-5">
          <select
            onChange={onSearchYear}
            name="year"
            id="year"
            className="col-md-2 form-control"
          >
            <option key={''} value={''}>
              All Year
            </option>
            {yearData.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
