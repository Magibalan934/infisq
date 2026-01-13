import Hero from "../components/section/hero/Hero";
import WhyChooseUs from "../components/section/whyChooseUs/WhyChooseUs";
import AboutUs from "../components/section/about/AboutUs";

export default function Home() {
  return (
    <section>
      <Hero />
      <AboutUs />
      <WhyChooseUs />
    </section>
  );
}
