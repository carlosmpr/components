import React, { useState } from 'react';
import { useSpring, animated } from "@react-spring/web";
import styles from './Checkbox.module.css';

interface Props {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const AnimatedCheckbox: React.FC<Props> = ({ label, checked, onChange }) => {
  const [isChecked, setIsChecked] = useState(checked);

  const { opacity, x } = useSpring({
    opacity: isChecked ? 1 : 0,
    x: isChecked ? 0 : -20,
    config: { tension: 220, friction: 20 },
  });

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    onChange(!isChecked);
  };

  return (
    <div className={styles.checkboxWrapper}>
      <label className={styles.checkboxLabel}>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className={styles.checkboxInput}
        />
        <span className={styles.checkbox}>
          <animated.span
            className={styles.checkmark}
            style={{
              transform: x.interpolate((x) => `translate3d(${x}px, 0, 0)`),
              opacity,
            }}
          />
        </span>
        <animated.span
          className={`${styles.checkboxText} ${isChecked ? '' : styles.lightFont}`}
        >
          {label}
        </animated.span>
      </label>
    </div>
  );
};

export default AnimatedCheckbox;