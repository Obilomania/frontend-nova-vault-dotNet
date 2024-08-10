import React from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";
import Card from '../../components/Card';


const InvestmentServices = [
  {
    id: 1,
    title: "Real Estate",
    // description: "As we can all attest to the fact that investing in real estate is an ever green business idea one should take serious.",
    image: "/images/real-Estate.jpg",
  },
  {
    id: 2,
    title: "Oil and Gas",
    image: "/images/crude.jpg",
  },
  {
    id: 3,
    title: "Reuseable Energy",
    image: "/images/Energy.jpg",
  },
  {
    id: 4,
    title: "Pharmaceuticals",
    image: "/images/medicals.jpg",
  },
];
const InvestmentPlans = () => {
  return (
    <Plans>
      <div className="plan-heading">
        <h1 className="heading">Investment Services</h1>
        <p>
          Nova Vault Ventures provides the opportunity for their clients to be
          able to invest in diverse aspect of the economy, globally.
        </p>
      </div>
      <div className="invest-cards">
        {InvestmentServices?.map((plans, index) => (
          <Card plans={plans} key={index} />
        ))}
      </div>
      <Link to="/investment-plans">VIEW INVESTMENT PLANS</Link>
    </Plans>
  );
}


const Plans = styled.div`
  width: 100%;
  padding: 5rem 10rem;
  border-top: 1px solid var(--light-black);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  p {
    text-align: center;
  }
  .invest-cards {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  a {
    text-decoration: none;
    background: var(--primary);
    border: 1px solid var(--primary);
    color: white;
    padding: 0.5rem 2rem;
    font-weight: 500;
    letter-spacing: 1px;
    transition: var(--transition);
    &:hover {
      background: none;
      color: var(--primary);
    }
  }
  @media screen and (max-width: 1200px) {
    width: 100%;
    padding: 1rem;
    border-top: 1px solid var(--light-black);
    p {
      text-align: center;
    }
    .invest-cards {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      flex-wrap: wrap;
      gap: 2rem;
    }
  }
  @media screen and (max-width: 900px) {
    width: 100%;
    padding: 1rem;
    border-top: 1px solid var(--light-black);
    p {
      text-align: center;
    }
    .invest-cards {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 2rem;
    }
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    padding: 1rem;
    border-top: 1px solid var(--light-black);
    p {
      text-align: center;
    }
    .invest-cards {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      flex-wrap: wrap;
    }
  }
  @media screen and (max-width: 420px) {
    width: 100%;
    padding: 1rem;
    border-top: 1px solid var(--light-black);
    p {
      text-align: center;
    }
    .invest-cards {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      flex-wrap: wrap;
    }
  }
  @media screen and (max-width: 350px) {
  }
`;
export default InvestmentPlans