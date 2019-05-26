import React, { useState } from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

const FileCard = ({ name, path }) => {
  const [on, setOn] = useState(false);
  const animation = useSpring({
    backgroundColor: on ? "#ffdc00" : "#8e9eab"
  });
  return (
    <FileCardContainer
      style={animation}
      onMouseLeave={() => setOn(false)}
      onMouseOver={() => setOn(true)}
    >
      <FileName>{name}</FileName>
    </FileCardContainer>
  );
};

const FileCardContainer = styled(animated.div)`
  height: auto;
  width: 90%;
  display: flex;
  justify-content: center;
  align-content: center;
  border-radius: 30px;
  margin-bottom: 10px;
  border: 1px solid #ffdc00;
`;

const FileName = styled.p`
  font-family: "Exo", sans-serif;
  justify-self: center;
  text-align: center;
`;
// const FilePath = styled.p`
//   font-family: "Exo", sans-serif;
//   text-align: center;
// `;

export default FileCard;
