import HeroButton from "./components/HeroButton";
import WelcomeText from "./components/WelcomeText";

function Hero() {
  return (
    <div className="bg-center bg-cover bg-hero w-screen h-screen flex flex-col items-center justify-start py-40 gap-2 text-center">
      <WelcomeText />
      <HeroButton />
    </div>
  );
}

export default Hero;
