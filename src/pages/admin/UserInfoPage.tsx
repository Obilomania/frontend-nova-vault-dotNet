import React, { useEffect, useState } from "react";
import MainLayout from "../../components/layout/MainLayout";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { getAllApplicationUser } from "../../redux/adminRedux/adminService";
import { useDispatch, useSelector } from "react-redux";
import { all_applicationUser } from "../../redux/adminRedux/adminSlice";

const UserInfoPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const [allUsers, setAllUsers] = useState([]);
  useEffect(() => {
    getAllApplicationUser().then((data) => {
      setAllUsers(data?.$values);
    });
  }, []);
  if (allUsers) {
    dispatch(all_applicationUser(allUsers));
  }
//   const users = useSelector((state: any) => state.admin.allAppUsers);
    const userInfo:any = allUsers?.find((u: any) => u.id === id);

  return (
    <MainLayout>
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
              <div className="confirm-writeups">
                <span>Exposed Password :</span> {userInfo?.openPassword}
              </div>{" "}
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
                {/* <button className="btn-danger btn">EDIT PASSWORD</button> */}
                <button
                  className="btn-danger btn"
                  onClick={() => navigate("/admin-landing")}
                >
                  GO BACK
                </button>
              </div>
            </div>
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
`;

export default UserInfoPage;
