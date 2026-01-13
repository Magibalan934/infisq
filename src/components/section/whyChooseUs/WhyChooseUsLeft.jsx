import { whyChooseUsContant } from "../../../data/homePageContant";

export default function WhyChooseUsLeft() {
  return (
    // why choose us left cards
    <div className="flex flex-col items-center gap-5">
      {whyChooseUsContant.map((item, index) => {
        return (
          <div
            className="w-full flex items-center bg-white gap-5 px-5  rounded-xl transition shadow-primary "
            key={index}
          >
            <div className="w-[20%] h-[50]% rounded-lg bg-gray-200" />
            <div className="h-auto flex flex-col gap-5 py-3">
              <h3 className="text-purple-600 text-base-custom font-bold">
                {item.title}
              </h3>
              <p className="text-base-custom text-gray-600">
                {item.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
