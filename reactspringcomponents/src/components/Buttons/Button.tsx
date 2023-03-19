import React, { useState } from "react";
import styles from "./Button.module.css";
import { useSpring, animated } from "@react-spring/web";
type ButtonProps = {
  title: string;
  buttonForm: "LongButton" | "SmallButton";
  onClick: any;
  buttonStyle:
    | "outline-prymary"
    | "outline-secondary"
    | "Primary"
    | "Secondary"
    | "Checkout";
};
export default function Button({
  title,
  onClick,
  buttonStyle = "Primary",
  buttonForm = "LongButton",
}: ButtonProps) {
  const [isPressed, setIsPressed] = useState(false);
  const { scale } = useSpring({
    scale: isPressed ? 0.95 : 1,
    config: { duration: 100 },
  });

  const handleMouseDown = () => {
    setIsPressed(true);
  };

  const handleMouseUp = () => {
    setIsPressed(false);
  };

  const handleClick = () => {
    onClick && onClick();
  };
  return (
    <animated.div
      style={{
        scale,
      }}
      className={`${styles.ButtonWrapper} ${styles[`${buttonForm}`]}  ${
        styles[`${buttonStyle}`]
      }`}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onClick={handleClick}
    >
      {title}
    </animated.div>
  );
}
