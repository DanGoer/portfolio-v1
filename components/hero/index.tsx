import HeroButton from "./components/HeroButton";
import WelcomeText from "./components/WelcomeText";
import { useTranslation } from "next-i18next";

function Hero() {
  const { t } = useTranslation("common");
  return (
    <>
      <WelcomeText />
      <HeroButton />
    </>
  );
}

export default Hero;
