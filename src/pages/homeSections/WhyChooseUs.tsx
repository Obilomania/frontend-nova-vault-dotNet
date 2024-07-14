import React from 'react'
import styled from "styled-components";
import { AiTwotoneLock, AiTwotoneThunderbolt } from "react-icons/ai";
import { PiArrowsDownUpBold } from "react-icons/pi";
import { FaPeopleGroup } from "react-icons/fa6";
import { BsShieldShaded } from "react-icons/bs";
import { BiBitcoin } from "react-icons/bi";

const WhyChooseUs = () => {
  return (
    <WHyChoose>
      <div className="topic">
        <h1 className="heading">Why Choose Us</h1>
      </div>
      <div className="step-content">
        <div className="step-one steppings">
          <div className="icon">
            <AiTwotoneLock />
          </div>
          <h2 className="sub-heading">SAFE AND SECURE</h2>
          <p>
            We offer management consulting service with including interim
            management.
          </p>
        </div>
        <div className="step-two steppings">
          <div className="icon">
            <AiTwotoneThunderbolt />
          </div>
          <h2 className="sub-heading">INSTANT TRADING</h2>
          <p>
            With our lightning speed servers, you are sure to get the best out
            of your investments.
          </p>
        </div>
        <div className="step-three steppings">
          <div className="icon">
            <PiArrowsDownUpBold />
          </div>
          <h2 className="sub-heading">PROGRESSIVE REVENUE</h2>
          <p>
            We offer management consulting service with including interim
            management.
          </p>
        </div>
        <div className="step-one steppings">
          <div className="icon">
            <FaPeopleGroup />
          </div>
          <h2 className="sub-heading">INVESTMENT FOR ALL</h2>
          <p>
            With different packages, Our system is modelled to accommodate
            everyone no matter how much you have to invest.
          </p>
        </div>
        <div className="step-two steppings">
          <div className="icon">
            <BsShieldShaded />
          </div>
          <h2 className="sub-heading">COVERED BY INSURANCE</h2>
          <p>
            You have zero chances of losing your investments as all our assets
            are duly covered by inssurance.
          </p>
        </div>
        <div className="step-three steppings">
          <div className="icon">
            <BiBitcoin />
          </div>
          <h2 className="sub-heading">BITCOIN TRANSACTION</h2>
          <p>
            Invest in the world's most popular cryptocurrency and enjoy all the
            benefits that come with it.
          </p>
        </div>
      </div>
    </WHyChoose>
  );
}


const WHyChoose = styled.div`
  width: 100%;
  border-top: 20px solid var(--light-black);
  border-bottom: 20px solid var(--light-black);
  padding: 3rem 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0rem;
  .step-content {
    display: flex;
    align-items: center;
    /* justify-content: space-around; */
    width: 100%;
    flex-wrap: wrap;
  }
  .steppings {
    margin: 1.6%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    gap: 1rem;
    border: 1px solid var(--light-black);
    padding: 1.5rem;
    position: relative;
    width: 30%;
    min-height: 210px;
    height: fit-content;
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
    border-top: 20px solid var(--light-black);
    padding: 3rem 0rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0rem;
    .step-content {
      display: flex;
      align-items: center;
      /* justify-content: space-around; */
      width: 100%;
      flex-wrap: wrap;
    }
    .steppings {
      margin: 1.6%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      text-align: center;
      gap: 1rem;
      border: 1px solid var(--light-black);
      padding: 1.5rem;
      position: relative;
      width: 30%;
      min-height: 270px;
      .icon {
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
      letter-spacing: 1px;
    }
  }
  @media screen and (max-width: 900px) {
    width: 100%;
    border-top: 20px solid var(--light-black);
    padding: 3rem 0rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0rem;
    .step-content {
      display: flex;
      align-items: center;
      /* justify-content: space-around; */
      width: 100%;
      flex-wrap: wrap;
    }
    .steppings {
      margin: 1.6%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      text-align: center;
      gap: 1rem;
      border: 1px solid var(--light-black);
      padding: 1.5rem;
      position: relative;
      width: 30%;
      min-height: 312px;
      .icon {
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
      letter-spacing: 1px;
    }
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    border-top: 20px solid var(--light-black);
    padding: 3rem 0rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0rem;
    .step-content {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 3rem;
      padding: 0 1rem;
      width: 100%;
      flex-wrap: nowrap;
      margin-top: 2rem;
    }
    .steppings {
      margin: 0%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      text-align: center;
      gap: 1rem;
      border: 1px solid var(--light-black);
      padding: 1.5rem;
      position: relative;
      width: 100%;
      min-height:fit-content;
      .icon {
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
    width: 100%;
    border-top: 20px solid var(--light-black);
    padding: 3rem 0rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0rem;
    .step-content {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 1rem;
      padding: 0 1rem;
      width: 100%;
      flex-wrap: nowrap;
    }
    .steppings {
      margin: 0%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      text-align: center;
      gap: 1rem;
      border: 1px solid var(--light-black);
      padding: 1.5rem;
      position: relative;
      width: 100%;
      .icon {
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
  @media screen and (max-width: 350px) {
    width: 100%;
    border-top: 20px solid var(--light-black);
    padding: 3rem 0rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0rem;
    .step-content {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 1rem;
      padding: 0 1rem;
      width: 100%;
      flex-wrap: nowrap;
    }
    .steppings {
      margin: 0%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      text-align: center;
      gap: 1rem;
      border: 1px solid var(--light-black);
      padding: 1.5rem;
      position: relative;
      width: 100%;
      .icon {
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
`;
export default WhyChooseUs