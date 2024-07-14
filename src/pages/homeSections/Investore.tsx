import React from 'react'
import styled from 'styled-components';



const Investor = require("../../assets/investor-relations.jpg")
const Investore = () => {
  return (
    <Invest>
      <img src={Investor} alt="Investor relations" />
      <div className="content">
        <div className="contentOne">
          <div className="content-head">
            <span></span> <h3 className="sub-heading">INVESTOR RELATIONS</h3>
          </div>
          <p>
            Nova Vault Ventures provides advanced investment strategies and
            wealth management solutions to forward-thinking investors around the
            world. Through its distinct investment brands Nova Vault Ventures
            Management, we offers a diversity of investment approaches,
            encompassing bottom-up fundamental active management, Responsible
            Investing, systematic investing and customized implementation of
            client-specified portfolio exposures. Exemplary service, timely
            innovation and attractive returns across market cycles have been
            hallmarks of Nova Vault Ventures since the origin.
          </p>
        </div>
        <hr />
        <div className="contentOne">
          <div className="content-head">
            <span></span>{" "}
            <h3 className="sub-heading">OUR DIVERSITY & INCLUSION STRATEGY</h3>
          </div>
          <p>
            Nova Vault Ventures provides advanced investment strategies and
            wealth management solutions to forward-thinking investors around the
            world. Through its distinct investment brands Nova Vault Ventures
            Management, we offers a diversity of investment approaches,
            encompassing bottom-up fundamental active management, Responsible
            Investing, systematic investing and customized implementation of
            client-specified portfolio exposures. Exemplary service, timely
            innovation and attractive returns across market cycles have been
            hallmarks of Nova Vault Ventures since the origin.
          </p>
        </div>
      </div>
    </Invest>
  );
}


const Invest = styled.div`
  padding: 5rem 10rem;
  display: flex;
  gap: 2rem;
  img {
    width: 30%;
  }
  .sub-heading {
    color: var(--primary);
    font-size: 1.5rem;
    letter-spacing: 1px;
  }
  .content {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 1rem;
    width: 70%;
  }
  hr {
    height: 4px;
    width: 100%;
    background: var(--light-black);
  }
  .contentOne {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 2rem;
    p {
      text-align: justify;
    }
    .content-head {
      display: flex;
      align-items: center;
      gap: 1rem;
      span {
        background: red;
        height: 0.6rem;
        width: 0.6rem;
        border-radius: 100%;
      }
    }
  }
  @media screen and (max-width: 1200px) {
    padding: 1em;
    display: flex;
    gap: 2rem;
    img {
      width: 20%;
    }
    .sub-heading {
      color: var(--primary);
      font-size: 1.2rem;
      letter-spacing: 1px;
    }
    .content {
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 1rem;
    }
    hr {
      height: 4px;
      width: 100%;
      background: var(--light-black);
    }
    .contentOne {
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 0rem;
      .content-head {
        display: flex;
        align-items: center;
        gap: 1rem;
        span {
          background: red;
          height: 0.6rem;
          width: 0.6rem;
          border-radius: 100%;
        }
      }
    }
  }
  @media screen and (max-width: 900px) {
    padding: 1em;
    display: flex;
    gap: 2rem;
    img {
      width: 20%;
      height: 50%;
    }
    .sub-heading {
      color: var(--primary);
      font-size: 1.2rem;
      letter-spacing: 1px;
    }
    .content {
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 1rem;
    }
    hr {
      height: 4px;
      width: 100%;
      background: var(--light-black);
    }
    .contentOne {
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 0rem;
      .content-head {
        display: flex;
        align-items: center;
        gap: 1rem;
        span {
          background: red;
          height: 0.6rem;
          width: 0.6rem;
          border-radius: 100%;
        }
      }
    }
  }
  @media screen and (max-width: 600px) {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    img {
      width: 50%;
    }
    .sub-heading {
      color: var(--primary);
      font-size: 1.2rem;
    }
    .content {
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 1rem;
      width:100%;
    }
    hr {
      height: 4px;
      width: 100%;
      background: var(--light-black);
    }
    .contentOne {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      .content-head {
        display: flex;
        align-items: center;
        gap: 1rem;
        span {
          background: red;
          height: 0.6rem;
          width: 0.6rem;
          border-radius: 100%;
          display: none;
        }
      }
    }
  }
  @media screen and (max-width: 420px) {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    img {
      width: 50%;
    }
    .sub-heading {
      color: var(--primary);
      font-size: 1.2rem;
    }
    .content {
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 1rem;
    }
    hr {
      height: 4px;
      width: 100%;
      background: var(--light-black);
    }
    .contentOne {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      .content-head {
        display: flex;
        align-items: center;
        gap: 1rem;
        span {
          background: red;
          height: 0.6rem;
          width: 0.6rem;
          border-radius: 100%;
          display: none;
        }
      }
    }
  }
  @media screen and (max-width: 350px) {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    img {
      width: 50%;
    }
    .sub-heading {
      color: var(--primary);
      font-size: 1.2rem;
    }
    .content {
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 1rem;
    }
    hr {
      height: 4px;
      width: 100%;
      background: var(--light-black);
    }
    .contentOne {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      .content-head {
        display: flex;
        align-items: center;
        gap: 1rem;
        span {
          background: red;
          height: 0.6rem;
          width: 0.6rem;
          border-radius: 100%;
          display: none;
        }
      }
    }
  }
`;
export default Investore