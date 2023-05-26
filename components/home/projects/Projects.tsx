import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";
import { Trans } from "@lingui/macro";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title={<Trans id="projects.title">Projects</Trans>} dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Uptimise",
    imgSrc: "project-imgs/uptimise.png",
    // code: "https://www.github.com",
    projectLink: "https://uptimise.io/",
    tech: ["React", "MUI", "EmailJs", "Tailwind CSS", "Pipedrive"],
    description:
      "Uptimise landing page. Uptimise is a SaaS web app for human resources and payroll management.",
    modalContent: (
      <>
        <p>
          <Trans>
            Uptimise makes it easy to manage human resources, leave and absence requests, expense reports, benefits, payroll, employee data.
          </Trans>
        </p>
        <p>
          <Trans>
            The tech stack is based on top of pure React and Mui UI lib for the frontend.
          </Trans>
        </p>
        <p>
          <Trans>
            There is a simulator for companies or individuals who want to estimate how much their employees cost
          </Trans>
          {":)"}
        </p>
        <p>
          <Trans>
            I enjoyed building this web site and working on the Saas app, I learned a lot about Human resources, payroll and employee&apos;s rights and obligations
          </Trans>
        </p>
      </>
    ),
  },
  {
    title: "Teska Booking",
    imgSrc: "project-imgs/teska.png",
    code: "https://github.com/femi-Zedev/booking-app",
    projectLink: "https://teska-travel.netlify.app/",
    tech: ["React", "Mantine UI", "Tailwind CSS"],
    description:
      "A booking app, where travelers can make reservations for flights, hotels and car rentals",
    modalContent: (
      <>
        <p>
          <Trans>
            Teska booking is a booking application where travelers can make reservations for flights, hotels and car rentals, all without having to be in the host country in advance
          </Trans>
        </p>
        <p>
          <Trans>
            It is a project I contracted on comeUp. I work on the frontend of the app, it was planned to use Duffel&apos;s API to manage flights with their billing.
          </Trans>
        </p>
        <p>
          <Trans>
            I enjoyed working on this project where I learned about flight booking and its specificities.
            Nevertheless I am a bit sorry that the project did not go into production.
          </Trans>
        </p>
      </>
    ),
  },
  {
    title: "Resto Master",
    imgSrc: "project-imgs/fodoo.png",
    // code: "https://www.github.com",
    projectLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    tech: ["NextJS", "Redux", "Mantine UI", "Laraval API"],
    description:
      "It is an internal restaurant order receipt manager for receipt generation and accounting automation ",
    modalContent: (
      <>
        <p>
          <Trans>
            Resto Master is an internal restaurant order and receipt manager.
          </Trans>
        </p>
        <p>
          <Trans>
            So managers, waiters, accountants can login and see receipts of a restaurant for a period
          </Trans>
        </p>
        <p>
          <Trans>
            Waiters see the available tables in a restaurant, decide to process a table&apos;s order and send it to the kitchen and when it been served , he can see the receipt for this order
          </Trans>
        </p>
      </>
    ),
  },
  {
    title: "Loto Esh",
    imgSrc: "project-imgs/loto.png",
    // code: "https://www.github.com",
    projectLink: "https://loto-esh.vercel.app/jouer?token=LBDLOSE45ELW2W",
    tech: ["React", "Redux", "Mantine UI", "Laravel API"],
    description:
      "A gambling app where players win by getting a certain amount of correct numbers on a pre-filled grid",
    modalContent: (
      <>
        <p>
          <Trans>
            Loto Esh is a gambling game app. Its goal is to get a certain number of correct numbers on a pre-filled grid
          </Trans>
        </p>
        <p>
          <Trans>
            Players buy game cards of 27 boxes divided into 3 lines of 9 boxes.
          </Trans>
        </p>
        <p>
          <Trans>
            Three playing modes are possible: the quine, the double quine and the full card.
          </Trans>
        </p>
        <p>
          <Trans>
            To win in quine it is enough to have a complete line of good number selected from the abacus among one of the player&apos;s cards.
            In double quine it is necessary to have 2 complete line of good numbers.
            And finally in the full card mode the player must have all the boxes of the cardboard with the numbers drawn by the abacus
          </Trans>
        </p>
        <p>
          <Trans>
            The winnings are proportional to the difficulty of the game mode
          </Trans>
        </p>
      </>
    ),
  },
];
