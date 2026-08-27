import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import styles from "./index.module.css";
import WallpaperGrid from "~/components/wallpaperGrid";
import { getFavoriteWallpapers } from "~/data/favorites";
import { type Wallpaper } from "~/data/wallpapers";

export default component$(() => {
  const favoriteWallpapers = useSignal<Wallpaper[]>([]);

  useVisibleTask$(() => {
    favoriteWallpapers.value = getFavoriteWallpapers();
  });

  return (
    <main class={styles.main}>
      {favoriteWallpapers.value.length > 0 && (
        <WallpaperGrid
          wallpapers={favoriteWallpapers.value}
          title="Favorites"
        />
      )}
    </main>
  );
});
