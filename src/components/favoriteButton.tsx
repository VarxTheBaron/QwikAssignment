import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import {
  favoritesKey,
  getFavorites,
  getFavoriteStatus,
} from "~/data/favorites";
import style from "./favoriteButton.module.css";

export default component$((props: FavoriteButtonProps) => {
  const isFavorite = useSignal(false);

  useVisibleTask$(({ track }) => {
    const wallpaperId = track(() => props.wallpaperId);
    isFavorite.value = getFavoriteStatus(wallpaperId);
  });

  return (
    <button
      type="button"
      class={style.button}
      aria-label={
        isFavorite ? "Remove from favorites list" : "Add to favorites list"
      }
      onClick$={() => {
        isFavorite.value = toggleFavorite(props.wallpaperId);
      }}
    >
      {isFavorite.value ? "❤️" : "🤍"}
    </button>
  );
});

interface FavoriteButtonProps {
  wallpaperId: number;
}

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
