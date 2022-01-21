import React, { useEffect, useState } from "react";
import styled from "styled-components";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
const KEY =
  "pk_test_51KJK2KSG2UTbTxblxEBdP3eSJArZVvf6bS12uj25JbVl9vbCeUkKXgoobZYRzwo4pVELn3JBX3ZBmAJVJUaYNSto00yGBDLeI6";
function Pay() {
  const [stripeToken, setStripeToken] = useState(null);

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          "http://localhost:5000/api/checkout/payment",
          { tokenId: stripeToken.id, amount: 2000 }
        );
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken]);

  return (
    <Container>
      <StripeCheckout
        name="SJInc"
        image="https://i.pinimg.com/originals/ca/8d/af/ca8dafdcead0540ec669c5c6b4f0d102.jpg"
        billingAddress
        shippingAddress
        description="Your total is $20"
        amount={2000}
        token={onToken}
        stripeKey={KEY}
      >
        <Button>Pay Now</Button>
      </StripeCheckout>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  border: none;
  width: 120;
  border-radius: 5;
  padding: 20px;
  background-color: black;
  justify-content: center;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;
export default Pay;
