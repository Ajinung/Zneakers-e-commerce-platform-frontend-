import React from "react";
import styled from "styled-components";
import { FaOpencart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../GlobalRedux/Store";
import { logOutUser } from "../GlobalRedux/ReduxState";

const Header = () => {
  const userdata = useAppSelector((state) => state.myReducer.currentUser);
  const dispatch = useAppDispatch();

  const readCartQuantity = useAppSelector(
    (state) => state.myReducer.totalQuantity
  );

  // console.log(readCartQuantity);

  return (
    <div>
      <Container>
        <Wrapper>
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <Logo>Zneakers</Logo>
          </NavLink>
          <Navigation>
            <Nav>Home</Nav>
            <Nav>About</Nav>
            <Nav>Product</Nav>
            <Nav>Shop</Nav>
          </Navigation>
          {userdata?.name ? (
            <Auth>
              <p>
                <FaOpencart /> <Items>{readCartQuantity}</Items>
              </p>
              <NavLink to="/signin" style={{ textDecoration: "none" }}>
                <button
                  onClick={() => {
                    dispatch(logOutUser());
                  }}
                >
                  sign out
                </button>
              </NavLink>
            </Auth>
          ) : (
            <Auth>
              <NavLink to="/signin" style={{ textDecoration: "none" }}>
                <button>sign in</button>
              </NavLink>
            </Auth>
          )}
        </Wrapper>
      </Container>
    </div>
  );
};

export default Header;

const Items = styled.div`
  padding: 1px 8px;
  background-color: #000;
  color: #fff;
  font-weight: 600;
  border-radius: 100px;
  margin-left: 5px;
  font-size: 16px;
`;

const Auth = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  p {
    margin: 0;
    display: flex;
    /* margin-top: 5px; */
    font-size: 25px;
    opacity: 0.9;
  }

  button {
    padding: 10px 20px;
    background-color: #000;
    border: none;
    color: #fff;
    font-size: 15px;

    :hover {
      cursor: pointer;
    }
  }
`;

const Nav = styled.p`
  margin: 0;
  font-size: 16.7px;
  transition: all 350ms ease;
  :hover {
    cursor: pointer;
    border-bottom: 1px solid #000;
  }
`;

const Navigation = styled.div`
  display: flex;
  gap: 50px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Logo = styled.h1`
  margin: 0;
  text-transform: uppercase;
  color: #000;
  font-weight: 800;
`;

const Wrapper = styled.div`
  width: 95%;
  margin: auto;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  border-bottom: 1px solid #00000030;
  background-color: #f3f1f1;
  /* position: fixed;
  top: 0;
  left: 0; */
`;
