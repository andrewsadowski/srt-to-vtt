import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

const SpringInit = () => {
  const [isToggle, setToggle] = useState(false);
  const fade = useSpring({
    opacity: isToggle ? 1 : 0
  });
  return (
    <animated.div onClick={() => setToggle(!isToggle)} style={fade}>
      <h1>Hello</h1>
    </animated.div>
  );
};

export default SpringInit;
