import React from "react";

const SearchBar = ({searchText, setSearchText, handleSearch}) => {
  return (
    <form
      className="flex justify-center gap-4 text-gray-200 font-bold p-3"
      onSubmit={(event) => {
        event.preventDefault();
        handleSearch();
      }}
    >
      <label className="input">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input
          type="search"
          required
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </label>
      <button type="submit" className="btn btn-primary">search</button>
    </form>
  );
};

export default SearchBar;
