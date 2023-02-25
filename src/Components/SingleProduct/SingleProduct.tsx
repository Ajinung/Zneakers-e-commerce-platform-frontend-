import React from "react";
import pic from "../../Asset/yeezy.jpg";
import styled from "styled-components";
import { NavLink, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { aProduct } from "../API/Endpoints";
import { useAppDispatch, useAppSelector } from "../GlobalRedux/Store";
import { addToCart, removeFromCart } from "../GlobalRedux/ReduxState";

const SingleProduct = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const readCart = useAppSelector((state) => state.myReducer.cart);

  const readSingleIten = readCart.filter((el) => el._id === id);

  const oneProduct = useQuery({
    queryKey: ["singleProduct", id],
    queryFn: () => {
      return aProduct(id);
    },
  });

  const totalPrice = (items: any) =>
    items.reduce(
      (acc: number, item: any) => acc + item.cartQuantity * item.price,
      0
    );

  const newTotal = totalPrice(readCart);
  return (
    <div>
      <Container>
        <Wrapper>
          <Right>
            <img src={pic} alt="" />
          </Right>
          <Left>
            <TextWrap>
              <h1>{oneProduct?.data?.data?.title}</h1>
              <p>color: {oneProduct?.data?.data?.color}</p>
              <p>Total Price: {totalPrice(readCart)}</p>
              <Qty>
                <Button
                  disabled={
                    readSingleIten[0]?.cartQuantity ===
                    oneProduct?.data?.data.quantity
                  }
                  onClick={() => {
                    dispatch(addToCart(oneProduct?.data?.data));
                  }}
                >
                  +
                </Button>
                <Text>{readSingleIten[0]?.cartQuantity}</Text>
                <Button
                  onClick={() => {
                    dispatch(removeFromCart(oneProduct?.data?.data));
                  }}
                >
                  -
                </Button>
              </Qty>

              <Desc>
                <p>{oneProduct?.data?.data?.description}</p>
              </Desc>
              <NavLink to="/checkout" style={{ textDecoration: "none" }}>
                <CheckOut> check out</CheckOut>
              </NavLink>
            </TextWrap>
          </Left>
        </Wrapper>{" "}
      </Container>
    </div>
  );
};

export default SingleProduct;

const CheckOut = styled.button`
  padding: 10px 30px;
  font-size: 18px;
  margin-top: 30px;
  color: #fff;
  background-color: #000;
  transition: all 350ms ease;

  :hover {
    cursor: pointer;
    background-color: #f3f1f1;
    border: 2px solid #000;
    color: #000;
  }
`;

const Desc = styled.div``;

const Text = styled.span`
  margin: 0;
  font-size: 20px;
`;

const Button = styled.button`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  border-radius: 50px;

  :hover {
    cursor: pointer;
  }
`;

const Qty = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
  margin-top: 30px;
`;

const TextWrap = styled.div`
  margin-left: 30px;

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
    margin-bottom: 10px;
  }
`;

const Left = styled.div`
  width: 750px;
  /* height: 86.8vh; */
  display: flex;
  align-items: center;
  border-left: 1px solid #00000078;

  @media screen and (max-width: 1440px) {
    width: 650px;
  }
  @media screen and (max-width: 1024px) {
    width: 100%;
    height: 55vh;
    border-top: 1px solid #00000078;
    border-left: none;
  }
`;
const Right = styled.div`
  width: 750px;
  height: 86.8vh;

  @media screen and (max-width: 1440px) {
    width: 650px;
  }
  @media screen and (max-width: 1024px) {
    margin-bottom: 20px;
    width: 100%;
    height: 55vh;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Container = styled.div`
  width: 100%;
  background-color: #f3f1f1;
`;
const Wrapper = styled.div`
  width: 95%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  padding-top: 20px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
