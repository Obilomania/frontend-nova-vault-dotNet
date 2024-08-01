import React, { useState } from "react";
import MainLayout from "../components/layout/MainLayout";
import Loader from "../components/Loader";
import {  useSelector } from "react-redux";
import CurrentUser from "../interfaces/currentUserModel";
import styled from "styled-components";
import { toast } from "react-toastify";
import Time from "../components/Time";
import { makeAWithdrawal } from "../redux/authRedux/userAuthService";
import { useNavigate } from "react-router-dom";
import withAuth from "../HOC/withAuth";

const Withdraw = () => {
  const [Loading, setLoading] = useState(false);
  const userInfo: CurrentUser = useSelector(
    (state: any) => state.persistedReducer.auth
  );
  const transactionRedux = useSelector(
    (state: any) => state.persistedReducer.transaction
  );
    const navigate = useNavigate();
  const [withdraw, setWithdraw] = useState({
    AppUserId: userInfo?.id,
    Amount: "",
    Wallet: userInfo?.btcWallet,
    IsProcessing: false,
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setWithdraw({ ...withdraw, [name]: value });
    };
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log(withdraw)
    setLoading(true);
    if (!withdraw.Amount || !withdraw.Wallet) {
      setLoading(false);
      return toast.error("Please fill all fields");
    }
    if (transactionRedux?.userAccountBalance < withdraw.Amount) {
      setLoading(false);
      return toast.error("Insufficient funds");
    }

    await makeAWithdrawal(withdraw);


    setLoading(false);
  };
  return (
    <MainLayout>
      {Loading && <Loader />}
      <WithdrawSection>
        <>
          <div className="dashboard-content">
            <Time />
            <hr />
            <div className="right-dash dash">
              <h5 className="heading-deposit-form">MAKE A WITHDRAWAL</h5>
              <h6>
                ACCOUNT BALANCE &nbsp;
                <span>$ {transactionRedux?.userAccountBalance}</span>
              </h6>
              <form onSubmit={handleSubmit}>
                {" "}
                <br />
                <div className="plan-form">
                  <label>Withdrawal Amount:</label>
                  <input
                    type="text"
                    placeholder="$0.00"
                    name="Amount"
                    value={withdraw.Amount}
                    onChange={(e) => handleInputChange(e)}
                  />
                </div>
                <div className="plan-form">
                  <label>
                    <span> (Contact Admin to change Wallet Address)</span> :
                  </label>
                  <input
                    type="text"
                    placeholder="BTC Wallet Address"
                    name="Wallet"
                    value={withdraw.Wallet}
                    onChange={(e) => handleInputChange(e)}
                    disabled
                  />
                </div>
                <button className="submit">WITHDRAW</button>
              </form>{" "}
              <br />
              <button className="go-back" onClick={() =>navigate("/dashboard")}>&nbsp;GO BACK &nbsp;</button>
            </div>
          </div>
        </>
      </WithdrawSection>
    </MainLayout>
  );
};

const WithdrawSection = styled.div`
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
  h6 {
    margin-top: 0.5rem;
    span {
      color: var(--primary);
      font-weight: 600;
    }
  }
  .right-dash {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
    gap: 0.5rem;
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
        border: 1px solid black;
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
    margin-top: 0rem;
    &:hover {
      background: none;
      color: black;
    }
  }
  @media screen and (max-width: 1200px) {
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
    h6 {
      margin-top: 1rem;
      span {
        color: var(--primary);
        font-weight: 600;
      }
    }
    .right-dash {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
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
      padding: 1rem 2rem;
      width: 100%;
      min-height: 80vh;
      height: fit-content;
      background: rgba(214, 214, 214, 0.5);
    }
    h6 {
      margin-top: 1rem;
      span {
        color: var(--primary);
        font-weight: 600;
      }
    }
    .right-dash {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
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
      padding: 1rem 2rem;
      width: 100%;
      min-height: 80vh;
      height: fit-content;
      background: rgba(214, 214, 214, 0.5);
    }
    h6 {
      margin-top: 1rem;
      span {
        color: var(--primary);
        font-weight: 600;
      }
    }
    .right-dash {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
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
  }
  @media screen and (max-width: 420px) {
  }
  @media screen and (max-width: 350px) {
  }
`;
export default withAuth(Withdraw);
