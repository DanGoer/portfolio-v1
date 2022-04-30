import HeroButton from "./components/HeroButton";
import HeroWelcomeText from "./components/HeroWelcomeText";

function Hero({ pageRefs }: any) {
  return (
    <section
      ref={(el) => (pageRefs.current = { ...pageRefs.current, hero: el })}
    >
      <HeroWelcomeText />
      <HeroButton />
    </section>
  );
}

export default Hero;
