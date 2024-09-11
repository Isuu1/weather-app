import React from "react";
import styles from "./Header.module.scss";

//Icons
import { TiWeatherSunny } from "react-icons/ti";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className={styles.header}>
      Weather App <TiWeatherSunny className={styles.header__icon} />
    </header>
  );
}
