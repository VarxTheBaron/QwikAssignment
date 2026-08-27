import { component$ } from "@builder.io/qwik";
import styles from "./footer.module.css";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <footer class={styles.footerContainer}>
      <ul class={styles.footerList}>
        <FooterItem text="All images are AI generated." />
        <FooterItem text="© Jonas Persson 2026" />
        <li class={styles.footerItem}>
          <Link href="/about">About this page</Link>
        </li>
      </ul>
    </footer>
  );
});

export const FooterItem = (props: { text: string }) => {
  return <li class={styles.footerItem}>{props.text}</li>;
};
