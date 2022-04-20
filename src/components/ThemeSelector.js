import React from "react";
import { useTheme } from "../hooks/useTheme";
import styles from "./ThemeSelector.module.css";
import { MdBrightnessMedium } from "react-icons/md";

const ThemeSelector = () => {
  const { changeColor, changeMode, mode } = useTheme();
  const themeColor = ["#58249c", "#249c6b", "#b70233"];
  const toggleMode = () => {
    if (mode === "dark") {
      changeMode("light");
    } else {
      changeMode("dark");
    }
  };
  return (
    <div className={styles["theme-selector"]}>
      <MdBrightnessMedium
        className={styles["mode-toggle"]}
        onClick={toggleMode}
        style={{color: mode === "dark" ? "white" : "black"}}
      />
      <div className={styles["theme-buttons"]}>
        {themeColor.map((color) => (
          <div
            key={color}
            onClick={() => changeColor(color)}
            style={{ background: color }}
          />
        ))}
      </div>
    </div>
  );
};

export default ThemeSelector;
