import { NavLink } from "react-router-dom";
import WhyChooseUsLeft from "./WhyChooseUsLeft";
import WhyChooseUsRight from "./WhyChooseRight";

export default function WhyChooseUs() {
  return (
    <div className="w-full h-auto py-15 bg-[url(hero-bg.png)] bg-center bg-no-repeat bg-cover">
      <div className="w-[90%] max-w-350  mx-auto">
        <h2 className="text-sub-heading-custom text-center mb-12">
          Why Choose us?
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-15 items-center">
          <WhyChooseUsLeft />
          <WhyChooseUsRight />
        </div>
      </div>
    </div>
  );
}
