import React, { useEffect, useState } from 'react'
import MainLayout from '../components/layout/MainLayout'
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import TopUpWithBalance from './TopUpWithBalance';
import TopUpWithBitcoin from './TopUpWithBitcoin';

const TopUp = () => {
    const [balancePop, setBalancePop] = useState(false);
    const revealBalancePop = () => setBalancePop(!balancePop);
    const [btcPop, setBtcPop] = useState(false);
    const revealBtcPop = () => setBtcPop(!btcPop);
    
    const transactionInfo = useSelector(
      (state:any) => state.persistedReducer.transaction
    );
    const theLastDeposit = transactionInfo?.userLastDeposit;
    let numberOfDeposits = transactionInfo?.alluserdeposits;
    console.log('====================================');
    console.log(numberOfDeposits);
    console.log('====================================');


    function formatDateString(dateString:any) {
      // Parse the date string into a Date object
      const date = new Date(dateString);

      // Define the options for the desired format
      const options :any = {
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

    const inputDateString = theLastDeposit?.createdOn;
    const formattedDateString = formatDateString(inputDateString);
  return (
    <MainLayout>
      <Toppings>
        <div className="dashboard-content">
          <div className="top">
            <h5>
              Plan : <span>{theLastDeposit?.plan}</span>
            </h5>
            <h5>
              Account Balance :{" "}
              <span> ${transactionInfo?.userAccountBalance}</span>
            </h5>
            <h5>
              Last Deposit : <span> ${theLastDeposit?.amount}</span>
            </h5>
            <h5>
              First time of Deposit : <span>{formattedDateString}</span>
            </h5>
            <h5>
              Top Up Due Date : <span>{transactionInfo?.topUpTime}</span>
            </h5>
            <div className="top-up-btns">
              {numberOfDeposits.length > 2 ? (
                <button onClick={revealBalancePop}>Top Up With Balance</button>
              ) : (
                <button onClick={revealBtcPop}>Top Up With Bitcoin</button>
              )}
            </div>

            <div className="top-it-up">
              <TopUpWithBalance
                revealBalancePop={revealBalancePop}
                balancePop={balancePop}
              />
              <TopUpWithBitcoin btcPop={btcPop} revealBtcPop={revealBtcPop} />
            </div>
          </div>
        </div>
      </Toppings>
    </MainLayout>
  );
}


const Toppings = styled.div`
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
  .top {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h5 {
      font-size: 1rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      span {
        color: red;
        font-weight: 600;
      }
    }
  }
  .top-up-btns {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    button {
      margin-top: 0.5rem;
      border: 2px solid var(--light);
      background: var(--light);
      padding: 0.2rem 1.5rem;
      border-radius: 2rem;
      color: white;
      letter-spacing: 1px;
      transition: var(--transition);
      text-transform: uppercase;
      letter-spacing: 1px;
      &:hover {
        background: none;
        color: var(--background);
      }
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
    .top {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      h5 {
        font-size: 1rem;
        text-transform: uppercase;
        letter-spacing: 1px;
        span {
          color: red;
          font-weight: 600;
        }
      }
    }
    .top-up-btns {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      button {
        margin-top: 0.5rem;
        border: 2px solid var(--light);
        background: var(--light);
        padding: 0.2rem 1.5rem;
        border-radius: 2rem;
        color: white;
        letter-spacing: 1px;
        transition: var(--transition);
        text-transform: uppercase;
        letter-spacing: 1px;
        &:hover {
          background: none;
          color: var(--background);
        }
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
    padding: 0rem 1rem;
    font-family: "Poppins", sans-serif;
    .dashboard-content {
      padding: 1rem 2rem;
      width: 100%;
      min-height: 80vh;
      height: fit-content;
      background: rgba(214, 214, 214, 0.5);
    }
    .top {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      h5 {
        font-size: 1rem;
        text-transform: uppercase;
        letter-spacing: 1px;
        span {
          color: red;
          font-weight: 600;
        }
      }
    }
    .top-up-btns {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      button {
        margin-top: 0.5rem;
        border: 2px solid var(--light);
        background: var(--light);
        padding: 0.2rem 1.5rem;
        border-radius: 2rem;
        color: white;
        letter-spacing: 1px;
        transition: var(--transition);
        text-transform: uppercase;
        letter-spacing: 1px;
        &:hover {
          background: none;
          color: var(--background);
        }
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
    padding: 0rem 1rem;
    font-family: "Poppins", sans-serif;
    .dashboard-content {
      padding: 1rem 2rem;
      width: 100%;
      min-height: 80vh;
      height: fit-content;
      background: rgba(214, 214, 214, 0.5);
    }
    .top {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      h5 {
        font-size: 0.8rem;
        text-transform: uppercase;
        letter-spacing: 1px;
        span {
          color: red;
          font-weight: 600;
        }
      }
    }
    .top-up-btns {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      button {
        margin-top: 0.5rem;
        border: 2px solid var(--light);
        background: var(--light);
        padding: 0.2rem 1.5rem;
        border-radius: 2rem;
        color: white;
        letter-spacing: 0px;
        font-size: 0.6rem;
        transition: var(--transition);
        text-transform: uppercase;
        letter-spacing: 1px;
        &:hover {
          background: none;
          color: var(--background);
        }
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
    padding: 0rem 1rem;
    font-family: "Poppins", sans-serif;
    .dashboard-content {
      padding: 1rem 2rem;
      width: 100%;
      min-height: 80vh;
      height: fit-content;
      background: rgba(214, 214, 214, 0.5);
    }
    .top {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      h5 {
        font-size: 0.6rem;
        text-transform: uppercase;
        letter-spacing: 0px;
        span {
          color: red;
          font-weight: 600;
        }
      }
    }
    .top-up-btns {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      button {
        margin-top: 0.5rem;
        border: 2px solid var(--light);
        background: var(--light);
        padding: 0.2rem 1.5rem;
        border-radius: 2rem;
        color: white;
        letter-spacing: 0px;
        font-size: 0.6rem;
        transition: var(--transition);
        text-transform: uppercase;
        letter-spacing: 1px;
        &:hover {
          background: none;
          color: var(--background);
        }
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
    padding: 0rem 1rem;
    font-family: "Poppins", sans-serif;
    .dashboard-content {
      padding: 1rem 2rem;
      width: 100%;
      min-height: 80vh;
      height: fit-content;
      background: rgba(214, 214, 214, 0.5);
    }
    .top {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      h5 {
        font-size: 0.6rem;
        text-transform: uppercase;
        letter-spacing: 0px;
        span {
          color: red;
          font-weight: 600;
        }
      }
    }
    .top-up-btns {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      button {
        margin-top: 0.5rem;
        border: 2px solid var(--light);
        background: var(--light);
        padding: 0.2rem 1.5rem;
        border-radius: 2rem;
        color: white;
        letter-spacing: 0px;
        font-size: 0.6rem;
        transition: var(--transition);
        text-transform: uppercase;
        letter-spacing: 1px;
        &:hover {
          background: none;
          color: var(--background);
        }
      }
    }
  }
`;
export default TopUp