import React from "react";
import { useTransition, animated } from "react-spring";
import styled from "styled-components";

const DropAnimation = ({ hovered }) => {
  const animation = useTransition(hovered, null, {
    from: { opacity: 0.7, marginTop: "-40px" },
    enter: { opacity: 1, marginTop: "20px" },
    leave: { opacity: 1, marginTop: "-40px" },
    config: { mass: 15, tension: 370, friction: 30 }
  });
  console.log(hovered);
  return (
    <Container>
      {animation.map(
        ({ item, key, props }) => item && <Triangle key={key} style={props} />
      )}
    </Container>
  );
};

const Container = styled(animated.div)`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

const Triangle = styled(animated.div)`
  border-color: black transparent;
  border-style: solid;
  border-width: 100px 100px 0px 100px;
  justify-self: center;
  align-self: center;
  height: 0px;
  width: 0px;
`;

export default DropAnimation;

// notes mass high so that we have bounce
