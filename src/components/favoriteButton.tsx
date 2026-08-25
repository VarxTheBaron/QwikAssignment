import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import style from "./favoriteButton.module.css";

export default component$((props: favoriteButtonProps) => {
  const isFavorite = useSignal(false);

  useVisibleTask$(() => {
    isFavorite.value = getFavoriteStatus(props.wallpaperId);
  });

  return (
    <button
      class={style.button}
      onClick$={() => {
        isFavorite.value = toggleFavorite(props.wallpaperId);
      }}
    >
      {isFavorite.value ? "❤️" : "🤍"}
    </button>
  );
});

export type favoriteButtonProps = {
  wallpaperId: number;
};

function toggleFavorite(id: number) {
  const currentStatus: boolean = getFavoriteStatus(id);

  if (!currentStatus) {
    localStorage.setItem(String(id), "favorited");
    return true;
  } else {
    localStorage.removeItem(String(id));
    return false;
  }
}

function getFavoriteStatus(id: number): boolean {
  return localStorage.getItem(String(id)) !== null;
}
