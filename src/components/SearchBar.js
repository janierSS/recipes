import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  const [inputSearch, setInputSearch] = useState("");
  const history = useHistory()
  const submitHandler = (e) => {
    e.preventDefault();
    history.push(`/search?q=${inputSearch}`)
  };

  const inputSearchHandler = (e) => {
    setInputSearch(e.target.value);
  };

  return (
    <div className={styles.searchbar}>
      <form onSubmit={submitHandler}>
        <label htmlFor="search">Search:</label>
        <input
          type="text"
          id="search"
          value={inputSearch}
          onChange={inputSearchHandler}
          required
        />
      </form>
    </div>
  );
};

export default SearchBar;
