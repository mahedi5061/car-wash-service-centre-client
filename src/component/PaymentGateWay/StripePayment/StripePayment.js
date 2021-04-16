import React, { useEffect, useMemo, useState } from "react";
 import './StripePayment.css'
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement
} from "@stripe/react-stripe-js";
 

import useResponsiveFontSize from "../ResponsiveFontSize/ResponsiveFontSize";
import { Link } from "react-router-dom";
//Design for Payment Gateway.

const useOptions = () => {
  const fontSize = useResponsiveFontSize();
  const options = useMemo(
    () => ({
      style: {
        base: {
          fontSize,
           width:"250px",
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
            color: "#aab7c4"
          }
        },
        invalid: {
          color: "#9e2146"
        }
      }
    }),
    [fontSize]
  );

  return options;
};
const StripePayment = ({handlePaymentSuccess}) => {
  
   //Payment gateway system
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();
  const [paymentError,setPaymentError]=useState("");
  const [paymentSuccess,setPaymentSuccess]=useState("")
 
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
       
      return;
    }
    
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardNumberElement)
    });

    if (error) {
      setPaymentError(error.message);
      console.log('[error]', error);
      setPaymentSuccess(null)
    } else {
      setPaymentSuccess("Your Order is Successfully Complete !!");
      handlePaymentSuccess(paymentMethod.card.brand);
      setPaymentError(null);
      console.log('[PaymentMethod]', paymentMethod);
    }
  };

  useEffect(()=>{

  })
 
  return (
<div>
  
<form onSubmit={handleSubmit}>
    <label className=" text-secondary lbl">
      Card number
      <CardNumberElement
        options={options}
        onReady={() => {
          console.log("CardNumberElement [ready]");
        }}
        onChange={event => {
          console.log("CardNumberElement [change]", event);
        }}
        onBlur={() => {
          console.log("CardNumberElement [blur]");
        }}
        onFocus={() => {
          console.log("CardNumberElement [focus]");
        }}
      />
    </label><br></br>
    <label className="text-secondary lbl">
      Expiration date
      <CardExpiryElement
        options={options}
        onReady={() => {
          console.log("CardNumberElement [ready]");
        }}
        onChange={event => {
          console.log("CardNumberElement [change]", event);
        }}
        onBlur={() => {
          console.log("CardNumberElement [blur]");
        }}
        onFocus={() => {
          console.log("CardNumberElement [focus]");
        }}
      />
    </label><br></br>
    <label className="text-secondary lbl">
      CVC
      <CardCvcElement
        options={options}
        onReady={() => {
          console.log("CardNumberElement [ready]");
        }}
        onChange={event => {
          console.log("CardNumberElement [change]", event);
        }}
        onBlur={() => {
          console.log("CardNumberElement [blur]");
        }}
        onFocus={() => {
          console.log("CardNumberElement [focus]");
        }}
      />
    </label><br></br>
    <button className="btnDesign" type="submit" disabled={!stripe}>
      Pay
    </button>
  </form>
  <div>
    {
      paymentError && <p className="paymentError">{paymentError}</p>
    }
    {
      paymentSuccess && <div><br></br>
      <p   className="paymentSuccess">{paymentSuccess}</p> 
      <Link to="/booklists"><h6 className="order">Click here to view your order</h6></Link>
      </div>
    }
  </div>
</div>
 
  );
};
export default StripePayment;