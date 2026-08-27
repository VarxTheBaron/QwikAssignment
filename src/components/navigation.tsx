import { component$ } from "@builder.io/qwik";
import styles from "./navigation.module.css";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <nav class={styles.navigation}>
      <Link href="/">
        <img src="/wallpapersLogoSmall.png" alt="Awesome wallpapers home" />
      </Link>
      <Link href="/favorites">Favorites</Link>
      <Link href="/random">Random</Link>
    </nav>
  );
});
