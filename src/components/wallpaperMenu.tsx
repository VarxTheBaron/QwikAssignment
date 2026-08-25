import { component$ } from "@builder.io/qwik";
import { Wallpaper } from "~/data/wallpapers";
import styles from "./wallpaperMenu.module.css";
import WallpaperFooter from "./wallpaperFooter";
import FavoriteButton from "./favoriteButton";

export default component$((props: { wallpaper: Wallpaper }) => {
  return (
    <aside class={styles.wallpaperMenu}>
      <h1 class={styles.menuItem}>Image title: {props.wallpaper.title}</h1>
      <p class={styles.menuItem}>Category: {props.wallpaper.category}</p>
      <FavoriteButton wallpaperId={props.wallpaper.id} />
      <div class={styles.divider}></div>
      <WallpaperFooter />
    </aside>
  );
});
