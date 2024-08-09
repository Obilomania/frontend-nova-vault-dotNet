import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import withAuth from '../HOC/withAuth';
import styled from 'styled-components';
import MainLayout from '../components/layout/MainLayout';
import Time from '../components/Time';

const Transactions = () => {
  const navigate = useNavigate();
    const allAppDepositss = useSelector((state:any) => state.persistedReducer.transaction.alluserdeposits)
    const allWithdrawals = useSelector((state:any) => state.persistedReducer.transaction.alluserwithdrawals)
   
    function formatDateString(dateString: any) {
      // Parse the date string into a Date object
      const date = new Date(dateString);

      // Define the options for the desired format
      const options: any = {
        weekday: "short", // "THU"
        month: "short", // "AUG"
        day: "numeric", // "1"
        year: "numeric", // "2024"
        hour: "numeric", // "9"
        minute: "numeric", // "49"
        hour12: true, // "AM/PM"
      };

      // Format the date
      const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
        date
      );

      return formattedDate;
    }

    // const inputDateString = theLastDeposit?.createdOn;
    // const formattedDateString = formatDateString(inputDateString);
  return (
    <MainLayout>
      <Transact>
        <div className="dashboard-content">
          <Time />
          <hr />
          <br />
          <div className="right-dash dash">
            <h5 className="heading-deposit-form">ALL TRANSACTIONS</h5>
            {/* <div className="filter-transact">
              THIS IS WHERE THE FILTER WILL COME IN
            </div> */}
            <h6>
              <b>WITHDRAWALS</b>
            </h6>
            <div className="div-table">
              <div className="table-heading the-row">
                <p className="amount">AMOUNT</p>
                <p className="timing">TIME</p>
                <p className="plan">STATUS</p>
                <p className="status">WALLET</p>
              </div>
              {/* ------------------------------------- */}
              {allWithdrawals?.length > 0 || !allWithdrawals ? (
                <>
                  {allWithdrawals?.map((withdraw: any) => (
                    <>
                      <div
                        className="table-body the-row one"
                        key={withdraw?.id}
                      >
                        <p className="amount">
                          $ {withdraw?.amount.toFixed(2)}
                        </p>
                        <p className="timing">
                          {formatDateString(withdraw?.createdOn)}
                        </p>
                        <p className="timing">
                          {!withdraw?.isProcessing ? (
                            <span className="span-processing">Processing</span>
                          ) : (
                            <span className="span-success">Successful</span>
                          )}
                        </p>
                        <p className="wallet">{withdraw?.wallet}</p>
                      </div>
                    </>
                  ))}
                </>
              ) : (
                <div className="table-body the-row one no-transaction">
                  <p className="text-danger">NO WITHDRAWAL MADE</p>
                </div>
              )}
            </div>{" "}
            <hr />
            <h6>
              <b>DEPOSITS</b>
            </h6>
            <div className="div-table">
              <div className="table-heading the-row">
                <p className="amount">AMOUNT</p>
                <p className="timing">TIME</p>
                <p className="plan">PLAN</p>
                <p className="status">STATUS</p>
              </div>
              {/* ------------------------------------- */}
              {allAppDepositss.length > 0 || !allAppDepositss? (
                <>
                  {allAppDepositss?.map((depo: any) => (
                    <>
                      <div className="table-body the-row one" key={depo.id}>
                        <p className="amount">$ {depo?.amount.toFixed(2)}</p>
                        <p className="timing">
                          {formatDateString(depo?.createdOn)}
                        </p>
                        <p className="plan">{depo?.plan}</p>
                        <p className="status">
                          {!depo?.isProcessing ? (
                            <span className="span-processing">Processing</span>
                          ) : (
                            <span className="span-success">Successful</span>
                          )}
                        </p>
                      </div>
                    </>
                  ))}{" "}
                </>
              ) : (
                <div className="table-body the-row one no-transaction">
                  <p className="text-danger">NO DEPOSIT MADE</p>
                </div>
              )}
            </div>
          </div>
          <button onClick={() => navigate(-1)}>GO BACK</button>
        </div>
      </Transact>
    </MainLayout>
  );
};

