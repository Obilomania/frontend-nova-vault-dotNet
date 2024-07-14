import React, { useEffect, useState } from "react";
import MainLayout from "../components/layout/MainLayout";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaBitcoin } from "react-icons/fa";
import { TbZoomMoney } from "react-icons/tb";
import { RiLuggageDepositFill } from "react-icons/ri";
import { BsCashCoin, BsHourglassSplit } from "react-icons/bs";
import { useDispatch } from "react-redux";
import Loader from "../components/Loader";


const Dashboard = () => {

  const dispatch = useDispatch();
  const [cantWithdraw, setCantWithdraw] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  //API CALLS  ===========================================================
  useEffect(() => {
    setIsLoading(true);
    async function userTransactions() {
      // const userTotalAccountBalance = 400;
      // const userTotalDepositAmount = 1500;
      // const userPendingDepositAmount = 200;
      // const userTotalWithdrawalAmount = 350;
      // const userPendingWithdrawaltotal =200;
      // const userLastWithdrawalAmount =800;
      // const getAlltransactions = [200,500,400];
      // const lastDeposit = 200;

      // dispatch(user_account_balance_amount(userTotalAccountBalance));
      // dispatch(user_total_deposit_amount(userTotalDepositAmount));
      // dispatch(user_pending_deposit_amount(userPendingDepositAmount));
      // dispatch(user_last_deposit_amount(lastDeposit));
      // dispatch(user_last_deposit(lastDeposit));
      // dispatch(user_total_withdrawal_amount(userTotalWithdrawalAmount));
      // dispatch(user_pending_withdrwawal_amount(userPendingWithdrawaltotal));
      // dispatch(user_last_withdrawal_amount(userLastWithdrawalAmount));
      // dispatch(all_user_transactions(getAlltransactions));
      setIsLoading(false);
    }
    userTransactions();
    setIsLoading(false);
  }, [dispatch]);

  // All Transactions from Redux ===========================================================
  // const allTransaction = useSelector(
  //   (state) => state.persistedReducer.transactions
  // );

  // //Top Up Balance Settings ===========================================================
  let currentPlan = "silver";
  let accountBalance = 300;

  useEffect(() => {
    if (currentPlan === "Gold" || accountBalance <= 7000) {
      setCantWithdraw(true);
    } else if (currentPlan === "Silver" || accountBalance <= 3500) {
      setCantWithdraw(true);
    } else if (currentPlan === "Plantinum" || accountBalance <= 7000) {
      setCantWithdraw(true);
    } else if (currentPlan === "Diamond" || accountBalance >= 2500) {
      setCantWithdraw(true);
    }
  }, [accountBalance, currentPlan]);

  // if (!allTransaction?.userAccountBalance) {
  //   return (
  //     <Loader />
  //   )
  // }

  return (
    <MainLayout>
      {accountBalance === 1 ||
        (accountBalance === 2 && <Loader />)}
      <Dash>
        <div className="dashboard-content">
          {/* <Time /> */}
          <hr />
          <br />
          <div className="dash-content-content">
            <div className="left-dash dash">
              <div className="balance">
                <h6>ACCOUNT BALANCE</h6>
                <hr />
                <div className="dollar">
                  <span>$</span>
                  <span>1400</span>
                </div>
                <hr />
                <div className="call-to-action">
                  {currentPlan === "Bronze" || !currentPlan ? (
                    <Link to={"/my-new-deposit"}>DEPOSIT</Link>
                  ) : (
                    <Link to={"/topUp"}>TOP-UP</Link>
                  )}
                  {accountBalance === 0 || accountBalance > 300 ? (
                    <p>CANT WITHDRAW</p>
                  ) : (
                    <Link to={"/withdraw"}>WITHDRAW</Link>
                  )}
                </div>
              </div>
              <div className="referals">
                <div className="view-profile">
                  <Link to={"/my-profile"}>VIEW PROFILE</Link>
                </div>
              </div>
            </div>
            <div className="middle-dash dash">
              <div className="one-dash">
                <div className="dash-icons">
                  <FaBitcoin />
                </div>
                <div className="inside-dash">
                  <span>$ 600</span>
                  <p className="dark">TOTAL DEPOSIT</p>
                </div>
              </div>
              <div className="two-dash">
                <div className="dash-icons">
                  <RiLuggageDepositFill />
                </div>
                <div className="inside-dash">
                  <span className="text-danger fw-bold">
                    $ {544}
                  </span>
                  <p className="dark">PENDING DEPOSIT</p>
                </div>
              </div>
              <div className="one-dash">
                <div className="dash-icons">
                  <BsHourglassSplit />
                </div>
                <div className="inside-dash">
                  <span>$ {433}</span>
                  <p className="dark">LAST DEPOSIT</p>
                </div>
              </div>
              <div className="two-dash">
                <Link to={"/all-my-deposits"}>MY DEPOSITS</Link>
              </div>
            </div>

            <div className="right-dash dash">
              <div className="one-dash">
                <div className="dash-icons">
                  <FaBitcoin />
                </div>
                <div className="inside-dash">
                  <span>$ 566</span>
                  <p className="dark">TOTAL WITHDRAWAL</p>
                </div>
              </div>
              <div className="two-dash">
                <div className="dash-icons">
                  <BsCashCoin />
                </div>
                <div className="inside-dash">
                  <span className="text-danger fw-bold">
                    $ 455
                  </span>
                  <p className="dark">PENDING WITHDRAWAL</p>
                </div>
              </div>
              <div className="one-dash">
                <div className="dash-icons">
                  <TbZoomMoney />
                </div>
                <div className="inside-dash">
                  $ 244
                  <p className="dark">LAST WITHDRAWAL</p>
                </div>
              </div>
              <div className="two-dash">
                <Link to={"/transactions"}>TRANSACTIONS</Link>
              </div>
            </div>
          </div>
        </div>
      </Dash>
    </MainLayout>
  );
};

