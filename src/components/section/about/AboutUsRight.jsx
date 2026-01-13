import Btn from "../../ui/Btn";

export default function AboutUsRight() {
  return (
    <div>
      <p className="text-secondary text-sub-heading-custom mb-2">About us</p>
      <h2 className="text-3xl font-bold text-gray-900 leading-snug mb-4">
        We are a group of senior engineers who love solving the{" "}
        <span className="text-purple-600">Business puzzles.</span>
      </h2>
      <p className="text-gray-600 mb-6">
        We are a technology-first firm founded by senior engineers dedicated to
        building AI-driven, robust and scalable applications. We build solutions
        using an advanced modern tech stack and bridge the gap between complex
        business problems and elegant technical solutions.
      </p>
      <Btn label={"Learn More"} />
    </div>
  );
}
