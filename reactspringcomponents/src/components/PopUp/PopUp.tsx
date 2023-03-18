import React, {useState, useEffect} from 'react';
import { useSpring, animated } from '@react-spring/web';

interface CardPopupProps {
  show: boolean;
  onHide: () => void;
  children: React.ReactNode;
}

const Popup: React.FC<CardPopupProps> = ({ show, onHide, children }) => {
    const [isClosing, setIsClosing] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
  
    const animation = useSpring({
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
      config: { tension: 300, friction: 30 },
      onRest: () => {
        if (isClosing) {
          onHide();
        }
      },
    });
  
    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) {
        setIsClosing(true);
        setIsVisible(false);
      }
    };
  
    useEffect(() => {
      if (show) {
        setIsVisible(true);
        setIsClosing(false);
      }
    }, [show]);
  
    return (
      <div
        onClick={handleOverlayClick}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: show ? 'flex' : 'none',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000,
        }}
      >
        <animated.div
          style={{
            ...animation,
            backgroundColor: '#fff',
            borderRadius: '8px',
            padding: '2rem',
            maxWidth: '90%',
            maxHeight: '90%',
            overflowY: 'auto',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          {children}
        </animated.div>
      </div>
      );
    };

export default Popup;