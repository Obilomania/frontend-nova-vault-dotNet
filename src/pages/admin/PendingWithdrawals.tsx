import styled from "styled-components";
import Table from "react-bootstrap/Table";
import { adminApproveUserWithdrawal } from "../../redux/adminRedux/adminService";
import MiniLoader from "../../components/MiniLoader";

const PendingWithdrawals = (allPendingWithdrawals:any) => {
  const approveWithdrawal: any = async (id: any) => {
    await adminApproveUserWithdrawal(id);
    window.location.reload();
  };

  return (
    <PendingWithdraw>
      <h1 className="heading">Pending Withdrawals</h1>
      {!allPendingWithdrawals?.allPendingWithdrawals ? (
        <div className="mini-loader">
          <MiniLoader />
        </div>
      ) : (
        <Table striped size="sm" className="table">
          <thead>
            <tr>
              <th>No.</th>
              <th>Email</th>
              <th>Amount</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="tbody">
            {allPendingWithdrawals?.allPendingWithdrawals <= 0 ? (
              <tr key="">
                <td></td>
                <td></td>
                <td className="no-result"> No Pending Withdrawals</td>
                <td></td>
                <td></td>
              </tr>
            ) : (
              <>
                {allPendingWithdrawals?.allPendingWithdrawals?.map(
                  (pend: any, index: any) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{pend?.appUser?.email}</td>
                      <td>$ {pend?.amount}</td>
                      <td className="text-danger">
                        <b>Processing</b>
                      </td>

                      <td className="call-to-action">
                        <button
                          className="approve btn btn-success"
                          onClick={() => approveWithdrawal(pend?.id)}
                        >
                          Approve
                        </button>
                        {/* <button className="delete btn btn-danger">Delete</button> */}
                      </td>
                    </tr>
                  )
                )}
              </>
            )}
          </tbody>
        </Table>
      )}
    </PendingWithdraw>
  );
};

const PendingWithdraw = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  .no-result {
    text-align: center;
    color: red;
    font-weight: 600;
  }
  .table {
    font-size: 0.8rem;
  }
  .call-to-action {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    .approve {
      font-size: 0.8rem;
      background: green;
      color: white;
      padding: 0.2rem 1rem;
      letter-spacing: 1px;
      cursor: pointer;
    }
    .delete {
      background: red;
      color: white;
      font-size: 0.8rem;
      padding: 0.2rem 1rem;
      letter-spacing: 1px;
      cursor: pointer;
    }
  }
`;

export default PendingWithdrawals;
