import React from 'react'
import styled from "styled-components";
import { Accordion } from "react-bootstrap";
import MainLayout from '../components/layout/MainLayout';


const AboutImage = require("../assets/about top.jpg");
const Faqs = () => {
  return (
    <MainLayout>
      <Frequently>
        <div className="about-landing">
          <div className="overlay"></div>
          <img src={AboutImage} alt="about page" />
          <div className="hero-content">
            <h1>
              QUESTIONS <span>&</span> ANSWERS
            </h1>
          </div>
        </div>
        <div className="questions">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <b>WHAT IS NOVA VAULT VENTURES?</b>
              </Accordion.Header>
              <Accordion.Body>
                Nova Vault Ventures is an investment company, which was founded
                by a team of distinguished professional financial managers,
                analyst and experienced developers who came together to create a
                universal platform for cryptocurrency lovers worldwide. Nova
                Vault Ventures offers its users access to the algo-trading
                algorithmic trading system bot via our proprietary dailypips
                Plans that allow users to choose the system’s operating mode as
                well as to participate in the affiliate program.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <b>IS NOVA VAULT VENTURES A REGISTERED COMPANY?</b>
              </Accordion.Header>
              <Accordion.Body>
                Yes,it is legally registered company with the name whose
                activities are regulated by the UK Government.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <b>HOW CAN I REGISTER TO START EARNING? ?</b>
              </Accordion.Header>
              <Accordion.Body>
                Simply click on signup page on the website. Each Nova Vault
                Ventures plan package has a range of price tag on it, make the
                exact payment and then you will finish up your registration
                process. Once we verify your deposit which we will definitely
                do, then we will enable your dashboard for earning and at the
                agreed time, you will get your profit straight to your wallet.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                <b>HOW DO I ACCESS MY DASHBOARD?</b>
              </Accordion.Header>
              <Accordion.Body>
                At the site menu bar, click the account tab and you will be
                redirected to login, when you are at the login page simply enter
                your username and password and click the login button. If you
                have an account with Nova Vault Venture you will be redirected
                to your dashboard.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>
                <b>CAN I RE-INVEST?</b>
              </Accordion.Header>
              <Accordion.Body>
                Yes, you can chose to reinvest after you have your profit sent
                to your wallet. Reinvestment is done at your dashboard your
                dashboard.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>
                <b>WHAT IF I LOST MY LOGIN DETAILS? ?</b>
              </Accordion.Header>
              <Accordion.Body>
                If you lost your login details you may wish to have a new one
                and at that you are required to contact support and you will be
                giving back your login details instantly.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
              <Accordion.Header>
                <b>WHICH E-CURRENCIES DO YOU ACCEPT?</b>
              </Accordion.Header>
              <Accordion.Body>Bitcoin Only</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="7">
              <Accordion.Header>
                <b>HOW MANY ACCOUNTS CAN I REGISTER??</b>
              </Accordion.Header>
              <Accordion.Body>
                You can only register one account under your name. Likewise, it
                is forbidden to run several accounts in one household. If our
                relevant departments are tracked that you have created more than
                one account, we will permanently lock your personal account.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </Frequently>
    </MainLayout>
  );
}

const Frequently = styled.div`
  width: 100%;
  overflow: hidden;
  .about-landing {
    position: relative;
    height: 40vh;
    img {
      height: 100%;
      width: 100%;
    }
  }
  .overlay {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    position: absolute;
    z-index: 5;
  }
  .hero-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    z-index: 8;
    color: white;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    h1 {
      font-size: 3rem;
      text-transform: uppercase;
      font-weight: 500;
      span {
        color: var(--primary);
      }
    }
  }
  .questions {
    padding: 2rem 10rem;
    b {
      color: var(--primary);
    }
  }
  @media screen and (max-width: 1200px) {
    .about-landing {
      position: relative;
      height: 40vh;
      img {
        height: 100%;
        width: 100%;
      }
    }
    .overlay {
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.6);
      position: absolute;
      z-index: 5;
    }
    .hero-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: absolute;
      z-index: 8;
      color: white;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      h1 {
        font-size: 2rem;
        text-transform: uppercase;
        font-weight: 500;
        span {
          color: var(--primary);
        }
      }
    }
    .questions {
      padding: 1rem;
      b {
        color: var(--primary);
      }
    }
  }
  @media screen and (max-width: 900px) {
    .about-landing {
      position: relative;
      height: 40vh;
      img {
        height: 100%;
        width: 100%;
      }
    }
    .overlay {
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.6);
      position: absolute;
      z-index: 5;
    }
    .hero-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: absolute;
      z-index: 8;
      color: white;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      h1 {
        font-size: 2rem;
        text-transform: uppercase;
        font-weight: 500;
        span {
          color: var(--primary);
        }
      }
    }
    .questions {
      padding: 1rem;
      b {
        color: var(--primary);
      }
    }
  }
  @media screen and (max-width: 600px) {
    .about-landing {
      position: relative;
      height: 40vh;
      img {
        height: 100%;
        width: 100%;
      }
    }
    .overlay {
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.6);
      position: absolute;
      z-index: 5;
    }
    .hero-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: absolute;
      z-index: 8;
      color: white;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      h1 {
        font-size: 1.5rem;
        text-transform: uppercase;
        font-weight: 500;
        span {
          color: var(--primary);
        }
      }
    }
    .questions {
      padding: 1rem;
      b {
        color: var(--primary);
      }
    }
  }
  @media screen and (max-width: 420px) {
    .about-landing {
      position: relative;
      height: 40vh;
      img {
        height: 100%;
        width: 100%;
      }
    }
    .overlay {
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.6);
      position: absolute;
      z-index: 5;
    }
    .hero-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: absolute;
      z-index: 8;
      color: white;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      h1 {
        font-size: 1.5rem;
        text-transform: uppercase;
        font-weight: 500;
        span {
          color: var(--primary);
        }
      }
    }
    .questions {
      padding: 1rem;
      b {
        color: var(--primary);
      }
    }
  }
  @media screen and (max-width: 350px) {
    .about-landing {
      position: relative;
      height: 40vh;
      img {
        height: 100%;
        width: 100%;
      }
    }
    .overlay {
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.6);
      position: absolute;
      z-index: 5;
    }
    .hero-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: absolute;
      z-index: 8;
      color: white;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      h1 {
        font-size: 1.5rem;
        text-transform: uppercase;
        font-weight: 500;
        span {
          color: var(--primary);
        }
      }
    }
    .questions {
      padding: 1rem;
      b {
        color: var(--primary);
      }
    }
  }
`;
export default Faqs