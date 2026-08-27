import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import styles from "./index.module.css";
import WallpaperGrid from "~/components/wallpaperGrid";
import { startPageWallpapers } from "~/data/wallpapers";
import InfoCard from "~/components/infoCard";

export default component$(() => {
  return (
    <main class={styles.main}>
      <Greeter />
      <WallpaperGrid
        wallpapers={startPageWallpapers()}
        title="Featured wallpapers"
      />
      <InfoCard title="Wallpaper stats" text={text} />
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

export const text: string =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos laudantium, quisquam deleniti eum sint tenetur nam sed accusamus. Consectetur ipsa voluptates debitis maxime sequi autem amet error ratione quam sint enim ducimus veritatis quibusdam minima ad est mollitia, cumque ut quas et! Facere vel in molestiae enim iste, ut ea eligendi laudantium fugit unde dolorum at. Veniam facilis unde perspiciatis. Blanditiis error quam id aspernatur rerum quod excepturi harum sunt, assumenda accusamus inventore sequi ullam natus ipsa cumque voluptatum nesciunt deleniti ex adipisci earum nostrum ducimus officiis impedit! Quia quisquam optio delectus aliquam? Libero corporis nemo id sunt officiis nesciunt harum, nulla minus dolorem est suscipit qui quod rerum porro expedita at placeat ullam perspiciatis deleniti illum culpa animi sed? Eveniet eum architecto asperiores maiores laudantium nesciunt perspiciatis tempora, animi magnam incidunt quae repellendus non neque! Quod soluta deserunt magnam dignissimos quis aliquid eaque, dolor nisi, laboriosam quia a sequi, placeat numquam illo fugiat vero odit reprehenderit officia cumque consequuntur! Repudiandae laborum ab rem, nostrum ducimus qui totam asperiores culpa, ipsum debitis voluptatibus expedita corporis illo cumque unde hic perspiciatis quam ex architecto! Voluptas commodi alias, corporis aliquid vero tempora repellat fuga perspiciatis ut porro dolorem autem, omnis officiis possimus laudantium reprehenderit inventore optio odit velit? Quae voluptas odit doloribus alias, iste corporis, facere omnis architecto optio fuga, iusto magnam inventore velit voluptates exercitationem? Nesciunt, obcaecati. Praesentium mollitia quam, facilis nihil, ab ipsam quasi deleniti enim et voluptates possimus qui consequuntur magnam odit nulla eaque! Repudiandae, blanditiis nesciunt odio assumenda eligendi quibusdam praesentium saepe quaerat? Unde, animi nobis vero fuga iure perferendis numquam itaque. Ratione dolorem quaerat repellendus fuga minima quo ad nemo fugiat eveniet. Nostrum iure quibusdam consequuntur officia, ducimus omnis dolores soluta at magni eos sapiente quis. Facere necessitatibus, reiciendis architecto nihil libero ipsa reprehenderit sint fugit ducimus accusantium a nam, odit voluptates, vitae quidem sapiente consequuntur enim molestias debitis. Voluptatibus ex ducimus ipsum mollitia cum officia cupiditate esse minus repudiandae facilis asperiores unde, tenetur, incidunt animi. Ab eligendi quam illum quaerat eum, dicta aliquam autem exercitationem, voluptatibus eius hic tempore ipsum velit fuga nemo. Voluptatem voluptas vitae quis animi vel voluptate totam ipsum impedit laboriosam dignissimos dolores fugiat rem quo ex beatae, molestias dicta doloremque adipisci autem, repellendus qui alias. Est eos reprehenderit nesciunt aspernatur fugit, ducimus omnis facere suscipit, corporis repellat aut officia nam cupiditate quae velit sunt accusamus cum quibusdam? Dolore maiores natus repudiandae et, recusandae obcaecati impedit mollitia? Necessitatibus officiis eos impedit enim ipsum odit voluptatem quibusdam beatae aperiam temporibus, saepe quidem sunt repellat nam error illo ipsa tenetur voluptate? Aperiam iure cupiditate eius totam eligendi, sed facere eos ut, corrupti recusandae harum consectetur, error provident. Cumque dolore reiciendis ab optio? Numquam, similique! Expedita, odit! Expedita, tempore. Accusamus totam porro eos dolorem molestiae repudiandae provident, perferendis, debitis fugit velit ea delectus ut officia consequatur nemo quo excepturi voluptate! Aspernatur quae molestias quo ducimus illum, accusamus mollitia iste fugiat pariatur, vel, atque possimus inventore ad consequuntur sapiente corporis sunt eaque ullam. Libero, id corrupti! Repudiandae.";
