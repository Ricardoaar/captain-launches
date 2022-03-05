import React from "react";
import RocketSVG from "./rocket.svg";

type Props = {
  launch: RocketLaunchType;
  children: JSX.Element | JSX.Element[] | null;
};
const UTCToHuman = (utc: string) => {
  const date = new Date(utc);
  return date.toLocaleString();
};

const RocketLaunch: React.FC<Props> = ({ launch, children }) => {
  return (
    <div className="select-none relative flex flex-col justify-center items-center">
      <img className="rocket" src={RocketSVG} alt="Rocket Launch" />
      <span className="rocket-mission">{launch.mission}</span>
      <span className="rocket-date">{UTCToHuman(launch.dateUtc)}</span>
      <div className="w-100 flex justify-center">{children}</div>
    </div>
  );
};

export default RocketLaunch;
