import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

const FileCard = ({ name, path }) => {
  return (
    <FileCardContainer>
      <FileName>{name}</FileName>
    </FileCardContainer>
  );
};

const FileCardContainer = styled.div`
  height: 15vh;
  width: 75%;
  display: flex;
  justify-content: center;
  align-content: center;
  border-radius: 30px;
  margin-bottom: 10px;
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
