import { component$, useSignal, Slot } from "@builder.io/qwik";
import styles from "./accordion.module.css";

interface Props {
  title: string;
}

export default component$((props: Props) => {
  const isOpen = useSignal<boolean>(false);

  return (
    <section class={styles.section}>
      <header
        onClick$={() => (isOpen.value = !isOpen.value)}
        class={styles.header}
      >
        {props.title}
        <span
          class={[
            styles.accordionIcon,
            isOpen.value && styles.accordionIconOpen,
          ]}
        >
          ❯
        </span>
      </header>
      {isOpen.value && (
        <div class={styles.content}>
          <Slot />
        </div>
      )}
    </section>
  );
});
