import { useMemo } from "react";
import { ActiveUnit } from "./types";

type ColorGuideBarProps = { unit: ActiveUnit };

const ColorGuideBar: React.FC<ColorGuideBarProps> = ({ unit }) => {
  const values = useMemo(() => {
    if (unit === ActiveUnit.MW) {
      return [
        { value: "50-150", opacity: 20 },
        { value: "150-250", opacity: 40 },
        { value: "250-350", opacity: 60 },
        { value: "350-450", opacity: 80 },
        { value: "450+", opacity: 100 }
      ];
    } else {
      return [
        { value: "10-30", opacity: 20 },
        { value: "30-50", opacity: 40 },
        { value: "50-70", opacity: 60 },
        { value: "70-90", opacity: 80 },
        { value: "90+", opacity: 100 }
      ];
    }
  }, [unit]);
  let unitText = unit === ActiveUnit.MW ? "MW" : "%";
  return (
    <div className="absolute bg-mapbox-black-700 bottom-12 flex left-0 ml-12 z-20">
      <div className="flex justify-between h-full text-ocf-black-600 font-bold relative items-end text-sm">
        {values.map((value, index) => (
          <div
            key={value.value}
            className={`px-3 py-[1px] bg-ocf-yellow/${value.opacity} whitespace-nowrap ${
              index !== 0 ? "border-l border-ocf-black-600" : ""
            }`}
          >
            {value.value}
            {index === 0 && (
              <span className="font-normal text-ocf-black-500 text-xs ml-1">{unitText}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorGuideBar;
