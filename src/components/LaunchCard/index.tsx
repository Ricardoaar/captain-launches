import React from "react";

type Props = {
  children: JSX.Element | JSX.Element[] | null;
};
const LaunchCard: React.FC<Props> = ({ children }) => {
  return <div className="launch-card">{children}</div>;
};

export default LaunchCard;
