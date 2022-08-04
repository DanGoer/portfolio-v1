// Hero part of the web app

import { SectionChangeI } from "../../types/interfaces";

import { InView } from "react-intersection-observer";

import HeroButton from "./components/HeroButton";
import HeroWelcomeText from "./components/HeroWelcomeText";

function Hero({ handleSectionChange }: SectionChangeI) {
  return (
    <InView threshold={0.2} onChange={handleSectionChange}>
      {({ ref }) => (
        <section ref={ref} id="hero" className="h-screen w-full relative">
          <div className="absolute text-left flex flex-col left-1/4 top-1/4">
            <HeroWelcomeText />
            <HeroButton />
          </div>
          <a href="#tech" className="absolute bottom-8 left-1/2 w-10">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z" />
            </svg>
          </a>
        </section>
      )}
    </InView>
  );
}

export default Hero;
