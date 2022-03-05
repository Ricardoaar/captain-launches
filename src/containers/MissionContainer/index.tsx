import React from "react";

type Props = {
  children: JSX.Element | JSX.Element[];
};
const MissionContainer: React.FC<Props> = ({ children }) => {
  return <div className="mission-container ">{children}</div>;
};

export default MissionContainer;
