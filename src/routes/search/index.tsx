import { component$ } from "@builder.io/qwik";
import styles from "./index.module.css";
import WallpaperGrid from "~/components/wallpaperGrid";
import { searchWallpapers } from "~/data/wallpapers";
import { DocumentHead, useLocation } from "@builder.io/qwik-city";

export default component$(() => {
  const currentLocation = useLocation();

  const query = currentLocation.url.searchParams.get("q") ?? "";
  if (!query) currentLocation.url.searchParams.set("q", "");

  const wallpapers = searchWallpapers(query);

  return (
    <main class={styles.main}>
      <p>{currentLocation.params.q}</p>
      {wallpapers.length > 0 ? (
        <WallpaperGrid wallpapers={wallpapers} title="Search result" />
      ) : (
        <p>No wallpapers found...</p>
      )}
    </main>
  );
});

export const head: DocumentHead = {
  title: "Search - Awesome Wallpapers",
  meta: [
    {
      name: "description",
      content: "View awesome wallpapers!",
    },
  ],
};
