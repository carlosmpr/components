import React, { useState, useEffect } from 'react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';


interface HeaderProps {
  text: string;
}

const Header: React.FC<HeaderProps> = ({ text }) => {
    const [headerStyle, setHeaderStyle] = useState({
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      background: '#fff',
      zIndex: 1000,
      padding: '1rem',
    });
  
    useScrollPosition(({ prevPos, currPos }) => {
      const isScrollingDown = currPos.y < prevPos.y;
      const newStyle = {
        ...headerStyle,
        opacity: isScrollingDown ? 0.8 : 1,
        fontSize: isScrollingDown ? '1rem' : '1.5rem',
        textAlign: isScrollingDown ? 'center' : 'left',
        transition: 'all 0.3s ease',
      };
      setHeaderStyle(newStyle);
    });
  //@ts-ignore
    return <h1 style={headerStyle}>{text}</h1>;
  };


export default Header