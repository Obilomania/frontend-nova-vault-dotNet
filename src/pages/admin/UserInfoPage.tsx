import React, { useEffect, useState } from "react";
import MainLayout from "../../components/layout/MainLayout";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "../../components/Loader";
import { toast } from "react-toastify";
import { addToAccountBalance } from "../../redux/authRedux/userAuthService";
import { getAllApplicationUser } from "../../redux/adminRedux/adminService";

const UserInfoPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [users, setUsers] = useState([])
  const allTheAppUser = useSelector(
    (state: any) => state.persistedReducer.admin.allAppUsers
  );

  useEffect(() => {
    getAllApplicationUser()
      .then((res) => {
        setUsers(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  
  console.log(users)
  const totalBalance = useSelector(
    (state: any) => state.persistedReducer.transaction.userAccountBalance
  );

  //   const users = useSelector((state: any) => state.admin.allAppUsers);
  const userInfo: any = users?.find((u: any) => u.id === id);
  const [addToBalance, setAddToBalance] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const toggleRevealAdd = () => setAddToBalance(!addToBalance)
  const [addBal, setAddBal] = useState({
    amount: "",
  })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setAddBal((prevData) => ({
        ...prevData,
        [name]: value,
      }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    if(addBal.amount === ""){
      toast.error("Please enter a valid amount or cancel")
      setIsLoading(false);
      return;
    }
    await addToAccountBalance({UserBonus: addBal.amount, id});
    // setIsLoading(false);
    // navigate("/admin-landing");
    setIsLoading(false);
  }

  return (
    <MainLayout>
      {isLoading && <Loader />}
      <UserInfo>
    
        <div className="dashboard-content">
          <div className="dash-content-content">
            <div className="the-write-ups">
              <p className="confirm-writeups">
                <span>Full Name :</span> <b>{userInfo?.fullname}</b>
              </p>
              <p className="confirm-writeups">
                <span>Email :</span> <b>{userInfo?.email}</b>
              </p>
              {/* <p className="confirm-writeups">
                <span>Role :</span> {userInfo?.role}
              </p> */}
              <p className="confirm-writeups">
                <span>User Blocked? :</span>{" "}
                {userInfo?.isBlocked ? "True" : "False"}
              </p>
              <p className="confirm-writeups">
                <span>BTC Wallet Address :</span> {userInfo?.btcWallet}
              </p>
              <p className="confirm-writeups">
                <span>User Promo Code :</span> {userInfo?.userPromoCode}
              </p>
              <p className="confirm-writeups">
                <span>User Account Balance :</span> $ {totalBalance.toFixed(2)}
              </p>
              {/* <div className="confirm-writeups">
                <span>Exposed Password :</span> {userInfo?.openPassword}
              </div>{" "} */}
              <br />
              <div className="call-to-action">
                {/* <button
                  className="btn-danger btn"
                  onClick={() =>
                    navigate(`/admin-edit-user-Info/${userInfo.id}`)
                  }
                >
                  EDIT WALLET
                </button> */}
                {/* <button className="btn-danger btn" onClick={toggleRevealAdd}>
                  ADD TO USER BALANCE
                </button> */}
                <button
                  className="btn-danger btn"
                  onClick={() => navigate("/admin-landing")}
                >
                  GO BACK
                </button>
              </div>
            </div>
            {addToBalance && (
              <div className="form-div">
                <p>ADD TO BALANCE</p>
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    placeholder="Add To Balance"
                    name="amount"
                    value={addBal.amount}
                    onChange={(e) => handleInputChange(e)}
                  />
                  <button className="btn-success btn" type="submit">
                    SUBMIT
                  </button>
                  <span className="btn-danger btn" onClick={toggleRevealAdd}>
                    CANCEL
                  </span>
                </form>
              </div>
            )}
          </div>
        </div>
      </UserInfo>
    </MainLayout>
  );
};

const UserInfo = styled.div`
  width: 100%;
  position: relative;
  min-height: 80vh;
  height: fit-content;
  overflow: hidden;
  background-image: url("/images/Dash-BG.jpg");
  padding: 0rem 10rem;
  font-family: "Poppins", sans-serif;
  .add-to-balance {
    width: 100%;
    display: none;
  }
  .dashboard-content {
    padding: 1rem 2rem;
    width: 100%;
    min-height: 80vh;
    height: fit-content;
    background: rgba(214, 214, 214, 0.5);
  }
  .dash-content-content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 10vh;
  }
  .the-write-ups {
    width: 80%;
  }
  .confirm-writeups {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
  .call-to-action {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
  .form-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    p {
      color: var(--primary);
      font-weight: 600;
      font-size: 1.2rem;
    }
    form {
      display: flex;
      /* flex-direction: column; */
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      input {
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
      }
      button {
        /* background: var(--primary); */
        font-size: 0.8rem;
        color: white;
        /* padding: 0.5rem 1rem; */
      }
    }
  }
`;

export default UserInfoPage;
