import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Top>
            <h1>About Zneakers</h1>
            <p>you wish to know about our company?</p>
          </Top>
          <Bottom>
            <p>
              Zneakers is a sneaker company founded by Isaac Etor(Izick Etor)
            </p>
          </Bottom>
        </Wrapper>
      </Container>
    </div>
  );
};

export default About;

const Bottom = styled.div`
  height: 50vh;

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
