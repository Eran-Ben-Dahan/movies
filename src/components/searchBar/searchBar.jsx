import React from "react";
import { useSearchQuery } from "../../hooks/useSearchQuery";
import './searchBar.css'

const SearchBar = () => {
  const setQuery = useSearchQuery();

  const handleChange = (text) => {
    setQuery(text);
  };

  return (
    <div className="main_searchBar">
      
      <input className="searchBar"
        type="text"
        placeholder="Search.."
        onChange={(e) => {
          handleChange(e.target.value);
        }}
      />
    </div>
  );
};

export default SearchBar;
