import React from "react";
import { useSpring, animation } from "react-spring";
import styled from "styled-components";

const DropAnimation = ({ hovered }) => {
  const animation = useSpring({});
  return (
    <div>
      <Triangle />
    </div>
  );
};

const Triangle = styled.div`
  border-color: black transparent;
  border-style: solid;
  border-width: 20px 20px 0px 20px;
  justify-self: center;
  align-self: center;
  height: 0px;
  width: 0px;
`;

export default DropAnimation;

// notes mass high so that we have bounce
