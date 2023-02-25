import React from "react";
import styled from "styled-components";

const Popular = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Top>
            New Arrivals. <span> This kicks just came in</span>
          </Top>
          <Bottom>
            <Product bg="#FFC33A"></Product>
            <Product bg="#198DAC"></Product>
            <Product bg="#D1F58C"></Product>
          </Bottom>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Popular;

const Product = styled.div<{ bg: string }>`
  width: 470px;
  height: 36vh;
  background-color: ${({ bg }) => bg};
  border-radius: 20px;
`;

const Bottom = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;

  /* @media screen and (max-width: 768px) {
    align-items: center;
  } */
`;

const Top = styled.h1`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 0;
  color: #fff;
  font-size: 2.5rem;
  margin-bottom: 25px;
  font-weight: 700;
  color: #000;
  gap: 5px;
  text-transform: capitalize;

  span {
    color: orangered;
  }

  @media screen and (max-width: 768px) {
    font-size: 2.2rem;
    gap: 0;
    letter-spacing: 1px;
    line-height: 2.3rem;
  }
`;

const Wrapper = styled.div`
  width: 95%;
  margin: auto;
`;
const Container = styled.div`
  width: 100%;
  margin-top: 30px;
`;
