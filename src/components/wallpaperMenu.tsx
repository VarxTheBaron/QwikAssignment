import { $, component$, useSignal } from "@builder.io/qwik";
import { Wallpaper } from "~/data/wallpapers";
import styles from "./wallpaperMenu.module.css";
import WallpaperFooter from "./wallpaperFooter";
import FavoriteButton from "./favoriteButton";
import { Link } from "@builder.io/qwik-city";

export default component$((props: { wallpaper: Wallpaper }) => {
  const favorited = useSignal(false);

  const onFavoriteStatusChange = $((newStatus: boolean) => {
    favorited.value = newStatus;
  });

  return (
    <aside class={styles.wallpaperMenu}>
      <h1 class={styles.menuItem}>Image title: {props.wallpaper.title}</h1>
      <p class={styles.menuItem}>Category: {props.wallpaper.category}</p>
      <FavoriteButton
        wallpaperId={props.wallpaper.id}
        onFavoriteToggle$={onFavoriteStatusChange}
      />
      {favorited.value && (
        <div>
          You can go to your <Link href="/favorites">Favorites</Link> to view
          this and all your other favorites.
        </div>
      )}
      <div class={styles.divider}></div>
      <WallpaperFooter />
    </aside>
  );
});
