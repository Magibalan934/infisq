import { whyChooseUs } from "../../../data/whyChooseus";
export default function WhyChooseUsLeft() {
  return (
    // why choose us left cards
    <div className="space-y-6 relative">
      {whyChooseUs.map((item, index) => {
        return (
          <div
            className="flex items-start bg-white gap-4 p-5 border rounded-xl shadow-sm hover:shadow-md transition"
            key={index}
          >
            <div className="w-12 h-12 rounded-lg bg-gray-200" />
            <div>
              <h3 className="font-semibold text-purple-600">{item.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
