import React from "react";
import styled from "styled-components";
import nike from "../../Asset/nikeShoe.jpg";

const Special = () => {
  return (
    <div>
      <Container>
        <Left>
          <img src={nike} alt="" />
        </Left>

        <Right>
          <TextHold>
            <h1>
              your street favourite <br /> nike airforce 1
            </h1>

            <p>Hip hop's favourite sneaker now in stock</p>
            <span>Browse Collection</span>
          </TextHold>
        </Right>
      </Container>
    </div>
  );
};

export default Special;

const TextHold = styled.div`
  padding-left: 40px;
  color: #efefef;

  h1 {
    margin: 0;
    font-size: 3.5rem;
    line-height: 3.5rem;
    text-transform: capitalize;
    font-weight: 600;
  }

  p {
    margin: 0;
    font-size: 20px;
    margin-top: 25px;
    margin-bottom: 20px;
  }

  span {
    text-decoration: underline;

    :hover {
      cursor: pointer;
    }
  }
`;

const Left = styled.div`
  width: 751.4px;
  height: 70vh;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Right = styled.div`
  width: 751.4px;
  height: 70vh;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  width: 95%;
  margin: auto;
  background-color: #000;
  border-radius: 20px;
  margin-bottom: 60px;
  margin-top: 60px;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    width: 100%;
    border-radius: 0;
    margin-bottom: 0px;
  }
`;
