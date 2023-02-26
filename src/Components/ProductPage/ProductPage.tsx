import React from "react";
import styled from "styled-components";
import Product from "../Product/Product";

const ProductPage = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Top>
            <h1>Zneakers Product</h1>
            <p>Browse various zneakers in our collection</p>
          </Top>
          <Bottom>
            <Product />
          </Bottom>
        </Wrapper>
      </Container>
    </div>
  );
};

export default ProductPage;

const Bottom = styled.div`
  /* height: 50vh; */

  p {
    font-size: 20px;
    opacity: 0.9;
  }
`;

const Top = styled.div`
  width: 100%;
  height: 30vh;
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-bottom: 1px solid #00000012;

  h1 {
    margin: 0;
    font-size: 3rem;
    font-weight: 600;

    @media screen and (max-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    margin: 0;
    font-size: 20px;
    margin-top: 10px;
    opacity: 0.9;
  }
`;
const Wrapper = styled.div`
  width: 95%;
  margin: auto;
`;

const Container = styled.div`
  margin-bottom: 60px;
`;
