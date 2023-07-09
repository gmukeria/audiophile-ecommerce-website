import React, { useContext, useState } from "react";
import { Link } from "@tanstack/router";
import styled from "styled-components";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { CartContext } from "../../App";
import { StringInput } from "../../components/sharerd/inputs";
import Modal from "../../components/modals/Modal";
import SegmentTitle from "./SegmentTitle";
import OrderDone from "./OrderDone";
import Summary from "./Summary";

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.number().required(),
    address: yup.string().required(),
    zip: yup.number().required(),
    city: yup.string().required(),
    country: yup.string().required(),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

const Checkout = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const [orderDone, setOrderDone] = useState<boolean>(false);
  const { orderDoneHandler } = useContext(CartContext);
  const { cartData } = useContext(CartContext);

  const onSubmit = (data: FormData) => {
    console.log(data);
    setOrderDone(true);
    orderDoneHandler();
  };

  return (
    <Wrapper>
      <Header>
        <Link to="/">
          <SubButton>Go Back</SubButton>
        </Link>
      </Header>

      {cartData.length != 0 ? (
        <Form onSubmit={handleSubmit(onSubmit)}>
          <TopContainer>
            <Title>CHECKOUT</Title>
            <Billing>
              <SegmentTitle title="Billing details" />
              <InputSegment>
                <StringInput
                  placeholder="Alexei Ward"
                  label="Name"
                  error={errors.name}
                  {...register("name")}
                />
                <StringInput
                  placeholder="alexei@mail.com"
                  label="Email Address"
                  error={errors.email}
                  {...register("email")}
                />
                <StringInput
                  placeholder="+1 202-555-0136"
                  label="Phone Number"
                  error={errors.phone}
                  {...register("phone")}
                />
              </InputSegment>
            </Billing>
            <Shipping>
              <SegmentTitle title="shipping info" />
              <InputSegment>
                <StringInput
                  width="634px"
                  placeholder="1137 Williams "
                  label="Your Address"
                  error={errors.address}
                  {...register("address")}
                />
                <StringInput
                  placeholder="10001"
                  label="ZIP Code"
                  error={errors.zip}
                  {...register("zip")}
                />
                <StringInput
                  placeholder="New York"
                  label="City"
                  error={errors.city}
                  {...register("city")}
                />
                <StringInput
                  placeholder="United States"
                  label="Country"
                  error={errors.country}
                  {...register("country")}
                />
              </InputSegment>
            </Shipping>
          </TopContainer>
          <BottomContainer>
            <Title>summary</Title>
            <Summary />
          </BottomContainer>
        </Form>
      ) : (
        <EmptyContainer>
          <Title>Cart is Empty</Title>
        </EmptyContainer>
      )}

      <Modal
        open={orderDone}
        onClose={() => setOrderDone(false)}
        overlayClose={false}
      >
        <OrderDone onClose={() => setOrderDone(false)} />
      </Modal>
    </Wrapper>
  );
};

export default Checkout;

const Wrapper = styled.div`
  padding-bottom: 90px;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TopContainer = styled.div`
  margin-top: 24px;
  padding-left: 23px;
  width: 327px;
  display: flex;
  flex-direction: column;

  background-color: var(--white);
  border-radius: 8px;

  @media (min-width: 770px) {
    width: 690px;
  }

  @media (min-width: 1280px) {
    width: 730px;
  }
`;

const BottomContainer = styled.div`
  margin-top: 24px;
  padding-left: 23px;
  width: 327px;
  display: flex;
  flex-direction: column;

  background-color: var(--white);
  border-radius: 8px;

  @media (min-width: 770px) {
    width: 690px;
  }

  @media (min-width: 1280px) {
    width: 350px;
    margin-left: 23px;
    padding-left: 0px;
  }
`;

const InputSegment = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 770px) {
    width: 690px;

    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const Form = styled.form`
  @media (min-width: 1280px) {
    display: flex;
    flex-direction: row;
  }
`;

const Title = styled.h1`
  margin-top: 24px;

  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: var(--black);

  @media (min-width: 1280px) {
    margin-left: 23px;
  }
`;

const Billing = styled.div`
  margin-top: 34px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Shipping = styled.div`
  margin-top: 34px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Payment = styled.div`
  margin-top: 34px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Header = styled.div`
  margin-top: 15px;
  width: 100%;
  padding-left: 15%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const SubButton = styled.button`
  background-color: transparent;
  border-color: transparent;
  text-decoration: none;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  color: var(--black);
  opacity: 0.5;
  &:hover {
    color: var(--orange);
  }
`;

const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4%;
  margin-bottom: 4%;
`;
