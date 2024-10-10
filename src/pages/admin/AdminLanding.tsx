import styled from "styled-components";
import MainLayout from "../../components/layout/MainLayout";
import PendngDeposits from "./PendngDeposits";
import AuthorizedDeposit from "./AuthorizedDeposit";
import { useNavigate } from "react-router-dom";
import withAdminAuth from "../../HOC/withAdminAuth";
import useAdminGetHooks from "../../customHooks/useAdminGetHooks";
import PendingWithdrawals from "./PendingWithdrawals";
import AuthorizedWithdrawals from "./AuthorizedWithdrawals";
import AllAppUser from "./AllAppUser";
import { useEffect } from "react";
import { toast } from "react-toastify";
import {
  useGetallApprovedAppDepositssQuery,
  useGetAllApprovedWithdrawalsQuery,
  useGetAllAppUsersQuery,
  useGetallPendingAppDepositssQuery,
  useGetAllPendingWithdrawalsQuery,
} from "../../redux/APIs/adminApi";

const AdminLanding = () => {
  useAdminGetHooks();
  const navigate = useNavigate();
  useEffect(() => {
    const bounceSmallScreen = () => {
      const screenSize = window.innerWidth;
      const computerScreenSize = 1920;
      if (screenSize < computerScreenSize) {
        toast.error("Log into a PC to access this page");
        navigate("/");
      }
      return;
    };
    bounceSmallScreen();
  }, [navigate]);
  const { data: allAppUsers } = useGetAllAppUsersQuery(null);
  const { data: allPendingDeposits } = useGetallPendingAppDepositssQuery(null);
  const { data: allApprovedDeposits } = useGetallApprovedAppDepositssQuery(null);
  const { data: allPendingWithdrawals } =
  useGetAllPendingWithdrawalsQuery(null);
  const { data: allApprovedWithdrawal } = useGetAllApprovedWithdrawalsQuery (null);

  return (
    <MainLayout>
      <AdminLand>
        <div className="create-promo-code w-auto mb-5">
          <button
            className="btn btn-success flex align-center justify-center mt-5 w-[100%]"
            onClick={() => navigate("/promoCodes")}
          >
            Click Here to get Promo Codes
          </button>
        </div>{" "}
        <hr />
        <div className="admin-container">
          <PendngDeposits allPendingDeposits={allPendingDeposits} />
        </div>
        <div className="admin-container">
          <AuthorizedDeposit allApprovedDeposits={allApprovedDeposits} />
        </div>
        <hr />
        <div className="admin-container">
          <PendingWithdrawals allPendingWithdrawals={allPendingWithdrawals} />
        </div>
        <div className="admin-container">
          <AuthorizedWithdrawals allApprovedWithdrawal={allApprovedWithdrawal} />
        </div>
        <hr />
        <div className="admin-container">
          <AllAppUser allAppUsers={allAppUsers} />
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
