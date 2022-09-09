import React from "react";

const PVNumber: React.FC<{ pv: string; subTitle: string; color?: string }> = ({
  pv,
  subTitle,
  color = "#FFC425",
}) => {
  return (
    <div className="flex-[1] m-auto">
      <div className="m-2">
        <p
          className={`lg:text-xl md:text-lg text-sm font-bold text-center text-${color}`}
          style={{ color: color }}
        >
          {pv}
          <span className=" ml-2 text-mapbox-black-300">GW</span>
        </p>
        <p className="text-mapbox-black-300 whitespace-pre text-center ">{subTitle}</p>
      </div>
    </div>
  );
};
type ForecastHeaderProps = {
  forcastNextPV: string;
  forcastPV: string;
  actualPV: string;
  selectedTimeOnly: string;
  pvTimeOnly: string;
  forecastNextTimeOnly: string;
};

const ForecastHeaderUI: React.FC<ForecastHeaderProps> = ({
  forcastNextPV,
  forcastPV,
  actualPV,
  children,
  selectedTimeOnly,
  pvTimeOnly,
  forecastNextTimeOnly,
}) => {
  return (
    <div className={"flex content-between flex-wrap mt-6 h-auto"}>
      <div
        className={` bg-white text-black lg:text-2xl md:text-lg text-sm font-black  p-4  flex-[2] `}
      >
        National
      </div>
      <PVNumber pv={actualPV} subTitle={`${pvTimeOnly} PVLive`} color="black" />
      <PVNumber pv={forcastPV} subTitle={`${selectedTimeOnly} Forecast`} />
      <PVNumber pv={forcastNextPV} subTitle={`${forecastNextTimeOnly} Forecast`} />
      <div className=" inline-flex items-center h-full m-auto">{children}</div>
    </div>
  );
};

export default ForecastHeaderUI;