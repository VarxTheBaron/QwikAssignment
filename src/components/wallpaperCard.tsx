import { component$ } from "@builder.io/qwik";
import styles from "./wallpaperCard.module.css";
import type { Wallpaper } from "~/data/wallpapers";

export default component$((props: { wallpaper: Wallpaper }) => {
  return (
    <article>
      <a href={`/w/${props.wallpaper.id}`} class={styles.wallpaperCard}>
        <img
          class={styles.wallpaperCardImage}
          src={props.wallpaper.imageURL}
          alt={`Title: ${props.wallpaper.title}, category: ${props.wallpaper.category}`}
        />
      </a>
    </article>
  );
});
