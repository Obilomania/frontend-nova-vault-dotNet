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

const AdminLanding = () => {
  useAdminGetHooks();
  const navigate = useNavigate();

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
          <PendngDeposits />
        </div>
        <div className="admin-container">
          <AuthorizedDeposit />
        </div>
        <hr />
        <div className="admin-container">
          <PendingWithdrawals/>
        </div>
        <div className="admin-container">
          <AuthorizedWithdrawals />
        </div>
        <hr />
        <div className="admin-container">
          <AllAppUser />
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
