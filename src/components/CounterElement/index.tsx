import React from "react";

type Props = {
  name: string;
  value: number;
};

const CounterElement: React.FC<Props> = ({ name, value }) => {
  const captitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
  return (
    <div className="counter-element">
      <span className="counter-value">{value / 10 >= 1 ? value : `0${value}`}</span>
      <span className="counter-name">{value > 1 ? `${captitalizedName}s` : captitalizedName}</span>
    </div>
  );
};

export default CounterElement;
