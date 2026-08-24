import { component$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import styles from "./index.module.css";

export default component$(() => {
  const currentLocation = useLocation();

  const image = (
    <img
      src={`/wallpapers/wall${currentLocation.params.id}.png`}
      class={styles.displayedImage}
    />
  );

  return <main class={styles.main}>{image}</main>;
});
