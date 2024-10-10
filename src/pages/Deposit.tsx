import React, { useState } from "react";
import styled from "styled-components";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import MainLayout from "../components/layout/MainLayout";
import Time from "../components/Time";
import withAuth from "../HOC/withAuth";
import { toast } from "react-toastify";
import { makeADeposit } from "../redux/authRedux/userAuthService";

const Deposit = () => {
  const transactionRedux = useSelector(
    (state: any) => state.persistedReducer.transaction
  );
  const userInfo = useSelector((state: any) => state.persistedReducer.auth);
  const [price_amount, setPrice_Amount] = useState<any>(0);
  const [order_Description, setOrder_Description] = useState("");
  const [order_id] = useState(userInfo?.id + Date.now());

  let theTotalDeposit = transactionRedux?.userDepositTotal;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (order_Description === "") {
      return toast.error("Please Select a valid Plan");
    }
    if (!price_amount) {
      return toast.error("Please enter a valid amount");
    }
    if (price_amount < 50) {
      return toast.error("Cant invest less than $50");
    }
    if (
      (order_Description === "Bronze" && price_amount < 50) ||
      (order_Description === "Bronze" && price_amount > 300)
    ) {
      return toast.error("Plan doesnt align with Amount");
    }
    if (
      (order_Description === "Silver" && price_amount > 3500) ||
      (order_Description === "Silver" && price_amount < 300)
    ) {
      return toast.error("Plan doesnt align with Amount");
    }
    if (
      (order_Description === "Gold" && price_amount > 7000) ||
      (order_Description === "Gold" && price_amount < 3500)
    ) {
      return toast.error("Plan doesnt align with Amount");
    }
    if (
      (order_Description === "Platinum" && price_amount > 25000) ||
      (order_Description === "Platinum" && price_amount < 7000)
    ) {
      return toast.error("Plan doesnt align with Amount");
    }
    if (order_Description === "Diamond" && price_amount < 25000) {
      return toast.error("Plan doesnt align with Amount");
    }
   

    const apiKey: any = "0BMBZ1V-JTF47DV-QVCSR64-7ZJFXVQ";
    const paymentUrl = "https://api.nowpayments.io/v1/invoice";
    const paymentData = {
      price_amount: price_amount,
      price_currency: "usd",
      order_id: order_id,
      order_description: order_Description,
      ipn_callback_url: "https://nowpayments.io",
      success_url: "http://localhost:3000/payment-successful",
      cancel_url: "http://localhost:3000/payment-failed",
    };
    try {
      const response = await fetch(paymentUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": apiKey,
        },
        body: JSON.stringify(paymentData),
      })
      const data = await response.json();
      if (data && data.invoice_url) {
        window.location.href = data.invoice_url;
      } else {
        console.error("Failed to create payment", data)
      }
    } catch (error) {
      console.error("Failed to create payment", error)
      
    }
     await makeADeposit({
       AppUserId: userInfo.id,
       plan: order_Description,
       amount: price_amount,
       transactionID: order_id,
     });
 
  };
  return (
    <MainLayout>
      <MyDeposit>
        <div className="dashboard-content">
          <Time />
          <hr />
          <br />
          <div className="dash-content-content">
            <div className="left-dash dash">
              <div className="balance">
                <h6>INVESTMENT PLANS</h6>
                <hr />
              </div>
              <Accordion className="accordion">
                {theTotalDeposit > 45 ? (
                  ""
                ) : (
                  <Accordion.Item eventKey="0">
                    <Accordion.Header className="accordion-title">
                      <p>Bronze Package</p>
                    </Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <li>$50 - 300</li>
                        <li>2% PROFIT</li>
                        <li>AFTER 2 BUSINESS DAYS</li>
                        {/* <li>10% REFERRAL BONUS</li> */}
                        <li>24/7 CUSTOMER CARE</li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                )}

                <Accordion.Item eventKey="1">
                  <Accordion.Header className="accordion-title">
                    <p>Silver Package</p>
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li>$300 - $3500</li>
                      <li>4% PROFIT</li>
                      <li>AFTER 3 BUSINESS DAYS</li>
                      {/* <li>10% REFERRAL BONUS</li> */}
                      <li>24/7 CUSTOMER CARE</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                  <Accordion.Header className="accordion-title">
                    <p>Gold Package</p>
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li>$3500 - $7000</li>
                      <li>10% PROFIT</li>
                      <li>AFTER 5 BUSINESS DAYS</li>
                      {/* <li>10% REFERRAL BONUS</li> */}
                      <li>24/7 CUSTOMER CARE</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                  <Accordion.Header className="accordion-title">
                    <p>Plantinum Package</p>
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li>$7000 - $25000</li>
                      <li>17% PROFIT</li>
                      <li>AFTER 5 BUSINESS DAYS</li>
                      {/* <li>10% REFERRAL BONUS</li> */}
                      <li>24/7 CUSTOMER CARE</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4">
                  <Accordion.Header className="accordion-title">
                    <p>Diamond Package</p>
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li>$25000 - UNLIMITED</li>
                      <li>35% PROFIT</li>
                      <li>AFTER 48 HOURS</li>
                      {/* <li>10% REFERRAL BONUS</li> */}
                      <li>24/7 CUSTOMER CARE</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>

            <div className="right-dash dash">
              <h5 className="heading-deposit-form">Select a plan</h5>

              <form onSubmit={handleSubmit}>
                <br />
                <div className="plan-form">
                  <label>Select Investment Plan:</label>

                  <select
                    value={order_Description}
                    onChange={(e) => setOrder_Description(e.target.value)}
                  >
                    <option value="">
                      ----- Choose The Investment Plan of your Choice -----
                    </option>
                    {theTotalDeposit > 45 ? (
                      <>
                        <option value="Silver">Silver ($300 - $3500)</option>
                        <option value="Gold">Gold ($3500 - $7000)</option>
                        <option value="Platinum">
                          Platinum ($7000 - $25000)
                        </option>
                        <option value="Diamond">
                          Diamond ($25000 - unlimited)
                        </option>
                      </>
                    ) : (
                      <>
                        <option value="Bronze">Bronze ($50 -$300)</option>
                        <option value="Silver">Silver ($300 - $3500)</option>
                        <option value="Gold">Gold ($3500 - $7000)</option>
                        <option value="Platinum">
                          Platinum ($7000 - $25000)
                        </option>
                        <option value="Diamond">
                          Diamond ($25000 - unlimited)
                        </option>
                      </>
                    )}
                  </select>
                </div>
                <div className="plan-form">
                  <label>
                    Enter the amount you intend to invest{" "}
                    <span>(Numbers Only)</span> :
                  </label>
                  <input
                    type="number"
                    value={price_amount}
                    onChange={(e) => setPrice_Amount(e.target.value)}
                    placeholder="Amount in USD"
                    required
                  />
                </div>

                <button className="submit" type="submit">
                  INVEST
                </button>
                <Link to="/dashboard" className="go-back">
                  &nbsp; BACK &nbsp;
                </Link>
              </form>
            </div>
          </div>
        </div>
      </MyDeposit>
    </MainLayout>
  );
};
const MyDeposit = styled.div`
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
  input,
  select {
    border: 1px solid black;
  }
  .left-dash {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 2rem;
    width: 32%;

    .accordion {
      width: 100%;
      .accordion-title p {
        font-weight: 600;
        font-size: 1.2rem;
        letter-spacing: 1px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 1.5rem;
      }
    }
  }
  .right-dash {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: flex-start;
    width: 66%;
    background: white;
    border-radius: 0.5rem;
    padding: 1rem;
  }
  .heading-deposit-form {
    text-align: center;
    width: 100%;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 600;
  }
  .dash form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    span {
      color: var(--primary);
      font-weight: 600;
    }
    .plan-form {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      input {
        padding: 0.2rem 1rem;
        width: 100%;
      }
      select {
        padding: 0.2rem 1rem;
        width: 100%;
        text-align: center;
      }
    }
  }
  .submit {
    text-decoration: none;
    color: black;
    background: none;
    border: 3px solid black;
    border-radius: 2rem;
    padding: 0.2rem 2rem;
    font-weight: 500;
    letter-spacing: 2px;
    transition: var(--transition);
    &:hover {
      background: black;
      color: white;
      a {
        text-decoration: none;
        color: white;
      }
    }
    a {
      text-decoration: none;
      color: black;
    }
  }
  .go-back {
    text-decoration: none;
    color: white;
    background: black;
    border: 3px solid black;
    border-radius: 2rem;
    padding: 0.2rem 2rem;
    font-weight: 500;
    letter-spacing: 2px;
    transition: var(--transition);
    &:hover {
      background: none;
      color: black;
    }
  }
  .btcWallet-address {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    button {
      border: none;
      background: var(--background-color);
      color: white;
      font-size: 0.6rem;
      margin-bottom: 0.5rem;
      padding: 0.2rem 1rem;
      border-radius: 0.5rem;
      font-weight: 500;
      letter-spacing: 1px;
    }
  }
  @media screen and (max-width: 1200px) {
    width: 100%;
    position: relative;
    min-height: 80vh;
    height: fit-content;
    overflow: hidden;
    background-image: url("/images/Dash-BG.jpg");
    padding: 1rem;
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
    .left-dash {
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: center;
      gap: 2rem;
      width: 32%;

      .accordion {
        width: 100%;
        .accordion-title p {
          font-weight: 600;
          font-size: 1.2rem;
          letter-spacing: 1px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 1.5rem;
        }
      }
    }
    .right-dash {
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: flex-start;
      width: 66%;
      background: white;
      border-radius: 0.5rem;
      padding: 1rem;
    }
    .heading-deposit-form {
      text-align: center;
      width: 100%;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-weight: 600;
    }
    .dash form {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 1.5rem;
      width: 100%;
      span {
        color: var(--primary);
        font-weight: 600;
      }
      .plan-form {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100%;
        input {
          padding: 0.2rem 1rem;
          width: 100%;
        }
      }
    }
    .submit {
      text-decoration: none;
      color: black;
      background: none;
      border: 3px solid black;
      border-radius: 2rem;
      padding: 0.2rem 2rem;
      font-weight: 500;
      letter-spacing: 2px;
      transition: var(--transition);
      &:hover {
        background: black;
        color: white;
      }
    }
  }
  @media screen and (max-width: 900px) {
    width: 100%;
    position: relative;
    min-height: 80vh;
    height: fit-content;
    overflow: hidden;
    background-image: url("/images/Dash-BG.jpg");
    padding: 1rem;
    font-family: "Poppins", sans-serif;

    .dashboard-content {
      padding: 1rem;
      width: 100%;
      min-height: 80vh;
      height: fit-content;
      background: rgba(214, 214, 214, 0.5);
    }
    .dash-content-content {
      display: flex;
      align-items: start;
      justify-content: space-between;
      flex-direction: column;
    }
    .left-dash {
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: center;
      gap: 2rem;
      width: 100%;

      .accordion {
        width: 100%;
        .accordion-title p {
          font-weight: 600;
          font-size: 1rem;
          letter-spacing: 1px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 1.5rem;
        }
      }
    }
    .right-dash {
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: flex-start;
      width: 100%;
      background: white;
      border-radius: 0.5rem;
      padding: 1rem;
    }
    .heading-deposit-form {
      text-align: center;
      width: 100%;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-weight: 600;
    }
    .dash form {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 1.5rem;
      width: 100%;
      .plan-form {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100%;
        input {
          padding: 0.2rem 1rem;
          width: 100%;
        }
      }
    }
    .submit {
      text-decoration: none;
      color: black;
      background: none;
      border: 3px solid black;
      border-radius: 2rem;
      padding: 0.2rem 2rem;
      font-weight: 500;
      letter-spacing: 2px;
      transition: var(--transition);
      &:hover {
        background: black;
        color: white;
      }
    }
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    position: relative;
    min-height: 80vh;
    height: fit-content;
    overflow: hidden;
    background-image: url("/images/Dash-BG.jpg");
    padding: 1rem;
    font-family: "Poppins", sans-serif;

    .dashboard-content {
      padding: 1rem;
      width: 100%;
      min-height: 80vh;
      height: fit-content;
      background: rgba(214, 214, 214, 0.5);
    }
    .dash-content-content {
      display: flex;
      align-items: start;
      justify-content: space-between;
      flex-direction: column;
    }
    .left-dash {
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: center;
      gap: 2rem;
      width: 100%;

      .accordion {
        width: 100%;
        .accordion-title p {
          font-weight: 600;
          font-size: 1rem;
          letter-spacing: 1px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 1.5rem;
        }
      }
    }
    .right-dash {
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: flex-start;
      width: 100%;
      background: white;
      border-radius: 0.5rem;
      padding: 1rem;
    }
    .heading-deposit-form {
      text-align: center;
      width: 100%;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-weight: 600;
    }
    .dash form {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 1.5rem;
      width: 100%;
      .plan-form {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100%;
        input {
          padding: 0.2rem 1rem;
          width: 100%;
        }
      }
    }
    .submit {
      text-decoration: none;
      color: black;
      background: none;
      border: 2px solid black;
      border-radius: 2rem;
      padding: 0.2rem 2rem;
      font-weight: 500;
      letter-spacing: 2px;
      transition: var(--transition);
      &:hover {
        background: black;
        color: white;
      }
    }
  }
  @media screen and (max-width: 420px) {
    width: 100%;
    position: relative;
    min-height: 80vh;
    height: fit-content;
    overflow: hidden;
    background-image: url("/images/Dash-BG.jpg");
    padding: 1rem;
    font-family: "Poppins", sans-serif;

    .dashboard-content {
      padding: 1rem;
      width: 100%;
      min-height: 80vh;
      height: fit-content;
      background: rgba(214, 214, 214, 0.5);
    }
    .dash-content-content {
      display: flex;
      align-items: start;
      justify-content: space-between;
      flex-direction: column;
    }
    .left-dash {
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: center;
      gap: 2rem;
      width: 100%;

      .accordion {
        width: 100%;
        .accordion-title p {
          font-weight: 600;
          font-size: 1rem;
          letter-spacing: 1px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 1.5rem;
        }
      }
    }
    .right-dash {
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: flex-start;
      width: 100%;
      background: white;
      border-radius: 0.5rem;
      padding: 1rem;
    }
    .heading-deposit-form {
      text-align: center;
      width: 100%;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-weight: 600;
    }
    .dash form {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 1.5rem;
      width: 100%;
      .plan-form {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100%;
        input {
          padding: 0.2rem 1rem;
          width: 100%;
        }
      }
    }
    .submit {
      text-decoration: none;
      color: black;
      background: none;
      border: 2px solid black;
      border-radius: 2rem;
      padding: 0.1rem 2rem;
      font-weight: 500;
      letter-spacing: 2px;
      font-size: 0.8rem;
      transition: var(--transition);
      &:hover {
        background: black;
        color: white;
      }
    }
  }
  @media screen and (max-width: 350px) {
    width: 100%;
    position: relative;
    min-height: 80vh;
    height: fit-content;
    overflow: hidden;
    background-image: url("/images/Dash-BG.jpg");
    padding: 1rem;
    font-family: "Poppins", sans-serif;

    .dashboard-content {
      padding: 1rem;
      width: 100%;
      min-height: 80vh;
      height: fit-content;
      background: rgba(214, 214, 214, 0.5);
    }
    .dash-content-content {
      display: flex;
      align-items: start;
      justify-content: space-between;
      flex-direction: column;
    }
    .left-dash {
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: center;
      gap: 2rem;
      width: 100%;

      .accordion {
        width: 100%;
        .accordion-title p {
          font-weight: 600;
          font-size: 1rem;
          letter-spacing: 1px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 1.5rem;
        }
      }
    }
    .right-dash {
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: flex-start;
      width: 100%;
      background: white;
      border-radius: 0.5rem;
      padding: 1rem;
    }
    .heading-deposit-form {
      text-align: center;
      width: 100%;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-weight: 600;
    }
    .dash form {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 1.5rem;
      width: 100%;
      .plan-form {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100%;
        input {
          padding: 0.2rem 1rem;
          width: 100%;
        }
      }
    }
    .submit {
      text-decoration: none;
      color: black;
      background: none;
      border: 2px solid black;
      border-radius: 2rem;
      padding: 0.1rem 2rem;
      font-weight: 500;
      letter-spacing: 2px;
      font-size: 0.8rem;
      transition: var(--transition);
      &:hover {
        background: black;
        color: white;
      }
    }
  }
`;
export default withAuth(Deposit);
