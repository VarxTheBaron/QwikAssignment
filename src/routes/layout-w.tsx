import { component$, Slot } from "@builder.io/qwik";
import Header from "../components/header";
import styles from "./layout-w.module.css";

export default component$(() => {
  return (
    <div class={styles.layout}>
      <Header></Header>
      <Slot />
    </div>
  );
});
