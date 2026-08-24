import { component$ } from "@builder.io/qwik";
import styles from "./searchBox.module.css";

export default component$(() => {
  return (
    <div class={styles.searchBoxContainer}>
      <form action="/search" method="GET">
        <input
          class={styles.searchField}
          type="search"
          name="q"
          placeholder="Search..."
        />
        <button type="submit">🔍</button>
      </form>
    </div>
  );
});
