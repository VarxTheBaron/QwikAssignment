import { component$ } from "@builder.io/qwik";
import styles from "./wallpaperFooter.module.css";

export default component$(() => {
  return (
    <footer class={styles.footer}>
      <WallpaperFooterItem text="All images are AI generated." />
      <WallpaperFooterItem text="© Jonas Persson 2026" />
      <p>
        <a href="/about">About this page</a>
      </p>
    </footer>
  );
});

export const WallpaperFooterItem = (props: { text: string }) => {
  return <p>{props.text}</p>;
};
