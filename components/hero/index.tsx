import HeroButton from "./components/HeroButton";
import HeroWelcomeText from "./components/HeroWelcomeText";
import { InView } from "react-intersection-observer";

function Hero({ pageRefs, handleSectionChange }: any) {
  return (
    <InView threshold={0.5} onChange={handleSectionChange}>
      {({ ref }) => (
        <section ref={ref} id="hero">
          <HeroWelcomeText />
          <HeroButton />
        </section>
      )}
    </InView>
  );
}

export default Hero;
