"use client";
import { useScrollDetector } from "@/app/hooks/useScrollDetector";
import styles from "./clientCircle.module.css";

//TODO
//1. animate on scroll , make it bigger
//2. then i need to make extra clientCircles on portfolio page that will start as big and slowly disapper to reveal the caousel
//3. make some somescreen effect on the bottom
const ClientCircle = (props: {
  size?: string;
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
}) => {
  return (
    <div
      style={{ width: props.size, height: props.size, ...props }}
      className={`${styles.blurred_circle} absolute z-10`}
    ></div>
  );
};

export default ClientCircle;
