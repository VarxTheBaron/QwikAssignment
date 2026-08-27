import { component$ } from "@builder.io/qwik";
import Accordion from "~/components/accordion";
import styles from "./index.module.css";
import InfoCard from "~/components/infoCard";

export default component$(() => {
  return (
    <main class={styles.main}>
      <section class={styles.infocards}>
        <InfoCard
          title="About this website"
          text="This site was made as part of a school project."
        />
        <InfoCard
          title="Frontend framework"
          text="This project was built using the Qwik framework."
        />
        <InfoCard
          title="Built with TypeScript"
          text="TypeScript is used to make the code easier to maintain."
        />
        <InfoCard
          title="Reusable components"
          text="The website uses reusable components."
        />
        <InfoCard
          title="Open source"
          text="Qwik is an open-source framework for building web applications."
        />
        <InfoCard title="Where is the faq?" text="It is below this box." />
      </section>
      <h2>Frequently asked questions</h2>
      <section class={styles.faqAccordions}>
        <Accordion title="What is this website?">
          This website was created as part of a school project.
        </Accordion>
        <Accordion title="What is this project about?">
          The project focuses on building a simple and responsive website.
        </Accordion>
        <Accordion title="How was the website built?">
          It was built using Qwik, TypeScript, and CSS Modules.
        </Accordion>
        <Accordion title="Is this a real FAQ?">
          No, this FAQ contains example data for demonstration purposes.
        </Accordion>
        <Accordion title="Why did you choose Qwik?">
          Qwik was chosen as the frontend framework for this school project.
        </Accordion>
        <Accordion title="What is Qwik?">
          Qwik is a web framework designed to make websites load quickly.
        </Accordion>
        <Accordion title="What was the goal of this project?">
          The goal was to learn a new frontend framework and build a simple
          website with it.
        </Accordion>
        <Accordion title="What features are used in the project?">
          The project uses components, state management, event handling, and
          conditional rendering.
        </Accordion>
        <Accordion title="How does the accordion work?">
          The accordion uses state to keep track of whether the content is open
          or closed.
        </Accordion>
      </section>
    </main>
  );
});
