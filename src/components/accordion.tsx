import { component$, useSignal, Slot } from "@builder.io/qwik";
import styles from "./accordion.module.css";

interface Props {
  title: string;
}

export default component$((props: Props) => {
  const isOpen = useSignal<boolean>(false);

  console.log(isOpen.value);

  return (
    <section>
      <header
        onClick$={() => {
          isOpen.value = !isOpen.value;
          console.log(isOpen.value);
        }}
        class={styles.header}
      >
        {props.title}
        <span>❯</span>
      </header>
      {isOpen.value && <Slot />}
    </section>
  );
});
