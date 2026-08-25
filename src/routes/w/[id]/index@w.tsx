import { component$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import styles from "./index.module.css";
import WallpaperMenu from "../../../components/wallpaperMenu";
import { allWallpapers, type Wallpaper } from "~/data/wallpapers";

export default component$(() => {
  const currentLocation = useLocation();
  const id = Number(currentLocation.params.id);

  const wp: Wallpaper = allWallpapers[id - 1];

  return (
    <main class={styles.main}>
      <WallpaperMenu wallpaper={wp} />{" "}
      <img
        src={wp.imageURL}
        class={styles.displayedImage}
        alt={`Title: ${wp.title}, category: ${wp.category}`}
      />
    </main>
  );
});
