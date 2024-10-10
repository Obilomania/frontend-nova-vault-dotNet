import React from "react";
import styled from "styled-components";
import { IoCheckmarkCircle } from "react-icons/io5";
import { Link } from "react-router-dom";
import withAuth from "../../HOC/withAuth";

const Success = () => {
  return (
      <TheSuccessPage>
        <h1 className="heading">PAYMENT SUCCESSFUL</h1>
        <p>
          <IoCheckmarkCircle />
        </p>
        <Link to="/dashboard" className="btn-primary">
          Dashboard
        </Link>
      </TheSuccessPage>
  );
};
const TheSuccessPage = styled.div`
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
    color: green;
    font-size: 5rem;
  }
  a {
    text-decoration: none;
  }
`;
export default withAuth(Success);
