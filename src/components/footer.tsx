import { component$ } from "@builder.io/qwik";
import styles from "./footer.module.css";

export default component$(() => {
  return (
    <footer class={styles.footerContainer}>
      <ul class={styles.footerList}>
        <FooterItem text="All images are AI generated." />
        <FooterItem text="© Jonas Persson 2026" />
        <li class={styles.footerItem}>
          <a href="/about">About this page</a>
        </li>
      </ul>
    </footer>
  );
});

export const FooterItem = (props: { text: string }) => {
  return <li class={styles.footerItem}>{props.text}</li>;
};
