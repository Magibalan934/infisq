import AboutUsLeft from "./AboutUsLeft";
import AboutUsRight from "./AboutUsRight";

export default function AboutUs() {
  return (
    <section className="w-full">
      <div className="max-w-350 w-[90%] mx-auto h-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AboutUsLeft />
          <AboutUsRight />
        </div>
      </div>
    </section>
  );
}
