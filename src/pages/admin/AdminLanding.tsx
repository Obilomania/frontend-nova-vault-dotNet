import styled from "styled-components";
import MainLayout from "../../components/layout/MainLayout";
import PendngDeposits from "./PendngDeposits";
import PendingWithdrawals from "./PendingWithdrawals";
import AllAppUser from "./AllAppUser";
import { useEffect, useState } from "react";
import {
  getAllApplicationUser,
  getAllDeposits,
  getAllWithdrawals,
} from "../../redux/adminRedux/adminService";
import Loader from "../../components/Loader";
import AuthorizedDeposit from "./AuthorizedDeposit";
import AuthorizedWithdrawals from "./AuthorizedWithdrawals";
import { useNavigate } from "react-router-dom";
import withAdminAuth from "../../HOC/withAdminAuth";
import useAdminGetHooks from "../../customHooks/useAdminGetHooks";

const AdminLanding = () => {
    useAdminGetHooks();

  const [allUsers, setAllUsers] = useState([]);
  const [allWithdrawals, setAllWithdrawals] = useState([]);
  const navigate = useNavigate();

  

  useEffect(() => {
    getAllApplicationUser().then((data) => {
      setAllUsers(data);
    });
  }, []);

  

  useEffect(() => {
    getAllWithdrawals().then((data) => {
      setAllWithdrawals(data);
    });
  }, []);

  // if (!allUsers || !allDeposits || !allWithdrawals) {
  //   return <Loader />;
  // }



  return (
    <MainLayout>
      <AdminLand>
        <div className="create-promo-code w-auto mb-5">
          <button className="btn btn-success flex align-center justify-center mt-5 w-[100%]" onClick={() => navigate("/promoCodes")}>Click Here to get Promo Codes</button>
      </div> <hr />
        <div className="admin-container">
          <PendngDeposits/>
        </div>
        <div className="admin-container">
          {/* <AuthorizedDeposit
            deposits={allDeposits}
          /> */}
        </div>
        <hr />
        <div className="admin-container">
          {/* <PendingWithdrawals withdrawals={allWithdrawals} /> */}
        </div>
        <div className="admin-container">
          {/* <AuthorizedWithdrawals withdrawals={allWithdrawals} /> */}
        </div>
        <hr />
        <div className="admin-container">
          {/* <AllAppUser appUsers={allUsers} /> */}
        </div>
      </AdminLand>
    </MainLayout>
  );
};

const AdminLand = styled.div`
  width: 100%;
  height: fit-content;
  .admin-container {
    padding: 0.2rem 10rem;
  }
`;

export default withAdminAuth(AdminLanding);
