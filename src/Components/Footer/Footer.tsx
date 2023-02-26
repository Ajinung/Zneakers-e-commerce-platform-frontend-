import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <div>
      <Container>
        © {new Date().getFullYear()} Zneakers by{" "}
        <a href="mailto:isaacetor7@gmail.com">Izick Etor</a>
      </Container>
    </div>
  );
};

export default Footer;

const Container = styled.div`
  width: 100%;
  height: 10vh;
  background-color: #000;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  a {
    color: #fff;
    text-decoration: underline;
    font-size: 20px;
    font-weight: 600;
  }
`;
