import React from "react";
import { useSpring, animated } from "@react-spring/web";
interface SlideInProps {
  children?: JSX.Element | JSX.Element[];
}
export default function SlideIn({ children }: SlideInProps) {
  const slideInAnimation = useSpring({
    from: { transform: 'translate3d(0, 100%, 0)' },
    to: { transform: "translate3d(0%, 0, 0)" },
    config: { duration: 300 },
  });
  return <animated.div style={slideInAnimation}>{children}</animated.div>;
}
