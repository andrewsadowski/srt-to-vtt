import React from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";

const OnDrop = ({ dropped, files }) => {
  const { x } = useSpring({
    x: dropped ? 0 : 100
    // transform: isOpen ? `translate3d(0, 0, 0)` : `translate3d(100%, 0, 0)`
  });
  console.log(files);
  return (
    <>
      {dropped ? (
        <DroppedContainer
          className="checkout"
          style={{ pointerEvents: dropped ? "all" : "none" }}
        >
          <DroppedLeft
            style={{
              transform: x.interpolate(x => `translate3d(${x * -1}%, 0, 0)`)
            }}
            className="checkout-left"
          />
          <DroppedRight
            style={{
              transform: x.interpolate(x => `translate3d(${x}%, 0, 0)`)
            }}
            className="checkout-right"
          >
            <FileHeader />
            {files.map(file => (
              <File key={file.lastModified}>{file.name}</File>
            ))}
          </DroppedRight>
        </DroppedContainer>
      ) : (
        <div>Drop Somthing</div>
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
  width: 70%;
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

const File = styled.p`
  text-align: center;
  flex-direction: column;
  justify-self: center;
`;

const FileHeader = styled.h1`
  font-family: "Exo", sans-serif;
`;

const DroppedLeft = styled(animated.div)`
  width: 30%;
  height: 100%;
  background: #e6dada; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #274046,
    #e6dada
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #274046,
    #e6dada
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

export default OnDrop;
