// Hero part of the web app

import { SectionChangeI } from "../../types/interfaces";

import { InView } from "react-intersection-observer";

import HeroButton from "./components/HeroButton";
import HeroWelcomeText from "./components/HeroWelcomeText";

function Hero({ handleSectionChange }: SectionChangeI) {
  return (
    <InView threshold={0.5} onChange={handleSectionChange}>
      {({ ref }) => (
        <section ref={ref} id="hero" className="pt-48">
          <HeroWelcomeText />
          <HeroButton />
        </section>
      )}
    </InView>
  );
}

export default Hero;
