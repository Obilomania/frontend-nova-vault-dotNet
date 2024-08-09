import styled from "styled-components";
import Table from "react-bootstrap/Table";
import {  useSelector } from "react-redux";
import { adminApproveUserWithdrawal } from "../../redux/adminRedux/adminService";

const PendingWithdrawals = ({ withdrawals }: any) => {
  const adminInfo = useSelector((state: any) => state.persistedReducer.admin);
  
   if (adminInfo.allWithdrawals === null) {
     return <h6 className="text-center">NO WITHDRAWALS AT ALL</h6>;
   }
  let pendingWithdrawals = adminInfo.allWithdrawals.filter(
    (dep: { isProcessing: Boolean }) => !dep.isProcessing
  );

  const approveWithdrawal: any = async (id: any) => {
    await adminApproveUserWithdrawal(id);
    window.location.reload();
  };

  return (
    <PendingWithdraw>
      <h1 className="heading">Pending Withdrawals</h1>
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
          {pendingWithdrawals <= 0 ? (
            <tr key="">
              <td></td>
              <td></td>
              <td className="no-result"> No Pending Withdrawals</td>
              <td></td>
              <td></td>
            </tr>
          ) : (
            <>
              {pendingWithdrawals.map((pend: any, index: any) => (
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
              ))}
            </>
          )}
        </tbody>
      </Table>
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
