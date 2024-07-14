import React from 'react'
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { CiLocationOn, CiMail } from "react-icons/ci";

const activeLink = ({ isActive }:any) => (isActive ? "activeLink" : "darkLink");

const Footer = () => {
  return (
    <Foot>
      <div className="footer-top">
        <div className="top-one top-foot">
          <h1 className="heading">Nova Vault Ventures</h1>
          <p>
            Nova Vault Ventures is an International Investment company,
            officially registered in the United Kingdom, it was launched in
            April 2019. The company has direct contracts with professional
            traders and miners around the world that guarantees the best
            services and ensures profits are made and remitted to investors
            daily.
          </p>
        </div>
        <div className="top-two top-foot">
          <h1 className="heading">Useful Links</h1>
          <NavLink to={"/"} className={activeLink}>
            Home
          </NavLink>
          <NavLink to={"/about"} className={activeLink}>
            About Us
          </NavLink>
          <NavLink to={"/faqs"} className={activeLink}>
            FAQs
          </NavLink>
          <NavLink to={"/terms"} className={activeLink}>
            Terms & Conditions
          </NavLink>
          {/* <NavLink to={"/login"} className={activeLink}>
            Login
          </NavLink> */}
        </div>
        <div className="top-three top-foot">
          <h1 className="heading">Our Address</h1>
          <p>
            <CiLocationOn /> 20-22 Wenlock Road, London, England, N1 7GU
          </p>
          <p>
            <CiMail /> support@novavaultventures.com
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          © 2019 <span> Nova Vault Ventures</span> All Rights Reserved.
        </p>
      </div>
    </Foot>
  );
}


const Foot = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  background-color: var(--background-color);
  .darkLink {
    color: white;
  }
  .activeLink {
    color: var(--primary);
  }
  h1 {
    color: var(--primary);
    font-size: 1.1rem;
  }
  .footer-top {
    display: flex;
    align-items: start;
    justify-content: space-between;
    width: 100%;
    padding: 2rem 10rem;
    color: white;
    a {
      color: white;
      text-decoration: none;
      font-size: 0.8rem;
    }
  }

  .top-foot {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    width: 30%;
    gap: 1rem;
    p {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      /* line-height: 1.5rem; */
      font-size: 0.8rem;
    }
  }
  .footer-bottom {
    background: #000000;
    padding: 0.5rem 10rem;
    font-size: 0.8rem;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      color: var(--primary);
    }
  }
  @media screen and (max-width: 1200px) {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    background-color: var(--background-color);
    h1 {
      color: var(--primary);
      font-size: 1rem;
      margin-top: 1.5rem;
    }
    .footer-top {
      display: flex;
      align-items: start;
      justify-content: space-between;
      flex-direction: row;
      width: 100%;
      padding: 1rem 1rem;
      color: white;
      a {
        color: white;
        font-size: 0.8rem;
        margin-bottom: 0.5rem;
      }
    }
    .top-foot {
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: space-between;
      width: 30%;
      gap: 0rem;
      p {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        line-height: 1.4rem;
        font-size: 0.8rem;
      }
    }
    .footer-bottom {
      background: #000000;
      padding: 1rem;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.8rem;
      span {
        color: var(--primary);
      }
    }
  }
  @media screen and (max-width: 900px) {
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    background-color: var(--background-color);
    h1 {
      color: var(--primary);
      font-size: 1rem;
      margin-top: 1.5rem;
    }
    .footer-top {
      display: flex;
      align-items: start;
      justify-content: space-between;
      flex-direction: column;
      width: 100%;
      padding: 1rem 1rem;
      color: white;
      a {
        color: white;
        font-size: 0.8rem;
        margin-bottom: 0.5rem;
      }
    }
    .top-foot {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      gap: 0rem;
      p {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        line-height: 1.4rem;
        font-size: 0.8rem;
        text-align: justify;
      }
    }
    .footer-bottom {
      background: #000000;
      padding: 1rem;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.8rem;
      span {
        color: var(--primary);
      }
    }
  }
  @media screen and (max-width: 420px) {
  }
  @media screen and (max-width: 350px) {
  }
`;
export default Footer