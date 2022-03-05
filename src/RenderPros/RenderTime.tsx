import CounterElement from "@components/CounterElement";
import React from "react";

const RenderTime: (time: TimeObject) => JSX.Element | JSX.Element[] = (time) => {
  return Object.keys(time).map((key) => {
    const val: number = time[key] as number;
    return <CounterElement key={key as string} name={key} value={val} />;
  });
};
export default RenderTime;
