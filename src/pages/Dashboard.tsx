import React, { useEffect, useState } from "react";
import MainLayout from "../components/layout/MainLayout";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaBitcoin } from "react-icons/fa";
import { TbZoomMoney } from "react-icons/tb";
import { RiLuggageDepositFill } from "react-icons/ri";
import { BsCashCoin, BsHourglassSplit } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllUserDeposit,
  getAllUserWithdrawal,
  getUserAccountBalance,
  getUserLastDeposit,
  getUserLastWithdrawal,
  getUserPendingWithdrawal,
  getUserTotalDepositBalance,
  getUserTotalPendingDepositBalance,
  getUserWithdrawalTotal,
} from "../redux/authRedux/userAuthService";
import {
  all_user_deposits,
  all_user_withdrawals,
  user_account_balance,
  user_deposit_total,
  user_last_deposit,
  user_last_withdrawal,
  user_pending_withdrawal_total,
  user_pendingDeposit_total,
  user_withdrawal_total,
} from "../redux/transactions/transactionSlice";
import Time from "../components/Time";
import withAuth from "../HOC/withAuth";

const Dashboard = () => {
  const dispatch = useDispatch();
  let [userAccountBalance, setUserAccountBalance] = useState<any>(0);
  let [depositTotal, setDepositTotal] = useState<any>(0);
  let [pendingDepositTotal, setPendingDepositTotal] = useState<any>(0);
  let [userLastDeposit, setUserLastDeposit] = useState<any>(null);
  let [withdrawalTotal, setWithdrawalTotal] = useState<any>(0);
  let [pendingWithdrawalTotal, setPendingWithdrawalTotal] = useState<any>(0);
  let [lastWithdrawal, setLastWithdrawal] = useState<any>(null);
  let [allWithdrawal, setAllWithdrawal] = useState<any>(null);
  let [cantWithdraw, setCantWithdraw] = useState(false);
  let [allUserDeposit, setAllUserDeposit] = useState<[]>([]);
  const userInfo = useSelector((state: any) => state.persistedReducer.auth);
  const id = userInfo?.id;

  //***********EFFECT TO GET ALL USER BALANCE ******** */
  useEffect(() => {
    getUserAccountBalance(id)
      .then((data) => {
        setUserAccountBalance(data);
      })
      .catch((error) => {
        // console.error("Error:", error);
      });
    dispatch(user_account_balance(userAccountBalance));
  }, []);

  //***********EFFECT TO GET TOTAL DEPOSIT BALANCE ******** */
  useEffect(() => {
    getUserTotalDepositBalance(id)
      .then((data) => {
        setDepositTotal(data);
      })
      .catch((error) => {
        // console.error("Error:", error);
      });
    dispatch(user_deposit_total(depositTotal));
  }, []);

  //***********EFFECT TO GET ALL PENDING DEPOSIT TOTAL******** */
  useEffect(() => {
    getUserTotalPendingDepositBalance(id)
      .then((data) => {
        setPendingDepositTotal(data);
      })
      .catch((error) => {
        // console.error("Error:", error);
      });
    dispatch(user_pendingDeposit_total(pendingDepositTotal));
  }, []);

  //***********EFFECT TO GET ALL LAST DEPOSIT ******** */
  useEffect(() => {
    getUserLastDeposit(id)
      .then((data) => {
        setUserLastDeposit(data);
      })
      .catch((error) => {
        // console.error("Error:", error);
      });
    dispatch(user_last_deposit(userLastDeposit));
  }, []);

  //***********EFFECT TO GET WITHDRAWAL TOTAL ******** */
  useEffect(() => {
    getUserWithdrawalTotal(id)
      .then((data) => {
        setWithdrawalTotal(data);
      })
      .catch((error) => {
        // console.error("Error:", error);
      });
    dispatch(user_withdrawal_total(withdrawalTotal));
  }, []);

  //***********EFFECT TO GET PENDINGWITHDRAWAL TOTAL ******** */
  useEffect(() => {
    getUserPendingWithdrawal(id)
      .then((data) => {
        setPendingWithdrawalTotal(data);
      })
      .catch((error) => {
        // console.error("Error:", error);
      });
    dispatch(user_pending_withdrawal_total(pendingWithdrawalTotal));
  }, []);

  //***********EFFECT TO GET All USER WITHDRAWAL ******** */
  useEffect(() => {
    getAllUserWithdrawal(id)
      .then((data) => {
        setAllWithdrawal(data);
      })
      .catch((error) => {
        // console.error("Error:", error);
      });
    dispatch(all_user_withdrawals(lastWithdrawal));
  }, []);

  //***********EFFECT TO GET LAST WITHDRAWAL ******** */
  useEffect(() => {
    getUserLastWithdrawal(id)
      .then((data) => {
        setLastWithdrawal(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    if (!lastWithdrawal) {
      dispatch(user_last_withdrawal(null));
    }
    dispatch(user_last_withdrawal(lastWithdrawal));
  }, []);

  //***********EFFECT TO GET ALL DEPOSIT ******** */
  useEffect(() => {
    getAllUserDeposit(id)
      .then((data) => {
        setAllUserDeposit(data);
      })
      .catch((error) => {
        // console.error("Error:", error);
      });
    dispatch(all_user_deposits(allUserDeposit));
  }, []);

  // //Top Up Balance Settings ===========================================================
  let currentPlan = userLastDeposit?.plan;
  let accountBalance = userAccountBalance;

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

  return (
    <MainLayout>
      <Dash>
        <div className="dashboard-content">
          <Time />
          <hr />
          <br />
          <div className="dash-content-content">
            <div className="left-dash dash">
              <div className="balance">
                <h6>ACCOUNT BALANCE</h6>
                <hr />
                <div className="dollar">
                  <span>$ </span>
                  <span>{userAccountBalance}</span>
                </div>
                <hr />
                <div className="call-to-action">
                  {currentPlan === "Bronze" || !currentPlan ? (
                    <Link to={"/my-new-deposit"}>DEPOSIT</Link>
                  ) : (
                    <Link to={"/topUp"}>TOP-UP</Link>
                  )}
                  {userAccountBalance === 0 || accountBalance > 300 ? (
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
                  <span>
                    $ {!depositTotal || depositTotal === 0 ? 0 : depositTotal}
                  </span>
                  <p className="dark">TOTAL DEPOSIT</p>
                </div>
              </div>
              <div className="two-dash">
                <div className="dash-icons">
                  <RiLuggageDepositFill />
                </div>
                <div className="inside-dash">
                  <span className="text-danger fw-bold">
                    ${" "}
                    {!pendingDepositTotal || pendingDepositTotal === 0
                      ? 0
                      : pendingDepositTotal}
                  </span>
                  <p className="dark">PENDING DEPOSIT</p>
                </div>
              </div>
              <div className="one-dash">
                <div className="dash-icons">
                  <BsHourglassSplit />
                </div>
                <div className="inside-dash">
                  <span>
                    ${" "}
                    {!userLastDeposit || userLastDeposit.amount === 0
                      ? 0
                      : userLastDeposit.amount}
                  </span>
                  <p className="dark">LAST DEPOSIT</p>
                </div>
              </div>
              <div className="two-dash my-depo-btn">
                <Link to={"/all-my-deposits"}>MY DEPOSITS</Link>
              </div>
            </div>

            <div className="right-dash dash">
              <div className="one-dash">
                <div className="dash-icons">
                  <FaBitcoin />
                </div>
                <div className="inside-dash">
                  <span>$ {withdrawalTotal}</span>
                  <p className="dark">TOTAL WITHDRAWAL</p>
                </div>
              </div>
              <div className="two-dash">
                <div className="dash-icons">
                  <BsCashCoin />
                </div>
                <div className="inside-dash">
                  <span className="text-danger fw-bold">
                    $ {pendingWithdrawalTotal}
                  </span>
                  <p className="dark">PENDING WITHDRAWAL</p>
                </div>
              </div>
              <div className="one-dash">
                <div className="dash-icons">
                  <TbZoomMoney />
                </div>
                <div className="inside-dash">
                  $ {!lastWithdrawal ? <>0</> : <>{lastWithdrawal}</>}
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
  .my-depo-btn a {
    visibility: hidden;
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
        font-size: 1.2rem;
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
          padding: 0.3rem 1rem;
          font-weight: 500;
          letter-spacing: 0px;
          transition: var(--transition);
          margin-top: 1rem;
          font-size: 0.7rem;
        }
        a {
          text-decoration: none;
          color: black;
          background: none;
          border: 3px solid black;
          border-radius: 2rem;
          padding: 0.3rem 1rem;
          font-weight: 500;
          letter-spacing: 1px;
          transition: var(--transition);
          font-size: 0.7rem;
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
        padding: 0.3rem 1rem;
        font-weight: 500;
        letter-spacing: 1px;
        transition: var(--transition);
        font-size: 0.7rem;
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
        padding: 0.3rem 1rem;
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
      padding: 0.3rem 1rem;
      width: 100%;
      /* height:5rem; */
    }
    .dash-icons {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
    .inside-dash {
      display: flex;
      flex-direction: column;
      align-items: start;
      p {
        font-size: 0.7rem;
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
      padding: 0.3rem 1rem;
      font-weight: 500;
      letter-spacing: 1px;
      transition: var(--transition);
      margin: 1.2rem auto;
      font-size: 0.7rem;
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
export default withAuth(Dashboard);
