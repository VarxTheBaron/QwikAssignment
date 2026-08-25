import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import {
  favoritesKey,
  getFavorites,
  getFavoriteStatus,
} from "~/data/favorites";
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

function toggleFavorite(id: number): boolean {
  const favorites: number[] = getFavorites();

  if (favorites.includes(id)) {
    const updatedFavorites = favorites.filter((fav) => fav !== id);
    localStorage.setItem(favoritesKey, JSON.stringify(updatedFavorites));
    return false;
  } else {
    favorites.push(id);
    localStorage.setItem(favoritesKey, JSON.stringify(favorites));
    return true;
  }
}
