import React, { useState } from "react";
import { animated, useSpring } from "@react-spring/web";
import styles from "./Switch.module.css";
import { useColorSchemeContext } from "../../context/ColorSchemeContext";
interface SwitchProps {
  initialState?: boolean;
  onToggle?: (state: boolean) => void;
}

const Switch: React.FC<SwitchProps> = ({ initialState = false, onToggle }) => {
  const [isOn, setIsOn] = useState(initialState);
  const { toggleColorScheme } = useColorSchemeContext();
  const thumbSpring = useSpring({
    transform: isOn ? "translateX(20px)" : "translateX(0px)",
    
  });

  const backgroundSpring = useSpring({
    backgroundColor: isOn ? "#006ee6" : "#ccc;",
  });

  const handleToggle = () => {
    setIsOn(!isOn);
    onToggle?.(!isOn);
    toggleColorScheme();
  };

  return (
    <div className={styles.switchContainer} onClick={handleToggle}>
      <animated.div className={styles.switch} style={backgroundSpring}>
        <animated.div
          className={styles.switchThumb}
          style={thumbSpring}
        ></animated.div>
      </animated.div>
    </div>
  );
};

export default Switch;
