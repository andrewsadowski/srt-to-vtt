import React, { Component } from "react";
import Dropzone from "react-dnd-dropzone";
import styled from "styled-components";
import { mapStateToProps } from "redux";
import { connect } from "react-redux";

export default class DragArea extends Component {
  render() {
    return (
      <DropContainer>
        <Dropzone
          onDrop={files => console.log(files)}
          render={({ canDrop, isOver }) => (
            <DropZoneContainer>
              Drop file here!
              <pre>{JSON.stringify({ canDrop, isOver })}</pre>
            </DropZoneContainer>
          )}
        />
      </DropContainer>
    );
  }
}

// const mapStateToProps = (state) => mapStateToProps({
//   inputFiles,
//   outputFiles
// });

// const mapDispatchToProps = dispatch({

// })

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(DragArea);

const DropContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: palegoldenrod;
`;

const DropZoneContainer = styled.div`
  width: 100%;
  height: 100vh;
`;
