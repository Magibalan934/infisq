import Btn from "../../ui/Btn";
import { heroSection } from "../../../data/homePageContant";

export default function HeroLeft() {
  return (
    <div className="h-full flex flex-col gap-8  items-start flex-1">
      <h1 className="text-heading-custom leading-10 lg:leading-18 ">
        {heroSection.headline.start}{" "}
        <span className="text-primary">
          {heroSection.headline.highlight}
        </span>{" "}
        {heroSection.headline.end}
      </h1>
      <p className="text-base-custom leading-6  md:leading-8 lg:leading-10 text-justify">
        {heroSection.subHeadline}
      </p>
      <Btn label="Join Us"/>
    </div>
  );
}
