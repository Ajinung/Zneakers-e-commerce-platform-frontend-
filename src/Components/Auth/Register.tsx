import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import bg from "../../Asset/scatteredForcefields.svg";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAppDispatch } from "../GlobalRedux/Store";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { newUser } from "../API/Endpoints";
import { logInUser } from "../GlobalRedux/ReduxState";

const Register = () => {
  const dispatch = useAppDispatch();

  const schema = yup
    .object({
      name: yup.string().required("field is required"),
      email: yup.string().email().required("email field is required"),
      password: yup.string().required("password field is required").min(4),
    })
    .required();

  type formData = yup.InferType<typeof schema>;

  const {
    handleSubmit,
    formState: { errors },
    reset,
    register,
  } = useForm<formData>({
    resolver: yupResolver(schema),
  });

  const post = useMutation({
    mutationKey: ["createUser"],
    mutationFn: newUser,
    onSuccess: (data) => {
      dispatch(logInUser(data.data));
    },
  });

  const Submit = handleSubmit((data) => {
    post.mutate(data);
    console.log(data);
    reset();
  });

  return (
    <div>
      <Container>
        <Logo>Zneakers</Logo>
        <Wrapper onSubmit={Submit}>
          <AuthArea>
            <h2>Create account</h2>
            <input {...register("name")} placeholder="FullName" />
            <p>{errors?.name && errors?.name?.message}</p>
            <input {...register("email")} placeholder="eMail" />
            <p>{errors?.email && errors?.email?.message}</p>
            <input
              {...register("password")}
              placeholder="Enter Password"
              type="password"
              aria-hidden="true"
            />
            <p>{errors?.password && errors?.password?.message}</p>
            <span>
              Already have an account? <Account to="/signin">Sign in!</Account>
            </span>
          </AuthArea>
          <Buttons>
            <Button type="submit" color="#fff" background="#000">
              Register
            </Button>
          </Buttons>
        </Wrapper>
        <Footer>Developed by Isaac Etor. © {new Date().getFullYear()}</Footer>
      </Container>
    </div>
  );
};

export default Register;

const Footer = styled.button`
  width: 100%;
  border: 0;
  background-color: transparent;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fffefebd;
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

const Buttons = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Account = styled(NavLink)`
  margin-left: 5px;
  text-decoration: none;
  color: #da5d00;
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

  p {
    margin: 0;
    color: red;
    margin-bottom: 10px;
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
  /* min-height: 330px; */
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
