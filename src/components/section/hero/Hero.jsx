import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

export default function Hero() {
  return (
    <div className="h-auto lg:h-225 bg-[url(/hero-bg.png)] w-full bg-no-repeat bg-center bg-cover">
      <div className="pb-5 pt-25 md:pt-35">
        <div className="max-w-350  w-[90%] mx-auto  flex-center flex-col md:flex-row">
          <HeroLeft />
          <HeroRight />
        </div>
      </div>
    </div>
  );
}
