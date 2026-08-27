import { type RequestEvent } from "@builder.io/qwik-city";
import { getRandomWallpaper } from "~/data/wallpapers";

export const onGet = ({ redirect }: RequestEvent) => {
  const wp = getRandomWallpaper();

  throw redirect(302, `/w/${wp.id}`);
};
