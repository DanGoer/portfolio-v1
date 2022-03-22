import HeroButton from "./components/HeroButton";
import WelcomeText from "./components/HeroWelcomeText";
import { useTranslation } from "next-i18next";
import HeroWelcomeText from "./components/HeroWelcomeText";

function Hero() {
  const { t } = useTranslation("common");
  return (
    <>
      <HeroWelcomeText />
      <HeroButton />
    </>
  );
}

export default Hero;
