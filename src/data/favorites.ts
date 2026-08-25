export const favoritesKey: string = "favorites";

export function getFavoriteStatus(id: number): boolean {
  return getFavorites().includes(id);
}

export function getFavorites(): number[] {
  return JSON.parse(localStorage.getItem(favoritesKey) ?? "[]");
}