const Dash = styled.div`
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
  .dash {
    width: 32%;
  }

  .left-dash {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 2rem;
    .balance {
      width: 100%;
      background: rgba(214, 214, 214, 0.5);
      padding: 1.5rem 1rem;
      border-radius: 0.5rem;
      h6 {
        font-weight: 500;
      }
      .dollar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 2rem;
        font-weight: 700;
      }
      .call-to-action {
        display: flex;
        align-items: center;
        justify-content: space-between;
        P {
          text-decoration: none;
          color: white;
          background: var(--primary);
          border: 3px solid var(--primary);
          border-radius: 2rem;
          padding: 0.5rem 1rem;
          font-weight: 500;
          letter-spacing: 0px;
          transition: var(--transition);
          margin-top: 1rem;
          font-size: 0.8rem;
        }
        a {
          text-decoration: none;
          color: black;
          background: none;
          border: 3px solid black;
          border-radius: 2rem;
          padding: 0.5rem 2rem;
          font-weight: 500;
          letter-spacing: 1px;
          transition: var(--transition);
          font-size: 0.8rem;
          &:hover {
            background: black;
            color: white;
          }
        }
      }
    }

    .referals .view-profile {
      width: 100%;
      a {
        width: 100%;
        text-decoration: none;
        color: black;
        background: none;
        border: 3px solid black;
        border-radius: 2rem;
        padding: 0.5rem 2rem;
        font-weight: 500;
        letter-spacing: 1px;
        transition: var(--transition);
        font-size: 0.8rem;
        &:hover {
          background: black;
          color: white;
        }
      }
    }

    .referals {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: rgba(214, 214, 214, 0.5);
      padding: 1rem 2rem;
      text-align: center;
      border-radius: 0.5rem;
      width: 100%;
      input {
        width: 100%;
        background: var(--light);
        color: black;
        font-weight: 600;
        text-align: center;
        padding: 0.2rem;
        border: none;
      }
      button {
        margin-top: 0.5rem;
        border: 2px solid var(--light);
        background: var(--light);
        padding: 0.2rem 1.5rem;
        border-radius: 2rem;
        color: white;
        letter-spacing: 1px;
        transition: var(--transition);
        &:hover {
          background: none;
          color: var(--light);
        }
      }
    }
  }
  .middle-dash,
  .right-dash {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: flex-start;
    /* gap: 2rem; */
    background: white;
    border-radius: 0.5rem;
    .one-dash,
    .two-dash {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      font-size: 0.8rem;
      gap: 1rem;
      padding: 0.8rem 2rem;
      width: 100%;
      /* height:5rem; */
    }
    .dash-icons {
      font-size: 2rem;
      margin-bottom: 1rem;
    }
    .inside-dash {
      display: flex;
      flex-direction: column;
      align-items: start;
      p {
        font-size: 1rem;
      }
    }
    .dark {
      font-weight: 600;
      font-size: 0.8rem;
    }
    .two-dash {
      background: rgba(214, 214, 214, 0.2);
    }
    a {
      text-decoration: none;
      background: black;
      color: white;
      border: 3px solid black;
      border-radius: 2rem;
      padding: 0.5rem 2rem;
      font-weight: 500;
      letter-spacing: 1px;
      transition: var(--transition);
      margin: 1.2rem auto;
      &:hover {
        color: black;
        background: none;
      }
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
    }
    .dash {
      width: 32%;
    }
    .left-dash {
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: center;
      gap: 1rem;
      .balance {
        width: 100%;
        background: rgba(214, 214, 214, 0.5);
        padding: 1.5rem 1rem;
        border-radius: 0.5rem;
        h6 {
          font-weight: 500;
        }
        .dollar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 2rem;
          font-weight: 700;
        }
        .call-to-action {
          display: flex;
          align-items: center;
          justify-content: space-between;
          a {
            text-decoration: none;
            color: black;
            background: none;
            border: 3px solid black;
            border-radius: 2rem;
            padding: 0.5rem 1rem;
            font-size: 0.8rem;
            font-weight: 500;
            letter-spacing: 1px;
            transition: var(--transition);
            &:hover {
              background: black;
              color: white;
            }
          }
        }
      }
      .referals {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: rgba(214, 214, 214, 0.5);
        padding: 1rem;
        text-align: center;
        border-radius: 0.5rem;
        input {
          width: 100%;
          background: var(--light);
          color: white;
          text-align: center;
          padding: 0.2rem;
          border: none;
        }
        button {
          margin-top: 1.2rem;
          border: 2px solid var(--light);
          background: var(--light);
          padding: 0.5rem 2rem;
          font-size: 0.8rem;
          border-radius: 2rem;
          color: white;
          letter-spacing: 1px;
          transition: var(--transition);
          &:hover {
            background: none;
            color: var(--light);
          }
        }
      }
    }
    .middle-dash,
    .right-dash {
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: flex-start;
      /* gap: 2rem; */
      background: white;
      border-radius: 0.5rem;
      .one-dash,
      .two-dash {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 1rem;
        padding: 0.8rem 2rem;
        width: 100%;
        /* height:5rem; */
      }
      .dash-icons {
        font-size: 3rem;
        margin-bottom: 1rem;
      }
      .inside-dash {
        display: flex;
        flex-direction: column;
        align-items: start;
        p {
          font-size: 1rem;
        }
      }
      .dark {
        font-weight: 600;
      }
      .two-dash {
        background: rgba(214, 214, 214, 0.2);
      }
      a {
        text-decoration: none;
        background: black;
        color: white;
        border: 3px solid black;
        border-radius: 2rem;
        padding: 0.5rem 2rem;
        font-size: 0.8rem;
        font-weight: 500;
        letter-spacing: 1px;
        transition: var(--transition);
        margin: 1.2rem auto;
        &:hover {
          color: black;
          background: none;
        }
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
    padding: 0rem 1rem;
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
    .dash {
      width: 100%;
    }
    .left-dash {
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: center;
      gap: 2rem;
      .balance {
        width: 100%;
        background: rgba(214, 214, 214, 0.5);
        padding: 1.5rem 1rem;
        border-radius: 0.5rem;
        h6 {
          font-weight: 500;
        }
        .dollar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 2rem;
          font-weight: 700;
        }
        .call-to-action {
          display: flex;
          align-items: center;
          justify-content: space-between;
          a {
            text-decoration: none;
            color: black;
            background: none;
            border: 3px solid black;
            border-radius: 2rem;
            padding: 0.5rem 2rem;
            font-weight: 500;
            letter-spacing: 1px;
            transition: var(--transition);
            &:hover {
              background: black;
              color: white;
            }
          }
        }
      }
      .referals {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: rgba(214, 214, 214, 0.5);
        padding: 1rem 2rem;
        text-align: center;
        border-radius: 0.5rem;
        width: 100%;
        input {
          width: 100%;
          background: var(--light);
          color: white;
          text-align: center;
          padding: 0.2rem;
          border: none;
        }
        button {
          margin-top: 0.5rem;
          border: 2px solid var(--light);
          background: var(--light);
          padding: 0.2rem 1.5rem;
          border-radius: 2rem;
          color: white;
          letter-spacing: 1px;
          transition: var(--transition);
          &:hover {
            background: none;
            color: var(--light);
          }
        }
      }
    }
    .middle-dash,
    .right-dash {
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: flex-start;
      /* gap: 2rem; */
      background: white;
      border-radius: 0.5rem;
      .one-dash,
      .two-dash {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 1rem;
        padding: 0.8rem 2rem;
        width: 100%;
        /* height:5rem; */
      }
      .dash-icons {
        font-size: 3rem;
        margin-bottom: 1rem;
      }
      .inside-dash {
        display: flex;
        flex-direction: column;
        align-items: start;
        p {
          font-size: 1.2rem;
        }
      }
      .dark {
        font-weight: 600;
      }
      .two-dash {
        background: rgba(214, 214, 214, 0.2);
      }
      a {
        text-decoration: none;
        background: black;
        color: white;
        border: 3px solid black;
        border-radius: 2rem;
        padding: 0.5rem 2rem;
        font-weight: 500;
        letter-spacing: 1px;
        transition: var(--transition);
        margin: 1.2rem auto;
        &:hover {
          color: black;
          background: none;
        }
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
    padding: 0rem 1rem;
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
    .dash {
      width: 100%;
    }
    .left-dash {
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: center;
      gap: 2rem;
      .balance {
        width: 100%;
        background: rgba(214, 214, 214, 0.5);
        padding: 1.5rem 1rem;
        border-radius: 0.5rem;
        h6 {
          font-weight: 500;
        }
        .dollar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 2rem;
          font-weight: 700;
        }
        .call-to-action {
          display: flex;
          align-items: center;
          justify-content: space-between;
          a {
            text-decoration: none;
            color: black;
            background: none;
            border: 3px solid black;
            border-radius: 2rem;
            padding: 0.5rem 2rem;
            font-weight: 500;
            letter-spacing: 1px;
            transition: var(--transition);
            &:hover {
              background: black;
              color: white;
            }
          }
        }
      }
      .referals {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: rgba(214, 214, 214, 0.5);
        padding: 1rem 2rem;
        text-align: center;
        border-radius: 0.5rem;
        input {
          width: 100%;
          background: var(--light);
          color: white;
          text-align: center;
          padding: 0.2rem;
          border: none;
        }
        button {
          margin-top: 0.5rem;
          border: 2px solid var(--light);
          background: var(--light);
          padding: 0.2rem 1.5rem;
          border-radius: 2rem;
          color: white;
          letter-spacing: 1px;
          transition: var(--transition);
          &:hover {
            background: none;
            color: var(--light);
          }
        }
      }
    }
    .middle-dash,
    .right-dash {
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: flex-start;
      /* gap: 2rem; */
      background: white;
      border-radius: 0.5rem;
      .one-dash,
      .two-dash {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 1rem;
        padding: 0.8rem 2rem;
        width: 100%;
        /* height:5rem; */
      }
      .dash-icons {
        font-size: 3rem;
        margin-bottom: 1rem;
      }
      .inside-dash {
        display: flex;
        flex-direction: column;
        align-items: start;
        p {
          font-size: 1.2rem;
        }
      }
      .dark {
        font-weight: 600;
      }
      .two-dash {
        background: rgba(214, 214, 214, 0.2);
      }
      a {
        text-decoration: none;
        background: black;
        color: white;
        border: 3px solid black;
        border-radius: 2rem;
        padding: 0.5rem 2rem;
        font-weight: 500;
        letter-spacing: 1px;
        transition: var(--transition);
        margin: 1.2rem auto;
        &:hover {
          color: black;
          background: none;
        }
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
    padding: 0rem 1rem;
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
    .dash {
      width: 100%;
    }
    .left-dash {
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: center;
      gap: 2rem;
      .balance {
        width: 100%;
        background: rgba(214, 214, 214, 0.5);
        padding: 1.5rem 1rem;
        border-radius: 0.5rem;
        h6 {
          font-weight: 500;
        }
        .dollar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 2rem;
          font-weight: 700;
        }
        .call-to-action {
          display: flex;
          align-items: center;
          justify-content: space-between;
          a {
            text-decoration: none;
            color: black;
            background: none;
            border: 3px solid black;
            border-radius: 2rem;
            padding: 0.2rem 1rem;
            font-weight: 500;
            letter-spacing: 1px;
            transition: var(--transition);
            font-size: 0.8rem;
            &:hover {
              background: black;
              color: white;
            }
          }
        }
      }
      .referals {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: rgba(214, 214, 214, 0.5);
        padding: 1rem;
        text-align: center;
        border-radius: 0.5rem;
        input {
          width: 100%;
          background: var(--light);
          color: white;
          text-align: center;
          padding: 0.2rem;
          border: none;
        }
        button {
          margin-top: 0.5rem;
          border: 2px solid var(--light);
          background: var(--light);
          padding: 0.2rem 1rem;
          font-size: 0.8rem;
          border-radius: 2rem;
          color: white;
          letter-spacing: 1px;
          transition: var(--transition);
          &:hover {
            background: none;
            color: var(--light);
          }
        }
      }
    }
    .middle-dash,
    .right-dash {
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: flex-start;
      /* gap: 2rem; */
      background: white;
      border-radius: 0.5rem;
      .one-dash,
      .two-dash {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 1rem;
        padding: 0.8rem 2rem;
        width: 100%;
        /* height:5rem; */
      }
      .dash-icons {
        font-size: 3rem;
        margin-bottom: 1rem;
      }
      .inside-dash {
        display: flex;
        flex-direction: column;
        align-items: start;
        p {
          font-size: 1rem;
        }
      }
      .dark {
        font-weight: 600;
      }
      .two-dash {
        background: rgba(214, 214, 214, 0.2);
      }
      a {
        text-decoration: none;
        background: black;
        color: white;
        border: 3px solid black;
        border-radius: 2rem;
        padding: 0.2rem 1rem;
        font-weight: 500;
        letter-spacing: 1px;
        transition: var(--transition);
        font-size: 0.8rem;
        margin: 1.2rem auto;
        &:hover {
          color: black;
          background: none;
        }
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
    padding: 0rem 1rem;
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
    .dash {
      width: 100%;
    }
    .left-dash {
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: center;
      gap: 2rem;
      .balance {
        width: 100%;
        background: rgba(214, 214, 214, 0.5);
        padding: 1.5rem 1rem;
        border-radius: 0.5rem;
        h6 {
          font-weight: 500;
        }
        .dollar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 2rem;
          font-weight: 700;
        }
        .call-to-action {
          display: flex;
          align-items: center;
          justify-content: space-between;
          a {
            text-decoration: none;
            color: black;
            background: none;
            border: 3px solid black;
            border-radius: 2rem;
            padding: 0.2rem 1rem;
            font-weight: 500;
            letter-spacing: 1px;
            transition: var(--transition);
            font-size: 0.8rem;
            &:hover {
              background: black;
              color: white;
            }
          }
        }
      }
      .referals {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: rgba(214, 214, 214, 0.5);
        padding: 1rem;
        text-align: center;
        border-radius: 0.5rem;
        input {
          width: 100%;
          background: var(--light);
          color: white;
          text-align: center;
          padding: 0.2rem;
          border: none;
        }
        button {
          margin-top: 0.5rem;
          border: 2px solid var(--light);
          background: var(--light);
          padding: 0.2rem 1rem;
          font-size: 0.8rem;
          border-radius: 2rem;
          color: white;
          letter-spacing: 1px;
          transition: var(--transition);
          &:hover {
            background: none;
            color: var(--light);
          }
        }
      }
    }
    .middle-dash,
    .right-dash {
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: flex-start;
      /* gap: 2rem; */
      background: white;
      border-radius: 0.5rem;
      .one-dash,
      .two-dash {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 1rem;
        padding: 0.8rem 2rem;
        width: 100%;
        /* height:5rem; */
      }
      .dash-icons {
        font-size: 3rem;
        margin-bottom: 1rem;
      }
      .inside-dash {
        display: flex;
        flex-direction: column;
        align-items: start;
        p {
          font-size: 1rem;
        }
      }
      .dark {
        font-weight: 600;
      }
      .two-dash {
        background: rgba(214, 214, 214, 0.2);
      }
      a {
        text-decoration: none;
        background: black;
        color: white;
        border: 3px solid black;
        border-radius: 2rem;
        padding: 0.2rem 1rem;
        font-weight: 500;
        letter-spacing: 1px;
        transition: var(--transition);
        font-size: 0.8rem;
        margin: 1.2rem auto;
        &:hover {
          color: black;
          background: none;
        }
      }
    }
  }
`;
export default Dashboard;
