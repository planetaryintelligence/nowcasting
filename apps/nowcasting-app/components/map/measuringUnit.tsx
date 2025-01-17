import { Dispatch, SetStateAction, useEffect } from "react";
import { ActiveUnit } from "./types";
const MeasuringUnit = ({
  activeUnit,
  setActiveUnit,
  isLoading
}: {
  activeUnit: ActiveUnit;
  setActiveUnit: Dispatch<SetStateAction<ActiveUnit>>;
  isLoading: boolean;
}) => {
  const onToggle = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    unit: ActiveUnit
  ) => {
    event.preventDefault();
    setActiveUnit(unit);
  };

  return (
    <div className="mt-2 flex justify-end mr-0">
      <div className="inline-block">
        <button
          onClick={(event) => onToggle(event, ActiveUnit.MW)}
          disabled={isLoading}
          type="button"
          className={`relative w-12inline-flex items-center px-3 py-2 mx-1 ml-px text-sm font-extrabold  ${
            activeUnit === "MW" ? "text-black bg-ocf-yellow" : "text-white bg-black"
          } ${isLoading ? "cursor-wait" : ""} hover:bg-ocf-yellow`}
        >
          MW
        </button>
        <button
          onClick={(event) => onToggle(event, ActiveUnit.percentage)}
          disabled={isLoading}
          type="button"
          className={`relative inline-flex items-center px-4 py-2 ml-1 mr-px text-sm font-extrabold ${
            activeUnit === "%" ? "text-black bg-ocf-yellow" : "text-white bg-black"
          }  ${isLoading ? "cursor-wait" : ""} hover:bg-ocf-yellow`}
        >
          %
        </button>
      </div>
    </div>
  );
};

export default MeasuringUnit;
