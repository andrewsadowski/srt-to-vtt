import React from "react";
import styled from "styled-components";

const FileCard = ({ name }) => {
  return (
    <FileCardContainer>
      <FileName>{name}</FileName>
    </FileCardContainer>
  );
};

const FileCardContainer = styled.div`
  height: 15vh;
  width: 25vw;
`;

const FileName = styled.p`
  font-family: "Exo", sans-serif;
`;

export default FileCard;
