import { NavLink } from "react-router-dom";
import WhyChooseUsLeft from "./WhyChooseUsLeft";
import WhyChooseUsRight from "./WhyChooseRight";

export default function WhyChooseUs() {
  return (
    <div className="w-full py-16 bg-[url(hero-bg.png)]">
      <div className="w-[75%] mx-auto">
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
