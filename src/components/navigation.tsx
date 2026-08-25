import { component$ } from "@builder.io/qwik";
import styles from "./navigation.module.css";

export default component$(() => {
  return (
    <nav class={styles.navigation}>
      <a href="/">
        <img src="/wallpapersLogoSmall.png" alt="Awesome wallpapers home" />
      </a>
      <a href="/favorites">Favorites</a>
      <a href="/random">Random</a>
    </nav>
  );
});
