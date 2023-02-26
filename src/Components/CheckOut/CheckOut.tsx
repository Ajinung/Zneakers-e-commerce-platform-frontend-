import React from "react";
import styled from "styled-components";
import {
  addToCart,
  removeFromCart,
  removeItem,
} from "../GlobalRedux/ReduxState";
import { useAppDispatch, useAppSelector } from "../GlobalRedux/Store";
import pic from "../../Asset/yeezy.jpg";

const CheckOut = () => {
  const readCart = useAppSelector((state) => state.myReducer.cart);
  const dispatch = useAppDispatch();

  return (
    <div>
      <Container>
        <Wrapper>
          <Top>
            <h1>Your Shopping Cart</h1>
            <p>all items in your cart</p>
          </Top>
          <Bottom>
            <Right>
              {readCart?.map((props) => (
                <CartItem key={props._id}>
                  <Image src={pic} />
                  <Desc>
                    <Title>
                      <h1>{props.title}</h1>
                      <Qty>
                        <Button
                          onClick={() => {
                            dispatch(addToCart(props));
                          }}
                        >
                          +
                        </Button>
                        <Text>{props.cartQuantity}</Text>
                        <Button
                          onClick={() => {
                            dispatch(removeFromCart(props));
                          }}
                        >
                          -
                        </Button>
                      </Qty>
                      <Price>N{props.price}</Price>
                    </Title>
                    <SoldOut>
                      <p>in stock</p>
                      <button
                        onClick={() => {
                          dispatch(removeItem(props));
                        }}
                      >
                        remove
                      </button>
                    </SoldOut>
                  </Desc>
                </CartItem>
              ))}
            </Right>
            <Left>
              <SummaryWrapper>
                <h1>Order Summary</h1>
                <SubTotal>
                  <p>Subtotal</p>
                  <h1>N20,000</h1>
                </SubTotal>
                <SubTotal>
                  <p>Voucher</p>
                  <h1>none</h1>
                </SubTotal>
                <SubTotal>
                  <p>Order total</p>
                  <h1>N20,000</h1>
                </SubTotal>

                <Btn>
                  <button>Checkout</button>
                  <span>Learn more Taxes and Shipping infomation</span>
                </Btn>
              </SummaryWrapper>
            </Left>
          </Bottom>
        </Wrapper>
      </Container>
    </div>
  );
};

export default CheckOut;

const Price = styled.button`
  width: 100px;
  height: 5vh;
  border: 2px solid #00000027;
  font-size: 14px;

  :hover {
    cursor: pointer;
  }
`;

const Text = styled.span`
  margin: 0;
  font-size: 20px;
`;

const Button = styled.button`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  border-radius: 50px;
  background-color: transparent;
  border: 1px solid #00000076;
  color: #00000076;
`;

const Qty = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const SoldOut = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    color: green;
    font-weight: 600;
    font-size: 17px;
    border: 0;

    :hover {
      cursor: pointer;
    }
  }

  p {
    padding: 3px 8px;
    border-radius: 20px;
    margin: 0;
    border: 2px solid #00000027;
    color: #0000009e;
  }
`;

const Title = styled.div`
  /* margin: 0; */
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    margin: 0;
    font-size: 1.24rem;
    font-weight: 600;
    width: 200px;
  }
`;

const Desc = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
const Image = styled.img`
  width: 200px;
  height: 20vh;
  margin-right: 20px;
  object-fit: cover;
`;

const Btn = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  text-align: center;

  button {
    padding: 10px 20px;
    background-color: #000;
    color: #fff;
    font-size: 20px;
    transition: all 450ms ease;

    :hover {
      cursor: pointer;
      opacity: 0.95;
    }
  }

  span {
    margin-top: 10px;
  }
`;

const SubTotal = styled.div`
  width: 100%;
  height: 10vh;
  border-bottom: 1px solid #00000027;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    margin: 0;
    font-size: 1.2rem;
    font-weight: 600;
  }
`;

const SummaryWrapper = styled.div`
  width: 80%;
  margin: auto;
  position: sticky;
  top: 0;
`;

const CartItem = styled.div`
  padding: 20px;
  display: flex;
  margin-bottom: 20px;
`;

const Right = styled.div`
  width: 750px;

  border-right: 1px solid #00000027;

  @media screen and (max-width: 768px) {
    width: 100%;
    border-right: none;
    border-bottom: 2px solid #00000027;
  }
`;
const Left = styled.div`
  width: 750px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Bottom = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 20px;
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
  width: 100%;
  margin-bottom: 60px;
`;
