import { component$ } from "@builder.io/qwik";
import Accordion from "~/components/accordion";

export default component$(() => {
  return (
    <main>
      <Accordion title="Big title">hidden?</Accordion>
    </main>
  );
});
