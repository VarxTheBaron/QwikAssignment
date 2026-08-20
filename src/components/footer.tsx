import { component$ } from "@builder.io/qwik";
import styles from "./footer.module.css";

export default component$(() => {
  return (
    <footer class={styles.footer_container}>
      <ul class={styles.footer_list}>
        {FooterItem("All images are AI generated.")}
        {FooterItem("© Jonas Persson 2026")}
      </ul>
    </footer>
  );
});

export const FooterItem = (text: string) => {
  return <li class={styles.footer_item}>{text}</li>;
};
