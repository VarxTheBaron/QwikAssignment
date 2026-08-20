import { component$ } from "@builder.io/qwik";
import styles from "./footer.module.css";

export default component$(() => {
  return (
    <footer class={styles.footer_container}>
      All images are AI generated. © Jonas Persson 2026
    </footer>
  );
});
