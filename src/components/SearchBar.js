import React from "react";

function SearchBar({ handleSearch, setIsChecked }) {

  const handleChange = (e) => {
    handleSearch(e.target.value)
  }

  const handleClick = (e) => {
    setIsChecked(e.target.checked)
  }

  return (
    <div className="search">
      <input
        onChange={handleChange}
        type="text"
        className="searchTerm" />
      <label for='sort'> Sort </label>
      <input type='checkbox' 
      name='sort'
      onClick={handleClick}
      />
    </div>
  );
}

export default SearchBar;
