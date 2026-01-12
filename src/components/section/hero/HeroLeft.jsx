import Btn from "../../ui/Btn";

export default function HeroLeft() {
  return (
    <div className="h-full flex flex-col gap-15 items-start flex-1">
      <h1 className="text-heading-custom leading-15">
        Building
        <span className="text-primary">
          Smarter <br />
          Solutions
        </span>
        for a <br />
        Digital World
      </h1>
      <p className="text-base-custom leading-10">
        Expert web development, AI innovation, digital marketing <br />
        strategies, and hands-on software courses designed for success.
      </p>
      <Btn label="Join Us" />
    </div>
  );
}
