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

const AdminLanding = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [allDeposits, setAllDeposits] = useState([]);
  const [allWithdrawals, setAllWithdrawals] = useState([]);

  useEffect(() => {
    getAllApplicationUser().then((data) => {
      setAllUsers(data?.$values);
    });
  }, []);

  useEffect(() => {
    getAllDeposits().then((data) => {
      setAllDeposits(data);
    });
  }, []);

  useEffect(() => {
    getAllWithdrawals().then((data) => {
      setAllWithdrawals(data);
    });
  }, []);

  if (!allUsers || !allDeposits || !allWithdrawals) {
    return <Loader/>
  }

  return (
    <MainLayout>
      <AdminLand>
        <div className="admin-container">
          <PendngDeposits deposits={ allDeposits} />
        </div>
        <hr />
        <div className="admin-container">
          <PendingWithdrawals withdrawals={ allWithdrawals} />
        </div>
        <hr />
        <div className="admin-container">
          <AllAppUser appUsers {allUsers} />
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

export default AdminLanding;
