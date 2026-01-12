import { whyChooseUs } from "../../../data/whyChooseus";
export default function WhyChooseUsLeft() {
  return (
    // why choose us left cards
    <div className="relative top-0 left-0 flex flex-col items-center gap-6">
      {whyChooseUs.map((item, index) => {
        return (
          <div
            className="w-[90%] flex items-center bg-white gap-11 p-5  rounded-xl transition shadow-primary "
            key={index}
          >
            <div className="w-30 h-20 rounded-lg bg-gray-200" />
            <div className="flex flex-col gap-5 py-5">
              <h3 className="font-semibold text-purple-600 text-xl">{item.title}</h3>
              <p className="text-base-custom text-gray-600">{item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
