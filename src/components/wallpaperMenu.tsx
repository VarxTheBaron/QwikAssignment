import { component$ } from "@builder.io/qwik";
import { Wallpaper } from "~/data/wallpapers";
import styles from "./wallpaperMenu.module.css";
import WallpaperFooter from "./wallpaperFooter";

export default component$((props: { wallpaper: Wallpaper }) => {
  return (
    <aside class={styles.wallpaperMenu}>
      <h1>Image title: {props.wallpaper.title}</h1>
      <p>Category: {props.wallpaper.category}</p>
      <WallpaperFooter />
    </aside>
  );
});
