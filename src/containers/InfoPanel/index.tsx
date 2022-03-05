import React from "react";

type Props = {
  children: JSX.Element | JSX.Element[];
};

const InfoPanel: React.FC<Props> = ({ children }) => {
  return <section className="info-panel">{children}</section>;
};

export default InfoPanel;
