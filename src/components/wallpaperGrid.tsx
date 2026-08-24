import { component$ } from "@builder.io/qwik";
import styles from "./wallpaperGrid.module.css";
import type { Wallpaper } from "~/data/wallpapers";
import WallpaperCard from "./wallpaperCard";

export default component$((props: { wallpapers: Wallpaper[] }) => {
  return (
    <section class={styles.wallpaperGrid}>
      {props.wallpapers.map((wp) => (
        <WallpaperCard key={wp.id} wallpaper={wp} />
      ))}
    </section>
  );
});
