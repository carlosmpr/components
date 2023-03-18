import React, { useState } from 'react';
import Popup from './PopUp'

export default function ShowPopUp() {
    const [showCardPopup, setShowCardPopup] = useState(false);

  const handleShowCardPopup = () => {
    setShowCardPopup(true);
  };

  const handleHideCardPopup = () => {
    setShowCardPopup(false);
  };
  return (
    <div className="App">
      <button onClick={handleShowCardPopup}>Show Card Popup</button>
      <Popup show={showCardPopup} onHide={handleHideCardPopup}>
        <h2>Card Title</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus
          ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
        </p>
        <button onClick={handleHideCardPopup}>Close</button>
      </Popup>
    </div>
  );
};