import React, { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";

interface SnackBarProps {
  message: string;
  show: boolean;
  onHide: () => void;
}

const SnackBar: React.FC<SnackBarProps> = ({ message, show, onHide }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const animation = useSpring({
    transform:
      isMounted && show
        ? isMobile
          ? "translateY(0%)"
          : "translateX(0%)"
        : isMobile
        ? "translateY(100%)"
        : "translateX(100%)",
    config: { tension: 210, friction: 20 },
  });

  useEffect(() => {
    setIsMounted(true);
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onHide();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [show, onHide]);

  const snackBarStyle = {
    position: "fixed",
    bottom: isMobile ? 0 : "auto",
    right: isMobile ? "auto" : 0,
    padding: "1rem",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    color: "#fff",
    zIndex: 2000,
    borderRadius: isMobile ? "12px 12px 0 0" : "0 0 12px 0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    width: isMobile ? "100%" : "auto",
  };

  return (
    //@ts-ignore
    <animated.div style={{ ...animation, ...snackBarStyle }}>
      {message}
    </animated.div>
  );
};

export default SnackBar;
