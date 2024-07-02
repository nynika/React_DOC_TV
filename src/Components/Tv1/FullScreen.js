import React, { useRef } from "react";

function FullscreenComponent() {
  const myElementRef = useRef(null);

  // Function to request fullscreen for the specified element
  function requestFullscreen() {
    const myElement = myElementRef.current;

    if (myElement) {
      if (myElement.requestFullscreen) {
        myElement.requestFullscreen();
      } else if (myElement.mozRequestFullScreen) {
        myElement.mozRequestFullScreen();
      } else if (myElement.webkitRequestFullscreen) {
        myElement.webkitRequestFullscreen();
      } else if (myElement.msRequestFullscreen) {
        myElement.msRequestFullscreen();
      }
    }
  }

  return (
    <div>
      <div ref={myElementRef}>
        <p>This is the element to make fullscreen.</p>
      </div>
      <button onClick={requestFullscreen}>Go Fullscreen</button>
    </div>
  );
}

export default FullscreenComponent;
