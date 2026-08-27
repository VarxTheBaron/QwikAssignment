import { component$ } from "@builder.io/qwik";
import {
  type DocumentHead,
  routeLoader$,
  useLocation,
} from "@builder.io/qwik-city";
import styles from "./index.module.css";
import WallpaperMenu from "../../../components/wallpaperMenu";
import { getWallpaperById, type Wallpaper } from "~/data/wallpapers";

export default component$(() => {
  const currentLocation = useLocation();
  const id = Number(currentLocation.params.id);

  const wp: Wallpaper = getWallpaperById(id);

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

export const useWallpaper = routeLoader$(async (requestEvent) => {
  const id = requestEvent.params.id;
  const wp = getWallpaperById(Number(id));
  return wp;
});

export const head: DocumentHead = ({ resolveValue }) => {
  const wp = resolveValue(useWallpaper);
  return {
    title: `${wp.title} - Awesome Wallpapers`,
    meta: [
      {
        name: "description",
        content: `Page for specific wallpaper: ${wp.title}, category: ${wp.category}`,
      },
    ],
  };
};
