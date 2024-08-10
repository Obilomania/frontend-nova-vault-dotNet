import React, { useEffect, useState } from "react";
import Moment from "react-moment";
import CurrentUser from "../interfaces/currentUserModel";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { all_the_user_deposits, all_user_withdrawals, top_up_time, user_account_balance, user_deposit_total, user_last_deposit, user_last_withdrawal, user_pending_withdrawal_total, user_pendingDeposit_total, user_withdrawal_total } from "../redux/transactions/transactionSlice";
import { Dispatch } from "redux";
import { toast } from "react-toastify";
import { current_user_btcWallet, current_user_email, current_user_fullname, current_user_ID, current_user_login_status, user_role } from "../redux/authRedux/userAuthSlice";
import styled from "styled-components";
import { FiExternalLink } from "react-icons/fi";
import { all_applicationUser, all_app_deposits, all_withdrawals } from "../redux/adminRedux/adminSlice";

const Time = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userInfo: CurrentUser = useSelector(
    (state: any) => state.persistedReducer.auth
  );
  const transactionRedux = useSelector(
    (state: any) => state.persistedReducer.transaction
  );
  let lastDeposit = transactionRedux.userLastDeposit;
  let lastDepoDate = lastDeposit?.createdOn;
  let investmentPlan = lastDeposit?.plan;
  let SilverPlanFigure = 3;
  let GoldPlanFigure = 5;
  let PlantinumPlanFigure = 5;
  let DiamondPlanFigure = 2;

  if (investmentPlan === "Silver") {
    investmentPlan = SilverPlanFigure;
  } else if (investmentPlan === "Gold") {
    investmentPlan = GoldPlanFigure;
  } else if (investmentPlan === "Plantinum") {
    investmentPlan = PlantinumPlanFigure;
  } else if (investmentPlan === "Diamond") {
    investmentPlan = DiamondPlanFigure;
  }
  const currentDate = new Date(lastDepoDate);
  const daysLater = new Date(currentDate);

  daysLater.setDate(currentDate.getDate() + investmentPlan);
  let duration = daysLater.toLocaleString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    // second: "numeric",
  });

  useEffect(() => {
    if (duration) {
      dispatch(top_up_time(duration));
    }
  }, [dispatch, duration]);
  console.log();

  //Time and Greeting and Time note
  let today = new Date();
  let greeting = () => {
    if (today.getHours() >= 5 && today.getHours() < 11) {
      return "Good Morning";
    } else if (today.getHours() >= 11 && today.getHours() < 17) {
      return "Good Afternoon";
    } else if (today.getHours() >= 17 && today.getHours() < 24) {
      return " Good Evening";
    } else {
      return "Wow!!! its late, Why are you Up? ";
    }
  };

  const todaysDate = new Date().toLocaleString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    // second: "numeric",
  });


  async function logOut(dispatch: Dispatch<any>) {
    try {
      localStorage.clear();
      localStorage.removeItem("persistroot");
      dispatch(current_user_fullname(""));
      dispatch(current_user_ID(""));
      dispatch(current_user_email(""));
      dispatch(current_user_btcWallet(""));
      dispatch(current_user_login_status(false));
      dispatch(user_role(""));
      dispatch(user_last_withdrawal(null));
      dispatch(user_pending_withdrawal_total(0));
      dispatch(user_account_balance(0));
      dispatch(user_deposit_total(0));
      dispatch(user_pendingDeposit_total(0));
      dispatch(user_last_deposit(null));
      dispatch(user_withdrawal_total(0));
      dispatch(top_up_time(0));
      dispatch(all_the_user_deposits(null));
      dispatch(all_user_withdrawals(null));
      dispatch(all_app_deposits(null));
      dispatch(all_withdrawals(null));
      dispatch(all_applicationUser(null));

      navigate("/");
      toast.success("User Logged Out");
    } catch (error: any) {
      toast.success(error);
    }
  }

// Parse the date string into a Date object
  
  useEffect(() => {
    if (todaysDate === duration || todaysDate < duration) {
      toast.error("Top up time Due, Contact Admin");

      setTimeout(() => logOut(dispatch), 7000);
    }
  }, [todaysDate, duration, dispatch]);

  return (
    <Timing>
      <div className="time">
        <p className="clock">
          <Moment format="hh:mm:ss" interval={1000}></Moment>
        </p>
        <h6 className="heading">
          {greeting().toUpperCase().toUpperCase()}
          <span>
            <Link to={"/my-profile"}>
              {userInfo?.fullName} <FiExternalLink />
            </Link>
          </span>
        </h6>
        <div className="duration">
          {investmentPlan === "Bronze" || !investmentPlan ? (
            ""
          ) : (
            <>
              <p> TOP UP DUE FOR</p>{" "}
              <span>
                {todaysDate === duration
                  ? "TOP UP DATE DUE, PLEASE CONTACT ADMIN"
                  : duration}
              </span>
            </>
          )}
        </div>
        {/* <h6> AND</h6> */}
      </div>
    </Timing>
  );
};


const Timing = styled.div`
  .time {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* width: 10rem; */
    color: var(--color-white);
    line-height: 0rem;
  }
  .time p {
    color: var(--color-white);
    font-family: "Orbitron", sans-serif;
    font-size: 1.5rem;
    letter-spacing: 0.2rem;
  }
  .time h6 {
    font-family: "Poppins", sans-serif;
    letter-spacing: 0.1rem;
    font-size: 1rem;
    a {
      color: var(--primary);
      font-weight: 600;
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
    }
  }
  .duration {
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: .2rem;
    margin-top: .2rem;
    font-weight: 600;
    p {
      font-size: 1rem;
    }
    span {
      font-size: 0.8rem;
      color: var(--primary);
      text-transform: uppercase;
      font-family: "Poppins", sans-serif;
      letter-spacing: 0.1rem;
    }
  }
  @media screen and (max-width: 1200px) {
    .duration {
      display: flex;
      flex-direction: column;
      align-items: center;
      line-height: 0.5rem;
      margin-top: 0rem;
      font-weight: 600;
      p {
        font-size: 0.8rem;
      }
      span {
        font-size: 1rem;
        color: var(--primary);
        text-transform: uppercase;
        font-family: "Poppins", sans-serif;
        letter-spacing: 0.1rem;
        line-height: 1rem;
        text-align: center;
      }
    }
  }
  @media screen and (max-width: 900px) {
  }
  @media screen and (max-width: 600px) {
    .duration {
      display: flex;
      flex-direction: column;
      align-items: center;
      line-height: 0.5rem;
      margin-top: 0rem;
      font-weight: 600;
      p {
        font-size: 0.8rem;
      }
      span {
        font-size: 1rem;
        color: var(--primary);
        text-transform: uppercase;
        font-family: "Poppins", sans-serif;
        letter-spacing: 0.1rem;
        line-height: 1rem;
        text-align: center;
      }
    }
  }
  @media screen and (max-width: 420px) {
  }
  @media screen and (max-width: 350px) {
  }
`;

export default Time;
