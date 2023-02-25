import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import bg from "../../Asset/scatteredForcefields.svg";

const Signin = () => {
  return (
    <div>
      <Container>
        <Logo>Zneakers</Logo>
        <Wrapper>
          <AuthArea>
            <h2>Sign In</h2>
            <input
              type="email"
              placeholder="eMail"
              required
              onChange={(e) => {
                // setEmail(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="password"
              required
              minLength={8}
              onChange={(e) => {
                // setPassword(e.target.value);
              }}
            />
            <span>
              No account? <Account to="/register">Create one!</Account>
            </span>
          </AuthArea>
          <Buttons>
            <Button color="#fff" background="#000" type="submit">
              Sign in
            </Button>
          </Buttons>
        </Wrapper>
        <Footer>Developed by Isaac Etor. © {new Date().getFullYear()}</Footer>
      </Container>
    </div>
  );
};

export default Signin;

// const Container = styled.div``
// const Container = styled.div``
const Footer = styled.button`
  width: 100%;
  border: 0;
  background-color: transparent;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f8f7f7bd;
  font-size: 15px;
`;
const Button = styled.button<{ color: string; background: string }>`
  background-color: ${(props) => props.background};
  width: 120px;
  height: 40px;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border: 0;
  color: ${(props) => props.color};
  transition: all 350ms;

  :hover {
    border: 2px solid #da5d00;
    background-color: transparent;
    color: #da5d00;
    cursor: pointer;
  }
`;

const Account = styled(NavLink)`
  margin-left: 5px;
  text-decoration: none;
  color: #da5d00;
`;

const Buttons = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const AuthArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  input {
    height: 40px;
    border: 0;
    outline: 0;
    border-bottom: 1px solid #da5e0060;
    background-color: transparent;
    font-size: 16px;
    color: #000000b5;
    margin-bottom: 20px;
  }

  span {
    display: flex;
    font-size: 14px;
  }

  h2 {
    margin: 15px 0px;
    font-weight: 500;
    color: #000000cf;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 3rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 20px;
  text-transform: uppercase;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
    color: #da5d00;
    margin-top: 30px;
  }
`;

const Wrapper = styled.form`
  max-width: 370px;
  width: calc(100% - 40px);
  padding: 44px;
  min-width: 320px;
  background-color: #f8f9f8;
  box-shadow: rgba(99, 99, 99, 0.156) 0px 2px 8px 0px;

  @media screen and (max-width: 768px) {
    width: 90%;
    height: 100%;
    box-shadow: none;
    min-width: 90%;
    max-width: 90%;
    padding: 0;
    padding-top: 44px;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 89.9vh;
  background-color: #000000;
  background-image: url(${bg});
  background-size: cover;
  color: #000000ca;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: poppins;
  overflow: hidden;

  @media screen and (max-width: 550px) {
    width: 100%;
    background: none;
    background-color: none;
    background-color: #f8f9f8;
  }
`;