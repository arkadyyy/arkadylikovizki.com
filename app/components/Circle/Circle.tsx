import React from "react";
import styles from "./circle.module.css";

const Circle = (props: {
  size?: string;
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
}) => {
  return (
    <div
      style={{ width: props.size, height: props.size, ...props }}
      className={`${styles.blurred_circle} absolute`}
    ></div>
  );
};

export default Circle;
