import { component$ } from "@builder.io/qwik";
import { type DocumentHead, routeLoader$ } from "@builder.io/qwik-city";
import styles from "./index.module.css";
import WallpaperMenu from "../../../components/wallpaperMenu";
import { getWallpaperById } from "~/data/wallpapers";

export default component$(() => {
  const wp = useWallpaper();

  return (
    <main class={styles.main}>
      {wp.value && (
        <>
          <WallpaperMenu wallpaper={wp.value} />
          <img
            src={wp.value.imageURL}
            class={styles.displayedImage}
            alt={`Title: ${wp.value.title}, category: ${wp.value.category}`}
          />
        </>
      )}
      {!wp.value && <p>No wallpaper found...</p>}
    </main>
  );
});

export const useWallpaper = routeLoader$((requestEvent) => {
  const id = requestEvent.params.id;
  const wp = getWallpaperById(Number(id));
  return wp;
});

export const head: DocumentHead = ({ resolveValue }) => {
  const wp = resolveValue(useWallpaper);

  if (!wp) {
    return {
      title: `Wallpaper not found - Awesome Wallpapers`,
      meta: [
        {
          name: "description",
          content: `The requested wallpaper could not be found.`,
        },
      ],
    };
  }

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
