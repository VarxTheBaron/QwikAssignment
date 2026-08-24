import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import styles from "./index.module.css";
import WallpaperGrid from "~/components/wallpaperGrid";
import { startPageWallpapers } from "~/data/wallpapers";

export default component$(() => {
  return (
    <main class={styles.main}>
      <Greeter />
      <WallpaperGrid wallpapers={startPageWallpapers()} />
      <InfoCard
        title="Wallpaper stats"
        text="
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, eligendi. Blanditiis, alias! Animi obcaecati nam id. Dolores doloribus beatae aliquam reiciendis quasi mollitia ex obcaecati laudantium delectus veritatis! Nesciunt, ab!"
      />
    </main>
  );
});

export const head: DocumentHead = {
  title: "Awesome Wallpapers",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};

export const Greeter = () => {
  return <h1 class={styles.greeter}>The best wallpapers ever!</h1>;
};

export const InfoCard = (props: { title: string; text: string }) => {
  return (
    <section class={styles.statsInfo}>
      <h2>{props.title}</h2>
      <p>{props.text}</p>
    </section>
  );
};
