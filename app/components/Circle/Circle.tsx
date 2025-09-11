import React from "react";
import styles from "./circle.module.css";

type CircleProps = {
  size?: string;
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
};

const Circle = ({ size, left, right, top, bottom }: CircleProps) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        left,
        right,
        top,
        bottom,
      }}
      className={`${styles.blurred_circle} absolute`}
    />
  );
};

export default Circle;
