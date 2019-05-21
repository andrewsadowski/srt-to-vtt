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
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  border-radius: 10%;
  background-color: #cb2d3e; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #ef473a,
    #cb2d3e
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #ef473a,
    #cb2d3e
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

const FileName = styled.p`
  font-family: "Exo", sans-serif;
  text-align: center;
`;
const FilePath = styled.p`
  font-family: "Exo", sans-serif;
  text-align: center;
`;

export default FileCard;
