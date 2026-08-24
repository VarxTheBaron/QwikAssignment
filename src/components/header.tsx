import { component$ } from "@builder.io/qwik";
import styles from "./header.module.css";
import SearchBox from "./searchBox";
import Navigation from "./navigation";

export default component$(() => {
  return (
    <header class={styles.headerContainer}>
      <Navigation />
      <SearchBox></SearchBox>
    </header>
  );
});
