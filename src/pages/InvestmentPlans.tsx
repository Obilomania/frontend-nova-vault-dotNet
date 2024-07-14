import React from 'react'
import MainLayout from '../components/layout/MainLayout';
import styled from 'styled-components';



const ThePlans = [
  {
    id: 1,
    title: "Bronze",
    pricing: "$50 - $300",
    one: "2%",
    two: "After 24 HOURS",
    three: "10% Referral Bonus",
    four: "24/7 Customer Care",
  },
  {
    id: 2,
    title: "Silver",
    pricing: "$300 - $3500",
    one: "4%",
    two: "After 24 HOURS",
    three: "10% Referral Bonus",
    four: "24/7 Customer Care",
  },
  {
    id: 3,
    title: "Gold",
    pricing: "$3500 - $7000",
    one: "10%",
    two: "After 48 HOURS",
    three: "10% Referral Bonus",
    four: "24/7 Customer Care",
  },
  {
    id: 4,
    title: "Plantinum",
    pricing: "$7000 - $25000",
    one: "17%",
    two: "After 48 HOURS",
    three: "10% Referral Bonus",
    four: "24/7 Customer Care",
  },
  {
    id: 5,
    title: "DIAMOND",
    pricing: "$25000 - Unlimited",
    one: "50%",
    two: "After 48 HOURS",
    three: "10% Referral Bonus",
    four: "24/7 Customer Care",
  },
];
const InvestmentPlans = () => {
  return (
    <MainLayout>
      <Invest>
        <div className="overlay"></div>
        <div className="invest-content">
          <h1 className="heading">Investment Plans</h1>
          <div className="investment-cards">
            {ThePlans.map((plans, index) => (
              <div className="investment-card" key={index}>
                <p className="plan-title">{plans.title.toUpperCase()}</p>
                <p className="investment-price">{plans.pricing}</p>
                <div className="investment-benefits">
                  <p>
                    <span>Profit : </span> {plans.one}
                  </p>
                  <p>
                    <span>Duration</span> : {plans.two}
                  </p>
                  <p>{plans.three}</p>
                  <p>{plans.four}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Invest>
    </MainLayout>
  );
}



const Invest = styled.div`
  width: 100%;
  min-height: 80vh;
  height: fit-content;
  background-image: url("/images/plans-costs.jpg");
  background-repeat: no-repeat;
  object-fit: cover;
  position: relative;
  .overlay {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    position: absolute;
    z-index: 0;
  }
  .invest-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: rgb(255, 255, 255);
    position: relative;
    z-index: 2;
    width: 100%;
    padding: 3rem 10rem;
    gap: 2rem;
  }
  .invest-content .investment-cards {
    width: 100%;
    display: flex;
    align-items: start;
    justify-content: space-between;
  }
  .investment-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    background: rgba(255, 255, 255, 0.1);
    padding: 1rem;
    border-radius: 1rem;
    width: 18%;
    p {
      text-transform: uppercase;
      font-weight: 600;
      letter-spacing: 1px;
    }
    span {
      color: var(--primary);
    }
    .investment-benefits {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1.5rem;
      p {
        text-align: center;
      }
    }
    .plan-title {
      font-size: 1.2rem;
      letter-spacing: 1px;
      font-weight: 600;
      color: var(--primary);
      width: 100%;
      background: rgba(255, 255, 255, 0.4);
      text-align: center;
      padding: 0.8rem 0;
      border-radius: 1rem;
    }
  }
  @media screen and (max-width: 1200px) {
    width: 100%;
    min-height: 80vh;
    height: fit-content;
    background-image: url("/images/plans-costs.jpg");
    background-repeat: no-repeat;
    object-fit: cover;
    position: relative;
    .overlay {
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.8);
      position: absolute;
      z-index: 0;
    }
    .invest-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: rgb(255, 255, 255);
      position: relative;
      z-index: 2;
      width: 100%;
      padding: 1rem;
      gap: 2rem;
    }
    .invest-content .investment-cards {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-wrap: wrap;
    }
    .investment-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 1.6%;
      gap: 1.5rem;
      background: rgba(255, 255, 255, 0.1);
      padding: 1rem;
      border-radius: 1rem;
      width: 30%;
      p {
        text-transform: uppercase;
        font-weight: 600;
        letter-spacing: 1px;
        text-align: center;
      }
      span {
        color: var(--primary);
      }
      .investment-benefits {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1.5rem;
      }
      .plan-title {
        font-size: 1.2rem;
        letter-spacing: 1px;
        font-weight: 600;
        color: var(--primary);
        width: 100%;
        background: rgba(255, 255, 255, 0.4);
        text-align: center;
        padding: 0.8rem 0;
        border-radius: 1rem;
      }
    }
  }
  @media screen and (max-width: 900px) {
    width: 100%;
    min-height: 80vh;
    height: fit-content;
    background-image: url("/images/plans-costs.jpg");
    background-repeat: no-repeat;
    object-fit: cover;
    position: relative;
    .overlay {
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.8);
      position: absolute;
      z-index: 0;
    }
    .invest-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: rgb(255, 255, 255);
      position: relative;
      z-index: 2;
      width: 100%;
      padding: 1rem;
      gap: 2rem;
    }
    .invest-content .investment-cards {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-wrap: wrap;
    }
    .investment-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 1.6%;
      gap: 1.5rem;
      background: rgba(255, 255, 255, 0.1);
      padding: 1rem;
      border-radius: 1rem;
      width: 30%;
      p {
        text-transform: uppercase;
        font-weight: 600;
        letter-spacing: 1px;
        text-align: center;
      }
      span {
        color: var(--primary);
      }
      .investment-benefits {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1.5rem;
      }
      .plan-title {
        font-size: 1.2rem;
        letter-spacing: 1px;
        font-weight: 600;
        color: var(--primary);
        width: 100%;
        background: rgba(255, 255, 255, 0.4);
        text-align: center;
        padding: 0.8rem 0;
        border-radius: 1rem;
      }
    }
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    min-height: 80vh;
    height: fit-content;
    background-image: url("/images/plans-costs.jpg");
    background-repeat: repeat;
    object-fit: cover;
    position: relative;
    overflow: hidden;
    .overlay {
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.8);
      position: absolute;
      z-index: 0;
    }
    .invest-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: rgb(255, 255, 255);
      position: relative;
      z-index: 2;
      width: 100%;
      padding: 3rem 1rem;
      gap: rem;
    }
    .invest-content .investment-cards {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 1rem;
    }
    .investment-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: rgba(255, 255, 255, 0.3);
      padding: 1rem;
      border-radius: 1rem;
      width: 100%;
      p {
        text-transform: uppercase;
        font-weight: 600;
        letter-spacing: 1px;
      }
      span {
        color: var(--primary);
      }
      .investment-benefits {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.8rem;
      }
      .plan-title {
        font-size: 1.2rem;
        letter-spacing: 1px;
        font-weight: 600;
        color: var(--primary);
        width: 100%;
        background: rgba(255, 255, 255, 0.4);
        text-align: center;
        padding: 0.8rem 0;
        border-radius: 1rem;
      }
    }
  }
  @media screen and (max-width: 420px) {
    width: 100%;
    min-height: 80vh;
    height: fit-content;
    background-image: url("/images/plans-costs.jpg");
    background-repeat: repeat;
    object-fit: cover;
    position: relative;
    overflow: hidden;
    .overlay {
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.8);
      position: absolute;
      z-index: 0;
    }
    .invest-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: rgb(255, 255, 255);
      position: relative;
      z-index: 2;
      width: 100%;
      padding: 3rem 1rem;
      gap: rem;
    }
    .invest-content .investment-cards {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 1rem;
    }
    .investment-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: rgba(255, 255, 255, 0.3);
      padding: 1rem;
      border-radius: 1rem;
      width: 100%;
      p {
        text-transform: uppercase;
        font-weight: 600;
        letter-spacing: 1px;
      }
      span {
        color: var(--primary);
      }
      .investment-benefits {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.8rem;
      }
      .plan-title {
        font-size: 1.2rem;
        letter-spacing: 1px;
        font-weight: 600;
        color: var(--primary);
        width: 100%;
        background: rgba(255, 255, 255, 0.4);
        text-align: center;
        padding: 0.8rem 0;
        border-radius: 1rem;
      }
    }
  }
  @media screen and (max-width: 350px) {
    width: 100%;
    min-height: 80vh;
    height: fit-content;
    background-image: url("/images/plans-costs.jpg");
    background-repeat: repeat;
    object-fit: cover;
    position: relative;
    overflow: hidden;
    .overlay {
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.8);
      position: absolute;
      z-index: 0;
    }
    .invest-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: rgb(255, 255, 255);
      position: relative;
      z-index: 2;
      width: 100%;
      padding: 3rem 1rem;
      gap: rem;
    }
    .invest-content .investment-cards {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 1rem;
    }
    .investment-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: rgba(255, 255, 255, 0.3);
      padding: 1rem;
      border-radius: 1rem;
      width: 100%;
      p {
        text-transform: uppercase;
        font-weight: 600;
        letter-spacing: 1px;
      }
      span {
        color: var(--primary);
      }
      .investment-benefits {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.8rem;
      }
      .plan-title {
        font-size: 1.2rem;
        letter-spacing: 1px;
        font-weight: 600;
        color: var(--primary);
        width: 100%;
        background: rgba(255, 255, 255, 0.4);
        text-align: center;
        padding: 0.8rem 0;
        border-radius: 1rem;
      }
    }
  }
`;
export default InvestmentPlans