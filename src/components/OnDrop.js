import React from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";

import AtRestSpring from "./AtRestSpring";
import FileCard from "./FileCard";
import RefreshButton from "./RefreshButton";

const OnDrop = ({ dropped, files }) => {
  const { x } = useSpring({
    x: dropped ? 0 : 100
  });
  console.log(files);
  return (
    <>
      {dropped ? (
        <DroppedContainer
          className="checkout"
          style={{ pointerEvents: dropped ? "all" : "none" }}
        >
          <DroppedRight
            style={{
              transform: x.interpolate(x => `translate3d(${x}%, 0, 0)`)
            }}
            className="checkout-right"
          >
            <FileHeader>
              {files.length > 4
                ? `Check the created VTT directory for your files`
                : `Click on a file to open it in your file explorer`}
            </FileHeader>
            {files.length > 4
              ? null
              : files.map(file => (
                  <FileCard
                    key={file.lastModified}
                    path={file.path}
                    name={file.name}
                  />
                ))}
            <RefreshButton />
          </DroppedRight>
        </DroppedContainer>
      ) : (
        <AtRestSpring />
      )}
    </>
  );
};

const DroppedContainer = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
`;

const DroppedRight = styled(animated.div)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #8e9eab; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #eef2f3,
    #8e9eab
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #eef2f3,
    #8e9eab
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

const FileHeader = styled.p`
  font-family: "Exo", sans-serif;
  font-size: "10px";
`;

export default OnDrop;
