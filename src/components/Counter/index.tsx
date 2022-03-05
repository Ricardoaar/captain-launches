import React from "react";

type Props = {
  time: TimeObject;
  render: (time: TimeObject) => JSX.Element[] | JSX.Element;
};
const Counter: React.FC<Props> = ({ time, render }) => {
  return <div className="counter">{render(time)}</div>;
};

export default Counter;
