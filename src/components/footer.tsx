import { component$ } from "@builder.io/qwik";
import styles from "./footer.module.css";

export default component$(() => {
  return (
    <footer class={styles.footerContainer}>
      <ul class={styles.footerList}>
        {FooterItem("All images are AI generated.")}
        {FooterItem("© Jonas Persson 2026")}
        <a href="./about">{FooterItem("About this page")}</a>
      </ul>
    </footer>
  );
});

export const FooterItem = (text: string) => {
  return <li class={styles.footerItem}>{text}</li>;
};
