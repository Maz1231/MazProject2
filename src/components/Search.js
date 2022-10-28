import React from "react";

function Search({ searchTerm, onChangeSearch }) {
  function handleChange(event) {
    onChangeSearch(event.target.value);
  }

  return (
    <div className="search">
      <div className="search-input">
        <input className="prompt" value={searchTerm} onChange={handleChange} />
        <i className="search-icon" />
      </div>
    </div>
  );
}

export default Search;