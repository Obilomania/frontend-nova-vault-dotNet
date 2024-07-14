import React from 'react'
import { FiArrowDownLeft, FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import styled from 'styled-components';



export const formatNumbers = (x:any) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const PriceList = ({ cryptoData }:any) => {
  return (
    <Pricing>
      <>
        <Link to={"/"} className="crypto-info">
          {cryptoData
            .map((data:any, index:any) => (
              <div key={index} className="all-cryto">
                <img src={data?.iconUrl} alt="" />
                <span className="name">{data?.name}</span>
                <span className="price">{`$${Number(
                  data?.price.toLocaleString("en-US")
                ).toFixed(2)}`}</span>
                {data?.change < 0 ? (
                  <span className="red" style={{ color: "red" }}>
                    <FiArrowDownLeft />
                    {data?.change}%
                  </span>
                ) : (
                  <span className="green" style={{ color: "green" }}>
                    <FiArrowUpRight />
                    {data?.change}%
                  </span>
                )}{" "}
                ||
              </div>
            ))
            .slice(0, 10)}
          {cryptoData
            .map((data:any, index:any) => (
              <div key={index} className="all-cryto">
                <img src={data.iconUrl} alt="" />
                <span className="name">{data.name}</span>
                <span className="price">{`$${Number(
                  data.price.toLocaleString("en-US")
                ).toFixed(2)}`}</span>
                {data.change < 0 ? (
                  <span className="red" style={{ color: "red" }}>
                    <FiArrowDownLeft />
                    {data.change}%
                  </span>
                ) : (
                  <span className="green" style={{ color: "green" }}>
                    <FiArrowUpRight />
                    {data.change}%
                  </span>
                )}{" "}
                ||
              </div>
            ))
            .slice(0, 5)}
        </Link>
      </>
    </Pricing>
  );
};


const Pricing = styled.div`
  width: 100%;
  height: 3vh;
  background: #b5b2b2;
  display: flex;
  overflow: hidden;
  position: relative;

  overflow: hidden;
  a {
    text-decoration: none;
    color: black;
  }
  .all-cryto img {
    width: 1rem;
    margin-right: 0.5rem;
  }
  .crypto-info {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    white-space: nowrap;
    animation: animate 45s linear infinite;
    .name,
    .price,
    .red,
    .green {
      margin-right: 1rem;
      letter-spacing: 1px;
    }
    /* -webkit-animation: scroll 10s linear infinite;
    animation: scroll 10s linear infinite; */
    width: 100%;
  }
  .all-cryto {
    display: flex;
    align-items:center;
    justify-content:center;
    margin: 10px;
    font-weight: 400;
    font-size:.7rem;
    span{
      display:flex;
      align-items:center;
      justify-content:center;
    }
  }
  @keyframes animate {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }

  @media screen and (max-width: 1200px) {
    width: 100%;
    background: var(--light);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3vh;
  }
  @media screen and (max-width: 900px) {
    width: 100%;
    background: var(--light);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    background: var(--light);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 7vh;
  }
  @media screen and (max-width: 420px) {
    width: 100%;
    background: var(--light);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 7vh;
  }
  @media screen and (max-width: 350px) {
    width: 100%;
    background: var(--light);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 7vh;
  }
`;
export default PriceList