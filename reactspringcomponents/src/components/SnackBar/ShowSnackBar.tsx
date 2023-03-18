import React, {useState} from 'react'
import SnackBar from './SnackBar';
export default function ShowSnackBar() {
    const [showSnackBar, setShowSnackBar] = useState(false);

  const handleShowSnackBar = () => {
    setShowSnackBar(true);
  };

  const handleHideSnackBar = () => {
    setShowSnackBar(false);
  };
  return (
    <div className="App">
    <button onClick={handleShowSnackBar}>Show Snack Bar</button>
    <SnackBar
      message="This is a snack bar message!"
      show={showSnackBar}
      onHide={handleHideSnackBar}
    />
  </div>
  )
}
