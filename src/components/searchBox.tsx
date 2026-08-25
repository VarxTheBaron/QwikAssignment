import { component$ } from "@builder.io/qwik";
import styles from "./searchBox.module.css";

export default component$(() => {
  return (
    <div class={styles.searchBoxContainer}>
      <form action="/search" method="GET" class={styles.form}>
        <label for="search">Search:</label>
        <input
          id="search"
          class={styles.searchField}
          type="search"
          name="q"
          placeholder="Category or title"
        />
        <button
          type="submit"
          class={styles.searchBoxMagnifyingGlass}
          aria-label="Search"
        >
          🔍
        </button>
      </form>
    </div>
  );
});
