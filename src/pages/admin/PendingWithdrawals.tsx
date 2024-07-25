import styled from "styled-components";
import Table from "react-bootstrap/Table";
import { all_withdrawals } from "../../redux/adminRedux/adminSlice";
import { useDispatch, useSelector } from "react-redux";

const PendingWithdrawals = ({ withdrawals }: any) => {
  const dispatch = useDispatch();
  if (withdrawals) {
    dispatch(all_withdrawals(withdrawals));
  }
  const allWithdraws = useSelector((state: any) => state.admin.allWithdrawals);
  let pendingWithdrawals = allWithdraws.filter(
    (dep: { isProcessing: Boolean }) => !dep.isProcessing
  );

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
            <p className="no-result"> No Pending Withdrawals</p>
          ) : (
            <>
              {pendingWithdrawals.map((pend: any, index: any) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{pend?.appUser?.email }</td>
                  <td>$ {pend?.amount}</td>
                   <td className='text-danger'>Processing</td>
                  <td className="call-to-action">
                    <button className="approve">Approve</button>
                    <button className="delete">Delete</button>
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
