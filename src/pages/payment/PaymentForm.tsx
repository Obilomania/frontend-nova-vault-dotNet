import React, { useEffect, useState } from "react";
import styled from "styled-components";
import withAuth from "../../HOC/withAuth";
import MainLayout from "../../components/layout/MainLayout";
import axios from "axios";

const PaymentForm = () => {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [payCurrency, setPayCurrency] = useState("BTC");
  const [orderId, setOrderId] = useState("");
  const [paymentLink, setPaymentLink] = useState("");
  const [availableCurrencies, setAvailableCurrencies] = useState<any>([]);
  //Fetch available currencies
  var myHeaders = new Headers();
  myHeaders.append("x-api-key", "D03QQRS-HPTMHJF-NE3QDEX-9JD9P7D");
  var requestOptions: any = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };
  useEffect(() => {
    // Fetch available currencies from backend
    fetch("https://api.nowpayments.io/v1/merchant/coins", requestOptions)
      .then((response) => response.json())
      .then((result) => setAvailableCurrencies(result.selectedCurrencies))
      .catch((error) => console.log("error", error));
  }, []);

  //handle Submit Form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const callbackUrl = "https://yourdomain.com/payment-callback";
    try {
      const response = await axios.post(
        "https://yourapi.com/api/payments/create",
        {
          amount: parseFloat(amount),
          currency,
          payCurrency,
          orderId,
          callbackUrl,
        }
      );

      setPaymentLink(response.data.payment_url);
    } catch (error) {
      console.error("Error creating payment:", error);
    }
  };
  return (
    <MainLayout>
      <ThePayment>
        <div className="dashboard-content">
          <div className="dash-content-content">
            <div className="auth-content">
              <h2 className="heading">Create a Payment</h2>
              <form onSubmit={handleSubmit}>
                <div>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Amount in USD"
                    required
                  />
                </div>
                <div>
                  <select
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                  >
                    <option value="">Select Crypto Currency</option>
                    {availableCurrencies?.map((curr: any) => (
                      <option key={curr} value={curr}>
                        {curr}
                      </option>
                    ))}
                  </select>
                </div>

                {/* <div>
                  <label>Order ID:</label>
                  <input
                    type="text"
                    value={orderId}
                    onChange={(e) => setOrderId(e.target.value)}
                    required
                  />
                </div> */}
                <button type="submit">CREATE PAYMENT</button>
              </form>

              {paymentLink && (
                <div>
                  <h3>Payment Link</h3>
                  <a
                    href={paymentLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click here to pay
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </ThePayment>
    </MainLayout>
  );
};

const ThePayment = styled.div`
  width: 100%;
  position: relative;
  min-height: 80vh;
  height: fit-content;
  overflow: hidden;
  background-image: url("/images/Dash-BG.jpg");
  padding: 0rem 10rem;
  font-family: "Poppins", sans-serif;

  .dashboard-content {
    padding: 1rem 2rem;
    width: 100%;
    min-height: 80vh;
    height: fit-content;
    background: rgba(214, 214, 214, 0.5);
  }
  .dash-content-content {
    display: flex;
    align-items: start;
    justify-content: space-between;
  }
  .auth-content {
    position: absolute;
    top: 20%;
    left: 0;
    z-index: 8;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    form {
      width: 40%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: start;
      gap: 2rem;
      div {
        width: 100%;
      }
      select {
        border: 1px solid black;
        width: 100%;
        background: none;
        padding: 0.5rem;
        text-align: center;
        font-weight: 600;
      }
      .submit {
        background: black;
        color: white;
        font-weight: 500;
        letter-spacing: 1px;
        transition: var(--transition);
        border: 1px solid black;
        &:hover {
          border: 1px solid black;
          color: white;
          background: #1b1b1b;
        }
      }
      .form-input {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        width: 100%;
      }
      input {
        width: 100%;
        padding: 0.5rem;
        background: transparent;
        border: 1px solid black;
      }
      button {
        color: white;
        background: black;
        width: 100%;
        text-align: center;
        padding: 0.5rem;
      }
    }
  }
`;
export default withAuth(PaymentForm);
