import { component$, useStore } from "@builder.io/qwik";
import styles from "./searchBox.module.css";
import { useNavigate } from "@builder.io/qwik-city";

export default component$(() => {
  const formState = useStore({ query: "" });
  const navigate = useNavigate();

  return (
    <div class={styles.searchBoxContainer}>
      <form
        preventdefault:submit
        class={styles.form}
        onSubmit$={() =>
          navigate(
            encodeURI(`/search?q=${encodeURIComponent(formState.query)}`),
          )
        }
      >
        <label for="search">Search:</label>
        <input
          id="search"
          class={styles.searchField}
          type="search"
          placeholder="Category or title"
          onInput$={(event, element) => (formState.query = element.value)}
          value={formState.query}
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
