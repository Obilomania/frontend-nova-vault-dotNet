import React from 'react'
import styled from "styled-components";
import { BsPersonPlusFill } from "react-icons/bs";
import { BiBitcoin } from "react-icons/bi";
import { CiBadgeDollar } from "react-icons/ci";

const Steps = () => {
  return (
    <ThreeStreps>
      <div className="topic">
        <h1 className="heading">Three Easy Steps</h1>
        <p>Its fast and easy to get started with us in three simple steps</p>
      </div>
      <div className="step-content">
        <div className="step-one steppings">
          <div className="icon">
            <BsPersonPlusFill />
          </div>
          <h2 className="sub-heading">Create An Account</h2>
          <p>
            Simply click on the register button to create a free account for
            yourself. Its quick and easy.
          </p>
        </div>
        <div className="step-two steppings">
          <div className="icon">
            <BiBitcoin />
          </div>
          <h2 className="sub-heading">Make Deposit</h2>
          <p>
            Pick a plan of your choice from our investment plans. Make a deposit
            to your personal wallet.
          </p>
        </div>
        <div className="step-three steppings">
          <div className="icon">
            <CiBadgeDollar />
          </div>
          <h2 className="sub-heading">Financial Growth</h2>
          <p>
            Watch your daily earnings live. Be ready to place a withdrawal as
            soon as your investment is completed.
          </p>
        </div>
      </div>
    </ThreeStreps>
  );
}

const ThreeStreps = styled.div`
  width: 100%;
  padding: 5rem 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  .step-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 1%;
  }
  .steppings {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    border: 1px solid var(--light-black);
    padding: 2.5rem 1.5rem 1rem 1.5rem;
    position: relative;
    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: -2rem;
      font-size: 1.5rem;
      color: white;
      background: var(--primary);
      border-radius: 100%;
      width: 3rem;
      height: 3rem;
    }
  }
  .sub-heading {
    color: var(--primary);
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 1px;
  }
  @media screen and (max-width: 1200px) {
    width: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    .step-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      gap: 2%;
    }
    .steppings {
      display: flex;
      align-items: center;
      justify-content: centerl;
      flex-direction: column;
      text-align: center;
      border: 1px solid var(--light-black);
      padding: 2.5rem 1.5rem 1rem 1.5rem;
      position: relative;
      .icon {
        position: absolute;
        top: -1.5rem;
        font-size: 1.5rem;
        color: white;
        background: var(--primary);
        border-radius: 100%;
        width: 2.5rem;
        height: 2.5rem;
      }
    }
    .sub-heading {
      color: var(--primary);
      font-size: 1.2rem;
    }
  }
  @media screen and (max-width: 900px) {
    width: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    .step-content {
      /* flex-direction: column; */
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      gap: 3rem;
    }
    .steppings {
      display: flex;
      align-items: center;
      justify-content: centerl;
      flex-direction: column;
      text-align: center;
      border: 1px solid var(--light-black);
      padding: 2.5rem 1.5rem 1rem 1.5rem;
      position: relative;
      min-height: 250px;
      .icon {
        position: absolute;
        top: -1.5rem;
        font-size: 1.5rem;
        color: white;
        background: var(--primary);
        border-radius: 100%;
        width: 2.5rem;
        height: 2.5rem;
      }
    }
    .sub-heading {
      color: var(--primary);
      font-size: 1.2rem;
    }
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    .step-content {
      flex-direction: column;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      gap: 3rem;
    }
    .steppings {
      display: flex;
      align-items: center;
      justify-content: centerl;
      flex-direction: column;
      text-align: center;
      border: 1px solid var(--light-black);
      padding: 2.5rem 1.5rem 1rem 1.5rem;
      position: relative;
      min-height: fit-content;
      .icon {
        position: absolute;
        top: -1.5rem;
        font-size: 1rem;
        color: white;
        background: var(--primary);
        border-radius: 100%;
        width: 2.5rem;
        height: 2.5rem;
      }
    }
    .sub-heading {
      color: var(--primary);
      font-size: 1.2rem;
    }
  }
  @media screen and (max-width: 420px) {
  }
  @media screen and (max-width: 350px) {
  }
`;
export default Steps