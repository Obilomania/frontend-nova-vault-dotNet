import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { adminEditAndApproveUserDeposit } from "../../redux/adminRedux/adminService";
import MainLayout from "../../components/layout/MainLayout";
import Loader from "../../components/Loader";
import styled from "styled-components";

const TopUpDeposit = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [theEditFeatures, setTheEditFeatures] = useState({
    amount: "",
    isProcessing: true,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTheEditFeatures((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await adminEditAndApproveUserDeposit(id, theEditFeatures);
    navigate("/admin-landing");
    setIsLoading(false);
  };
  return (
    <MainLayout>
      {isLoading && <Loader />}
      <EditDepo>
        <div className="dashboard-content">
          <div className="dash-content-content">
            <h1 className="edit-top heading">TOP UP DEPOSIT</h1>
            <form onSubmit={handleSubmit}>
              <div className="plan-form">
                <label>Amount : </label>
                <input
                  type="text"
                  name="amount"
                  value={theEditFeatures.amount}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
              <button className="submit">TOP UP DEPOSIT</button>
            </form>
            <button className="goBack" onClick={() => navigate(-1)}>
              GO BACK
            </button>
          </div>
        </div>
      </EditDepo>
    </MainLayout>
  );
};
const EditDepo = styled.div`
  width: 100%;
  position: relative;
  min-height: 80vh;
  height: fit-content;
  overflow: hidden;
  background-image: url("/images/Dash-BG.jpg");
  padding: 0rem 10rem;
  font-family: "Poppins", sans-serif;

  .dashboard-content {
    padding: 1rem 2rem;
    width: 100%;
    min-height: 80vh;
    height: fit-content;
    background: rgba(214, 214, 214, 0.5);
  }
  .dash-content-content {
    display: flex;
    align-items: start;
    justify-content: space-between;
    flex-direction: column;
  }
  .edit-top {
    width: 100%;
    text-align: center;
  }
  form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 0.8rem;
    width: 50%;
    margin-top: 10vh;
    label {
      font-weight: bold;
    }
    .plan-form {
      display: flex;
      align-items: start;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      position: relative;
      input {
        padding: 0.2rem 1rem;
        width: 100%;
        z-index: 1;
      }
    }
    button {
      text-decoration: none;
      color: black;
      background: none;
      border: 3px solid black;
      border-radius: 2rem;
      padding: 0.2rem 2rem;
      font-weight: 500;
      width: 100%;
      letter-spacing: 2px;
      transition: var(--transition);
      &:hover {
        background: black;
        color: white;
      }
    }
  }
  .goBack {
    text-decoration: none;
    color: white;
    background: black;
    border: 3px solid black;
    border-radius: 2rem;
    padding: 0.2rem 2rem;
    font-weight: 500;
    width: 50%;
    letter-spacing: 2px;
    transition: var(--transition);
    margin-top: 1rem;
    &:hover {
      background: white;
      color: black;
    }
  }
`;
export default TopUpDeposit;
