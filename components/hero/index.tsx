import HeroButton from "./components/HeroButton";
import HeroWelcomeText from "./components/HeroWelcomeText";
import { InView } from "react-intersection-observer";

function Hero({ handleSectionChange }: any) {
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
