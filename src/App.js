/* 
import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import "./App.css";
import Prof from "./Components/Prof";
import TV1Slide from "./Components/Tv1/Slide1";

import FullscreenComponent from "./Components/Tv1/FullScreen";

const App = () => {
  const myElementRef = useRef(null);

  const [componentDecider, setComponentDecider] = useState(0);
  const [currentComponent, setCurrentComponent] = useState([
    <Prof />,
    <TV1Slide />,

  ]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setComponentDecider((prev) => (prev + 1) % currentComponent.length);
    }, 4000);
    return clearTimeout(() => timer);
  }, [componentDecider]);

  console.log(componentDecider, "test");
  console.log(currentComponent[componentDecider]);
  return (
    <div>
      {currentComponent[componentDecider]}
 
    </div>
  );
};

export default App;
 */
/* 

import React, { useState, useEffect } from "react";
import "./App.css";
import Prof from "./Components/Prof";
import TV1Slide1 from "./Components/Tv1/Slide1";

const App = () => {
  const [componentDecider, setComponentDecider] = useState(0);
  const components = [<Prof />, <TV1Slide1 />];

  useEffect(() => {
    const timer = setTimeout(() => {
      setComponentDecider((prev) => (prev + 1) % components.length);
    }, 20000);
    return () => clearTimeout(timer); 
  }, [componentDecider]);

  return <div>{components[componentDecider]}</div>;
};

export default App; */


import React, { useState, useEffect } from "react";
import "./App.css";
import Prof from "./Components/Prof";
import TV1Slide1 from "./Components/Tv1/Slide1";

const App = () => {
  const [componentDecider, setComponentDecider] = useState(0);
  const components = [<Prof />, <TV1Slide1 />];

  useEffect(() => {
    const timer = setTimeout(() => {
      setComponentDecider((prev) => (prev + 1) % components.length);
    }, componentDecider === 0 ? 5000 : 28000); // Prof shows for 20 seconds, TV1Slide1 for 2 minutes (adjust as needed)
    return () => clearTimeout(timer); // Cleanup the timer
  }, [componentDecider]);

  return <div>{components[componentDecider]}</div>;
  
};

export default App;
