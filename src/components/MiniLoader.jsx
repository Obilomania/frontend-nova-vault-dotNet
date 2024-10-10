import React from "react";
import styled from "styled-components";
import { Spinner } from "react-bootstrap";

const MiniLoader = () => {
  return (
    <MiniLoading>
      <div className="spinners">
        <Spinner animation="grow" variant="danger" />
        <Spinner animation="grow" variant="danger" />
        <Spinner animation="grow" variant="danger" />
        <Spinner animation="grow" variant="danger" />
        <Spinner animation="grow" variant="danger" />
      </div>
    </MiniLoading>
  );
};

const MiniLoading = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  .spinners {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    margin: 3rem 0;
  }
`;
export default MiniLoader;
