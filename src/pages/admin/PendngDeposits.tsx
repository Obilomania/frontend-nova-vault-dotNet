import styled from "styled-components";
import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const PendngDeposits = () => {
  const adminInfo = useSelector((state: any) => state.persistedReducer.admin);
  const navigate = useNavigate();
   if (adminInfo.allAppDeposits === null) {
     return <h6 className="text-center">NO DEPOSITS AT ALL</h6>;
   }

  let pendingDeposits = adminInfo.allAppDeposits.filter(
    (dep: { isProcessing: Boolean }) => !dep.isProcessing
  );

  return (
    <PendingDepo>
      <h1 className="heading">Pending Deposits</h1>
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
          {pendingDeposits.length <= 0 ? (
            <tr key="">
              <td></td>
              <td></td>
              <td className="no-result"> No Pending Withdrawals</td>
              <td></td>
              <td></td>
            </tr>
          ) : (
            <>
              {pendingDeposits.map((pend: any, index: any) => (
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
                      onClick={() => navigate(`/editDeposit/${pend?.id}`)}
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
    </PendingDepo>
  );
};

const PendingDepo = styled.div`
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
export default PendngDeposits;
