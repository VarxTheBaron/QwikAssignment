import { component$ } from "@builder.io/qwik";
import styles from "./header.module.css";
import SearchBox from "./SearchBox";

export default component$(() => {
  return (
    <header class={styles.headerContainer}>
      <div>
        <a href="/">
          <img src="/wallpapersLogoSmall.png" alt="Company Logo" />
        </a>
        <div class={styles.navigation}>
          <a href="/favorites">
            <span>Favorites</span>
          </a>
          <a href="/random">
            <span>Random</span>
          </a>
        </div>
      </div>
      <SearchBox></SearchBox>
    </header>
  );
});
