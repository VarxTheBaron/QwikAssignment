import { component$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import styles from "./index.module.css";
import WallpaperMenu from "../../../components/wallpaperMenu";
import { allWallpapers, Wallpaper } from "~/data/wallpapers";

export default component$(() => {
  const currentLocation = useLocation();
  const id = Number(currentLocation.params.id);

  const wp: Wallpaper = allWallpapers[id - 1];

  const image = (
    <img
      src={`/wallpapers/wall${currentLocation.params.id}.png`}
      class={styles.displayedImage}
    />
  );

  return (
    <main class={styles.main}>
      <WallpaperMenu wallpaper={wp} />
      {image}
    </main>
  );
});
