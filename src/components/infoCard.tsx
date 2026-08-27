import { component$ } from "@builder.io/qwik";
import styles from "./infoCard.module.css";

interface Props {
  title: string;
  text: string;
}

export default component$((props: Props) => {
  return (
    <section class={styles.infoCard}>
      <h2>{props.title}</h2>
      <p>{props.text}</p>
    </section>
  );
});
