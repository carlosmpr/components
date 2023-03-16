import React, { useState } from "react";

import styles from "./NavbarItem.module.css";
import { animated, useSpring } from "@react-spring/web";

export type NavbarItemsProps = {
  title: string;
  icon: string;
  href: string;
  active: string;
};

export default function NavbarItem({
  title,
  icon,
  href,
  active,
}: NavbarItemsProps) {
  const [isPulsing, setIsPulsing] = useState(false);
  const pulseProps = useSpring({
    from: { transform: "scale(1)", opacity: 1 },
    to: async (next: any) => {
      while (isPulsing) {
        await next({ transform: "scale(1.1)", opacity: 0.5 });
        await next({ transform: "scale(1)", opacity: 1 });
      }
    },
  });

  const handleMouseDown = () => {
    setIsPulsing(true);
  };

  const handleMouseUp = () => {
    setIsPulsing(false);
  };

  return (
    <animated.div
      style={isPulsing ? pulseProps : {}}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onTouchStart={handleMouseDown}
      onTouchEnd={handleMouseUp}
    >
      <div
        className={`${styles.NavbarItems} ${
          title === active ? styles["NavbarItems-active"] : ""
        }`}
      >
        <img alt={icon} src={icon} width={24} height={24} />
        <p>{title}</p>
      </div>
    </animated.div>
  );
}
