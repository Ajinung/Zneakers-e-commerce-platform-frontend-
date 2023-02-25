import React from "react";
import styled from "styled-components";
import bg from "../../Asset/scatteredForcefields.svg";
import hero from "../../Asset/yeezyCrocs.png";

const Hero = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Right>
            <h1>
              Summer <br /> Collections <br /> <span>2023</span>
            </h1>

            <p>Exclusive collection for everyone</p>
            <button>Shop Now</button>
          </Right>
          <Left>
            <img src={hero} alt="" />
          </Left>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Hero;

const Left = styled.div`
  width: 751px;
  height: 90vh;
  /* background-color: #008000ab; */
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 55vh;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Right = styled.div`
  width: 751px;
  height: 90vh;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 55vh;
  }

  h1 {
    margin: 0;
    font-size: 6rem;
    line-height: 5.5rem;
    color: #f3f1f1;
    letter-spacing: 2px;

    @media screen and (max-width: 768px) {
      font-size: 3.7rem;
      line-height: 3.5rem;
      margin-left: 10px;
    }

    span {
      color: orangered;
    }
  }

  p {
    font-size: 20px;
    color: #f3f1f1;
    letter-spacing: 2px;

    @media screen and (max-width: 768px) {
      margin-left: 10px;
    }
  }

  button {
    padding: 15px 20px;
    width: 150px;
    margin-top: 50px;
    background-color: #f3f1f1;
    color: #000;
    font-size: 16px;

    @media screen and (max-width: 768px) {
      margin-left: 10px;
      margin-top: 20px;
    }
  }
`;

const Wrapper = styled.div`
  width: 95%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    width: 100%;
    /* height: 55vh; */
    flex-wrap: wrap;
  }
`;

const Container = styled.div`
  width: 100%;
  background-color: #000;
  background-image: url(${bg});
`;
