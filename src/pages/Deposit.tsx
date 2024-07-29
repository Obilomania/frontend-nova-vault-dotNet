import React, { useState } from "react";
import styled from "styled-components";
import Accordion from "react-bootstrap/Accordion";
import { Link, useNavigate } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import MainLayout from "../components/layout/MainLayout";
import Loader from "../components/Loader";
import Time from "../components/Time";
import { makeADeposit } from "../redux/authRedux/userAuthService";

const Deposit = () => {
  const [iAmount, setIAmount] = useState<any>("");
  // const [data, setData] = useState([]);
  const [transaction, setTransaction] = useState("");
  const [selectPlan, setSelectPlan] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const transactionRedux = useSelector(
    (state: any) => state.persistedReducer.transaction
  );
  const userInfo = useSelector((state: any) => state.persistedReducer.auth);
  let theTotalDeposit = transactionRedux?.userDepositTotal;
  const copyClicked = () => {
    toast.success("Wallet Copied to Clipboard");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Use a regular expression to remove non-numeric characters
    const numericValue = value.replace(/[^0-9]/g, "");
    setIAmount(numericValue);
  };
  const handleTransaction = (e: any) => {
    setTransaction(e.target.value);
  };

  const handleSelectChange = (e: any) => {
    setSelectPlan(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (selectPlan === "") {
      return toast.error("Please Select a valid Plan");
    }
    if (!iAmount) {
      return toast.error("Please enter a valid amount");
    }
    if (!transaction) {
      return toast.error("Please Blockchain transaction ID");
    }
    if (iAmount < 50) {
      return toast.error("Cant invest less than $50");
    }
    if (
      (selectPlan === "Bronze" && iAmount < 50) ||
      (selectPlan === "Bronze" && iAmount > 300)
    ) {
      return toast.error("Plan doesnt align with Amount");
    }
    if (
      (selectPlan === "Silver" && iAmount > 3500) ||
      (selectPlan === "Silver" && iAmount < 300)
    ) {
      return toast.error("Plan doesnt align with Amount");
    }
    if (
      (selectPlan === "Gold" && iAmount > 7000) ||
      (selectPlan === "Gold" && iAmount < 3500)
    ) {
      return toast.error("Plan doesnt align with Amount");
    }
    if (
      (selectPlan === "Platinum" && iAmount > 25000) ||
      (selectPlan === "Platinum" && iAmount < 7000)
    ) {
      return toast.error("Plan doesnt align with Amount");
    }
    if (selectPlan === "Diamond" && iAmount < 25000) {
      return toast.error("Plan doesnt align with Amount");
    }
    setLoading(true);
    await makeADeposit({
      AppUserId: userInfo.id,
      plan: selectPlan,
      amount: iAmount,
      transactionID: transaction,
    });
    navigate("/dashboard");
    setLoading(false);
  };
  return (
    <MainLayout>
      {loading && <Loader />}
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
              <div className="btcWallet-address">
                <p className="walletAddress text-center">
                  bc1qpm63hne4x550ane3x632msnqtxdetegjlzg4ns
                </p>
                <CopyToClipboard text="bc1qpm63hne4x550ane3x632msnqtxdetegjlzg4ns">
                  <button onClick={copyClicked}>COPY WALLET ADDRESS</button>
                </CopyToClipboard>
                <p className="text-danger">
                  <b>BITCOIN ONLY </b>
                </p>
              </div>
              <form onSubmit={handleSubmit}>
                <br />
                <div className="plan-form">
                  <label>Select Investment Plan:</label>

                  <select value={selectPlan} onChange={handleSelectChange}>
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
                    type="text"
                    placeholder="$0.00"
                    name="iAmount"
                    value={iAmount}
                    onChange={(e) => handleInputChange(e)}
                  />
                </div>
                <div className="plan-form">
                  <label>Transaction ID :</label>
                  <input
                    type="text"
                    placeholder="dsfsdjhkjdbsd78***"
                    name="transaction"
                    value={transaction}
                    onChange={(e) => handleTransaction(e)}
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
export default Deposit;
