import React from "react";
import { useState } from "react";
import { useSearchQuery } from "../../hooks/useSearchQuery";
import MovieItem from "../MovieItem/MovieItem";
import './searchBar.css'



const SearchBar = () => {
  const setQuery = useSearchQuery();

  const handleChange = (text) => {
    setQuery(text);
  };

  return (
    <div>
      
      <input className="searchBar"
        type="text"
        placeholder="Search..."s
        onChange={(e) => {
          handleChange(e.target.value);
        }}
      />
    </div>
  );
};

export default SearchBar;
