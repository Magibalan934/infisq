import FooterBottom from "./FooterBottom";
import FooterTop from "./FooterTop";

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="w-[80%] mx-auto my-10">
        <FooterTop />
        <hr className="bg-gradient-primary h-1 my-10" />
        <FooterBottom />
      </div>
    </footer>
  );
}