const Transact = styled.div`
  width: 100%;
  position: relative;
  min-height: 80vh;
  height: fit-content;
  overflow: hidden;
  background-image: url("/images/Dash-BG.jpg");
  padding: 0rem 10rem;
  font-family: "Poppins", sans-serif;
  font-size:.8rem;
  z-index: 1;
  .no-transaction {
    width: 100%;
    p {
      width: 100%;
      text-align: center;
      font-weight: bolder;
      color: var(--primary);
      font-size:.5rem;
    }
  }
  .span-processing {
    color: var(--primary);
  }
  .span-success {
    color: green;
  }
  .amount {
    width: 15%;
  }
  .status {
    width: 40%;
    text-align: center;
  }
  .timing {
    width: 15%;
    text-align: center;
  }
  .plan {
    width: 15%;
    text-align: center;
  }
  .wallet {
    width: 40%;
    text-align: center;
  }
  hr {
    height: 2px;
    width: 100%;
    background: var(--background-color);
  }
  .dashboard-content {
    padding: 1rem 2rem;
    width: 100%;
    min-height: 80vh;
    height: fit-content;
    background: rgba(214, 214, 214, 0.5);
  }
  h6 {
    margin-top: 1rem;
    span {
      color: var(--primary);
      font-weight: 600;
    }
  }
  .right-dash {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    background: white;
    border-radius: 0.5rem;
    padding: 1rem 2rem;
  }
  .heading-deposit-form {
    text-align: center;
    width: 100%;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 600;
  }
  .div-table {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
  }
  .the-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    overflow:hidden;
  }
  .table-heading {
    background: var(--background-color);
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.1rem 1rem;
    p {
      margin-top: 0.5rem;
    }
  }
  .div-table .one {
    background: var(--light-black);
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.1rem 1rem;
    margin-top: 0.5rem;
    p {
      margin-top: 0.5rem;
      color: black;

    }
  }
  button {
    text-decoration: none;
    color: black;
    background: none;
    border: 3px solid black;
    border-radius: 0.5rem;
    padding: 0.5rem 2rem;
    font-weight: 500;
    letter-spacing: 1px;
    transition: var(--transition);
    margin-top: 1rem;
    &:hover {
      background: black;
      color: white;
    }
  }

  @media screen and (max-width: 1200px) {
    width: 100%;
    position: relative;
    min-height: 80vh;
    height: fit-content;
    overflow: hidden;
    background-image: url("/images/Dash-BG.jpg");
    padding: 1rem;
    font-family: "Poppins", sans-serif;
    .dashboard-content {
      padding: 1rem 2rem;
      width: 100%;
      min-height: 80vh;
      height: fit-content;
      background: rgba(214, 214, 214, 0.5);
    }
    h6 {
      margin-top: 1rem;
      span {
        color: var(--primary);
        font-weight: 600;
      }
    }
    .right-dash {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      background: white;
      border-radius: 0.5rem;
      padding: 1rem 2rem;
    }
    .heading-deposit-form {
      text-align: center;
      width: 100%;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-weight: 600;
    }
    .div-table {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 100%;
    }
    .btc-address {
      display: none;
    }
    .the-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
    }
    .table-heading {
      background: var(--background-color);
      color: white;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.1rem 1rem;
      p {
        margin-top: 0.5rem;
      }
    }
    .div-table .one {
      background: var(--light-black);
      color: white;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.1rem 1rem;
      margin-top: 0.5rem;
      p {
        margin-top: 0.5rem;
        color: black;
      }
    }
    button {
      text-decoration: none;
      color: black;
      background: none;
      border: 3px solid black;
      border-radius: 0.5rem;
      padding: 0.5rem 2rem;
      font-weight: 500;
      letter-spacing: 1px;
      transition: var(--transition);
      margin-top: 1rem;
      &:hover {
        background: black;
        color: white;
      }
    }
  }
  @media screen and (max-width: 900px) {
    width: 100%;
    position: relative;
    min-height: 80vh;
    height: fit-content;
    overflow: hidden;
    background-image: url("/images/Dash-BG.jpg");
    padding: 1rem;
    font-family: "Poppins", sans-serif;
    .dashboard-content {
      padding: 1rem 2rem;
      width: 100%;
      min-height: 80vh;
      height: fit-content;
      background: rgba(214, 214, 214, 0.5);
    }
    h6 {
      margin-top: 1rem;
      span {
        color: var(--primary);
        font-weight: 600;
      }
    }
    .right-dash {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      background: white;
      border-radius: 0.5rem;
      padding: 1rem 2rem;
    }
    .heading-deposit-form {
      text-align: center;
      width: 100%;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-weight: 600;
    }
    .div-table {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 100%;
    }
    .the-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      font-size:.5rem;
    }
    .table-heading {
      background: var(--background-color);
      color: white;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.1rem 1rem;
      p {
        margin-top: 0.5rem;
      }
    }
    .div-table .one {
      background: var(--light-black);
      color: white;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.1rem 1rem;
      margin-top: 0.5rem;
      p {
        margin-top: 0.5rem;
        color: black;
      }
    }
    button {
      text-decoration: none;
      color: black;
      background: none;
      border: 3px solid black;
      border-radius: 0.5rem;
      padding: 0.5rem 2rem;
      font-weight: 500;
      letter-spacing: 1px;
      transition: var(--transition);
      margin-top: 1rem;
      &:hover {
        background: black;
        color: white;
      }
    }
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    position: relative;
    min-height: 80vh;
    height: fit-content;
    overflow: hidden;
    background-image: url("/images/Dash-BG.jpg");
    padding: 1rem;
    font-family: "Poppins", sans-serif;
    .dashboard-content {
      padding: 1rem;
      width: 100%;
      min-height: 80vh;
      height: fit-content;
      background: rgba(214, 214, 214, 0.5);
    }
    h6 {
      margin-top: 1rem;
      span {
        color: var(--primary);
        font-weight: 600;
      }
    }
    .right-dash {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      background: white;
      border-radius: 0.5rem;
      padding: 1rem;
    }
    .heading-deposit-form {
      text-align: center;
      width: 100%;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-weight: 600;
    }
    .div-table {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 100%;
    }
    .the-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
    }
    .table-heading {
      background: var(--background-color);
      color: white;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.1rem 1rem;
      p {
        margin-top: 0.5rem;
      }
    }
    .div-table .status{
        display:none;
    }
    .div-table .one {
      background: var(--light-black);
      color: white;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.1rem 1rem;
      margin-top: 0.5rem;
      p {
        margin-top: 0.5rem;
        color: black;
      }
      .wallet{
        display:none;
      }
      
    }
    button {
      text-decoration: none;
      color: black;
      background: none;
      border: 3px solid black;
      border-radius: 0.5rem;
      padding: 0.3rem 1rem;
      font-weight: 500;
      letter-spacing: 1px;
      transition: var(--transition);
      margin-top: 1rem;
      font-size: 0.5rem;
      &:hover {
        background: black;
        color: white;
      }
    }
  }
  @media screen and (max-width: 420px) {
    width: 100%;
    position: relative;
    min-height: 80vh;
    height: fit-content;
    overflow: hidden;
    background-image: url("/images/Dash-BG.jpg");
    padding: 1rem;
    font-family: "Poppins", sans-serif;
    font-size:.5rem;
    .dashboard-content {
      padding: 1rem;
      width: 100%;
      min-height: 80vh;
      height: fit-content;
      background: rgba(214, 214, 214, 0.5);
    }
    h6 {
      margin-top: 1rem;
      span {
        color: var(--primary);
        font-weight: 600;
      }
    }
    .right-dash {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      background: white;
      border-radius: 0.5rem;
      padding: 1rem;
    }
    .heading-deposit-form {
      text-align: center;
      width: 100%;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-weight: 600;
    }
    .div-table {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 100%;
    }
    .the-row {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      width: 100%;
    }
    .table-heading {
      background: var(--background-color);
      color: white;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.1rem 1rem;
      p {
        margin-top: 0.5rem;
      }
    }
    .div-table .one {
      background: var(--light-black);
      color: white;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      padding: 0.1rem 1rem;
      margin-top: 0.5rem;
      p {
        margin-top: 0.5rem;
        color: black;
      }
    }
    button {
      text-decoration: none;
      color: black;
      background: none;
      border: 3px solid black;
      border-radius: 0.5rem;
      padding: 0.3rem 1rem;
      font-weight: 500;
      letter-spacing: 1px;
      transition: var(--transition);
      margin-top: 1rem;
      font-size: 0.5rem;
      &:hover {
        background: black;
        color: white;
      }
    }
  }
  @media screen and (max-width: 350px) {
    width: 100%;
    position: relative;
    min-height: 80vh;
    height: fit-content;
    overflow: hidden;
    background-image: url("/images/Dash-BG.jpg");
    padding: 1rem;
    font-family: "Poppins", sans-serif;
    font-size:.5rem;

    .dashboard-content {
      padding: 1rem;
      width: 100%;
      min-height: 80vh;
      height: fit-content;
      background: rgba(214, 214, 214, 0.5);
    }
    h6 {
      margin-top: 1rem;
      span {
        color: var(--primary);
        font-weight: 600;
      }
    }
    .right-dash {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      background: white;
      border-radius: 0.5rem;
      padding: 1rem;
    }
    .heading-deposit-form {
      text-align: center;
      width: 100%;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-weight: 600;
    }
    .div-table {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 100%;
    }
    .the-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
    }
    .table-heading {
      background: var(--background-color);
      color: white;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.1rem 1rem;
      p {
        margin-top: 0.5rem;
      }
    }
    .div-table .one {
      background: var(--light-black);
      color: white;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.1rem 1rem;
      margin-top: 0.5rem;
      p {
        margin-top: 0.5rem;
        color: black;
      }
    }
    button {
      text-decoration: none;
      color: black;
      background: none;
      border: 3px solid black;
      border-radius: 0.5rem;
      padding: 0.3rem 1rem;
      font-weight: 500;
      letter-spacing: 1px;
      transition: var(--transition);
      margin-top: 1rem;
      font-size: 0.5rem;
      &:hover {
        background: black;
        color: white;
      }
    }
  }
`;

export default withAuth(Transactions);