import styled from "styled-components";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { all_app_deposits } from "../../redux/adminRedux/adminSlice";

const AuthorizedDeposit = ({ deposits }: any) => {
  const dispatch = useDispatch();
  if (deposits) {
    dispatch(all_app_deposits(deposits));
  }
  const allAppDepositss = useSelector((state: any) => state.admin.allAppDepositss);

  let pendingDeposits = allAppDepositss.filter(
    (dep: { isProcessing: Boolean }) => dep.isProcessing
  );

    // const deleteDeposit = async (id: any) => {
    //   await adminDeleteOneDeposit(id);
    // };
  return (
    <PendingDepo>
      <h1 className="heading">Approved Deposits</h1>
      <Table striped size="sm" className="table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Email</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {pendingDeposits.length <= 0 ? (
            <tr key="">
              <td></td>
              <td></td>
              <td className="no-result"> No Approved Deposits</td>
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
                  <td className="text-success"><b>Approved</b></td>
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
export default AuthorizedDeposit;
