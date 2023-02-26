import React from "react";
import styled from "styled-components";
import pic from "../../Asset/yeezy.jpg";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { allProducts } from "../API/Endpoints";

const Product = () => {
  const gettingProducts = useQuery({
    queryKey: ["products"],
    queryFn: allProducts,
  });

  if (gettingProducts?.data?.isLoading) return <h2>Loading</h2>;

  return (
    <div>
      <Container>
        <Wrapper>
          <Top>
            These kicks <span> just got in</span>
          </Top>
          <Bottom>
            {gettingProducts?.data?.data.map((props: any) => (
              <Products key={props._id}>
                <Link
                  to={`/product/${props._id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Image>
                    <img src={pic} alt="" />
                  </Image>
                </Link>
                <Text>
                  <ProductName>
                    <h1>{props.title}</h1>
                    <p>{`color: ${props.color}`}</p>
                  </ProductName>
                  <PriceRate>
                    <Link
                      to={`/product/${props._id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <Price>{`N${props.price}`}</Price>
                    </Link>
                    <Rate>
                      <AiFillStar style={{ color: "orange" }} />
                      <AiFillStar style={{ color: "orange" }} />
                      <AiFillStar style={{ color: "orange" }} />
                      <AiFillStar style={{ color: "orange" }} />
                    </Rate>
                  </PriceRate>
                </Text>
              </Products>
            ))}
          </Bottom>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Product;

const Price = styled.button`
  padding: 10px 20px;
  border: 2px solid orangered;
  margin-top: 20px;
  font-size: 16px;

  :hover {
    cursor: pointer;
  }
`;
const Rate = styled.div`
  margin-top: 25px;
`;

const ProductName = styled.div`
  padding-left: 20px;
  h1 {
    margin: 0;
    padding-top: 20px;
  }

  p {
    margin: 0;
    font-weight: 600;
    color: #000000b4;
  }
`;
const PriceRate = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 20px;
`;

const Image = styled.div`
  width: 100%;
  height: 65%;
  background-color: #f8fafc;
  display: flex;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    :hover {
      cursor: pointer;
    }
  }
`;

const Text = styled.div`
  width: 100%;
  height: 35%;
`;

const Products = styled.div`
  width: 400px;
  height: 70vh;
  overflow: hidden;
  border-radius: 20px;
`;

const Bottom = styled.div`
  width: 100%;
  margin-bottom: 90px;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  gap: 30px;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const Top = styled.h1`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 0;
  color: #000;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 20px;
  gap: 10px;
  text-transform: capitalize;

  span {
    color: orangered;
  }

  @media screen and (max-width: 400px) {
    font-size: 2rem;
  }
`;

const Wrapper = styled.div`
  width: 95%;
  margin: auto;
`;

const Container = styled.div`
  width: 95%;
  margin: auto;
  margin-top: 50px;
`;
