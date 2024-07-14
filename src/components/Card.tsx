import React from 'react'
import styled from 'styled-components';

const Card = ({ plans, index }:any) => {
  return (
    <Carding key={index}>
      <div className="investment-image">
        <img src={plans.image} alt="" />
      </div>
      <h3>{plans.title}</h3>
    </Carding>
  );
};



const Carding = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--light-black);
  img {
    width: 20rem;
    height: 15rem;
  }
  h3 {
    color: var(--primary);
    margin-top: 1rem;
    font-size: 1.2rem;
  }
  @media screen and (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--light-black);
    img {
      width: 20rem;
      height: 15rem;
    }
    h3 {
      color: var(--primary);
      margin-top: 1rem;
      font-size: 1.2rem;
    }
  }
  @media screen and (max-width: 900px) {
  }
  @media screen and (max-width: 600px) {
    img {
      width: 12rem;
      height: 8rem;
    }
    h3 {
      color: var(--primary);
      margin-top: 1rem;
      font-size: 1.2rem;
    }
  }
  @media screen and (max-width: 420px) {
    img {
      width: 9rem;
      height: 4rem;
    }
    h3 {
      color: var(--primary);
      margin-top: 1rem;
      font-size: 1rem;
    }
  }
  @media screen and (max-width: 350px) {
    img {
      width: 12rem;
      height: 8rem;
    }
    h3 {
      color: var(--primary);
      margin-top: 1rem;
      font-size: 1.2rem;
    }
  }
  @media screen and (max-width: 420px) {
    img {
      width: 9rem;
      height: 4rem;
    }
    h3 {
      color: var(--primary);
      margin-top: 1rem;
      font-size: 1rem;
    }
  }
`;
export default Card