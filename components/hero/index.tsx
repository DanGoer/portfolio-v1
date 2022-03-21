import HeroButton from "./components/HeroButton";
import WelcomeText from "./components/WelcomeText";
import { useTranslation } from "next-i18next";

function Hero() {
  const { t } = useTranslation("common");
  return (
    <div className="bg-center bg-cover bg-hero w-screen h-screen flex flex-col items-center justify-start py-40 gap-2 text-center">
      <WelcomeText />
      <HeroButton />
      <p>{t("h1")}</p>
    </div>
  );
}

export default Hero;
