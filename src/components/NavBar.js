import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import { GiNinjaHead } from "react-icons/gi";
import SearchBar from "./SearchBar";
import { useTheme } from "../hooks/useTheme";

const NavBar = () => {
  const { color } = useTheme();

  return (
    <div className={styles.navbar} style={{ background: color }}>
      <nav>
        <Link to="/" className={styles.brand}>
          <GiNinjaHead className={styles.icon} />
          <h1>Cooking Ninja</h1>
        </Link>
        <SearchBar></SearchBar>
        <Link to="/create">Create Recipe</Link>
      </nav>
    </div>
  );
};

export default NavBar;
