import { component$, useStore, useVisibleTask$ } from "@builder.io/qwik";
import styles from "./index.module.css";
import WallpaperGrid from "~/components/wallpaperGrid";
import { getFavoriteWallpapers } from "~/data/favorites";
import { type Wallpaper } from "~/data/wallpapers";
import { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  const favoriteWallpapers = useStore<Wallpaper[]>([]);

  useVisibleTask$(() => {
    favoriteWallpapers.push(...getFavoriteWallpapers());
  });

  return (
    <main class={styles.main}>
      {favoriteWallpapers.length > 0 && (
        <WallpaperGrid wallpapers={favoriteWallpapers} title="Favorites" />
      )}
    </main>
  );
});

export const head: DocumentHead = {
  title: "Favorites - Awesome Wallpapers",
  meta: [
    {
      name: "description",
      content: "View your favorited awesome wallpapers.",
    },
  ],
};
