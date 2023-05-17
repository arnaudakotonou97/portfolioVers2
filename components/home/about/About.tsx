import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";
import { AiOutlineArrowRight } from "react-icons/ai";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>

    
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              Hey! I&apos;m Arnaud AKOTONOU, if you haven&apos;t already gathered that by
              now. I&apos;m  a young frontend developper with over 4 years of experience by now. I specialize in frontend, mainly javascript stacks.
              I have good understanding of SQL and NoSQL databases, but I like to turn to SaaS solutions like Supabase or Firebase when it comes to design my backends
            </p>
          </Reveal>
          <Reveal>
          
            <p className={styles.aboutText} >
              I&apos;m currently working in freelance on <a href="https://comeup.com/@arnaudakotonou" target="_blank" rel="noreferrer" className={styles.externalLinks}>Comup.com</a>. <br/> I mainly help individuals and startups in the design of their UIs and I also help them build their web apps with React
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
            I have experience with mobile development, with Ionic and NativeScript frameworks. 
            I also had to collaborate on a React Native project in a short time. 
            Last year I didn&apos;t spend much time on mobile development but I plan to get back to it with Flutter and ReactNative since they are the most popular frameworks on the market today.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I&apos;m passively looking for new positions where I can merge my
              love for code with my love for good looking screens. If you think
              you&apos;ve got an opening that I might like, let&apos;s connect
              🔗
            </p>
          </Reveal>
          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};