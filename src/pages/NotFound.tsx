import React from 'react'
import MainLayout from '../components/layout/MainLayout';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";

const NotFound = () => {
  return (
    <MainLayout>
      <NotF>
        <div className="notFound">
          <h1>PAGE NOT FOUND !!!</h1>
          <Link to="/" className="not-found-btn">
            <AiOutlineHome />
            Back Home
          </Link>
        </div>
      </NotF>
    </MainLayout>
  );
}


const NotF = styled.div`
  width: 100%;
  position: relative;
  min-height: 80vh;
  height: fit-content;
  overflow: hidden;
  background-image: url("/images/Dash-BG.jpg");
  padding: 0rem 10rem;
  font-family: "Poppins", sans-serif;
  position: relative;
  .notFound {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  h1 {
    font-size: 4rem;
    font-weight: bold;
    color: red;
  }
  a {
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    gap: 1rem;
    text-decoration: none;
    background: var(--primary);
    color: white;
    padding: 1rem 0;
  }
  @media screen and (max-width: 1200px) {
    .notFound {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    h1 {
      font-size: 3rem;
      font-weight: bold;
      color: red;
    }
    a {
      margin-top: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      gap: 1rem;
      text-decoration: none;
      background: var(--primary);
      color: white;
      padding: 0.5rem 0;
    }
  }
  @media screen and (max-width: 900px) {
    .notFound {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    h1 {
      font-size: 2rem;
      font-weight: bold;
      color: red;
    }
    a {
      margin-top: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      gap: 1rem;
      text-decoration: none;
      background: var(--primary);
      color: white;
      padding: 0.5rem 0;
    }
  }
  @media screen and (max-width: 600px) {
    .notFound {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    h1 {
      font-size: 1.5rem;
      font-weight: bold;
      color: red;
    }
    a {
      margin-top: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1rem;
      gap: 1rem;
      text-decoration: none;
      background: var(--primary);
      color: white;
      padding: 0.2rem 0;
    }
  }
  @media screen and (max-width: 420px) {
    .notFound {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    h1 {
      font-size: 1.1rem;
      font-weight: bold;
      color: red;
    }
    a {
      margin-top: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1rem;
      gap: 1rem;
      text-decoration: none;
      background: var(--primary);
      color: white;
      padding: 0.2rem 0;
    }
  }
  @media screen and (max-width: 350px) {
    .notFound {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    h1 {
      font-size: 1.2rem;
      font-weight: bold;
      color: red;
    }
    a {
      margin-top: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1rem;
      gap: 1rem;
      text-decoration: none;
      background: var(--primary);
      color: white;
      padding: 0.2rem 0;
    }
  }
`;
export default NotFound