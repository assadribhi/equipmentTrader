import React from "react";

// Style
import { SearchBarStyle } from "../styles";

const SearchBar = (props) => {
  return (
    <SearchBarStyle
      placeholder="Search by Equipment"
      onChange={(event) => props.setQuery(event.target.value)}
    />
  );
};

export default SearchBar;
