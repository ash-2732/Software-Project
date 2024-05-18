import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useState } from "react";
import { IP_ADDRESS } from "../constant/constant";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";


const PaymentForm = ( props ) => {
  const [price, setPrice] = useState(0);
  const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, setErrorMessage] = useState(null);

  const { id } = props;
  const navigate = useNavigate();

  //console.log(id)


  const {currentUser} = useSelector((state) => state.user);

  var toke;
  if (currentUser != null) {
    toke = currentUser.accessToken;
  }
  const BuyCourse = async () => {
    
    try {
      const endpoint = `http://${IP_ADDRESS}/student/buyCourse/${id}`;
      const res = await fetch(`${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + toke,
        },
      });
      const data = await res.json();
      console.log(data);
      toast.success("COURSE BOUGHT SUCCESSFULLY");
      navigate("/studentcourses" , {state:data});
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  }
  const handlePayment = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch(
        `http://${IP_ADDRESS}/payment/create-payment-intent?amount=${price}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      console.log(data);
      BuyCourse();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (elements == null) {
      return;
    }

    // Trigger form validation and wallet collection
    const { error: submitError } = await elements.submit();
    if (submitError) {
      // Show error to your customer
      setErrorMessage(submitError.message);
      return;
    }

    // Create the PaymentIntent and obtain clientSecret from your server endpoint
    const res = await fetch(
      `http://${IP_ADDRESS}/payment/create-payment-intent`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: price }),
      }
    );

    const { client_secret: clientSecret } = await res.json();
    console.log(clientSecret);

    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: "https://example.com/order/123/complete",
      },
    });

    if (error) {
      setErrorMessage(error.message);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <PaymentElement />

        {/* <button type="submit" disabled={!stripe || !elements}>
          Pay
        </button> */}
        {/* Show error message to your customers */}
        {errorMessage && <div>{errorMessage}</div>}
      </form>
      <div className="mt-2">
        <h1 className="font-semibold">Amount</h1>
        <input
          type="number"
          placeholder="Price"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <button disabled={!stripe || !elements} onClick={handlePayment} className="focus:outline-none text-white bg-[#d54a5d] hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mt-3 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800 w-full">
          PAY
        </button>
      </div>
    </>
  );
};

export default PaymentForm;
