import React from "react";
import styled from "styled-components";

const Special = () => {
  return (
    <div>
      <Container></Container>
    </div>
  );
};

export default Special;

const Container = styled.div`
  width: 95%;
  margin: auto;
  height: 70vh;
  background-color: bisque;
  margin-top: 60px;
  margin-bottom: 60px;
  border-radius: 20px;

  @media screen and (max-width: 768px) {
    width: 100%;
    border-radius: 0;
    margin-bottom: 0px;
  }
`;
