export default function WhyChooseUsRight() {
  return (
    // why choose us right image section
    <div className="relative">
      <div className=" overflow-hidden ">
        <img
          src="Why_choose.png"
          alt="Why Choose Us"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-purple-200 rounded-full blur-3xl -z-10" />
    </div>
  );
}
