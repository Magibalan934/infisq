import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

export default function Hero() {
  return (
    <div className="hero-container bg-[url(/hero-bg.png)] w-full">
      <div className="py-35">
        <div className="hero w-[80%] mx-auto h-auto flex-center">
          <HeroLeft />
          <HeroRight />
        </div>
      </div>
    </div>
  );
}
