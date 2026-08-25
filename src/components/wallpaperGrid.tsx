import { component$ } from "@builder.io/qwik";
import styles from "./wallpaperGrid.module.css";
import type { Wallpaper } from "~/data/wallpapers";
import WallpaperCard from "./wallpaperCard";

export default component$(
  (props: { wallpapers: Wallpaper[]; title: string }) => {
    return (
      <section class={styles.gridContainer}>
        <h2 class={styles.title}>{props.title}</h2>
        <div class={styles.wallpaperGrid}>
          {props.wallpapers.map((wp) => (
            <WallpaperCard key={wp.id} wallpaper={wp} />
          ))}
        </div>
      </section>
    );
  },
);
