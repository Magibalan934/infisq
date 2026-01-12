import FooterTopLeft from "./FooterTopLeft";
import FooterTopRight from "./FooterTopRight";

export default function FooterTop() {
  return (
    <div className="flex gap-10">
      <FooterTopLeft />
      <FooterTopRight />
    </div>
  );
}
