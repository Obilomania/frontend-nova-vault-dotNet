import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaCircleXmark } from "react-icons/fa6";
import withAuth from '../../HOC/withAuth';


const Failed = () => {
  return (
    <FailedPage>
      <h1 className="heading">PAYMENT FAILED</h1>
      <p>
        <FaCircleXmark />
      </p>
      <Link to="/dashboard" className="btn-primary">
        TRY AGAIN
      </Link>
    </FailedPage>
  );
}
const FailedPage = styled.div`
  width: 100%;
  position: relative;
  min-height: 80vh;
  height: fit-content;
  overflow: hidden;
  background-image: url("/images/Dash-BG.jpg");
  padding: 3rem 10rem;
  font-family: "Poppins", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  p {
    color: red;
    font-size: 5rem;
  }
  a {
    text-decoration: none;
  }
`;
export default withAuth(Failed)