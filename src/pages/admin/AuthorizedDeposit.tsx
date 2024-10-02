import styled from "styled-components";
import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AuthorizedDeposit = () => {
  const navigate = useNavigate();
  const adminInfo = useSelector((state: any) => state.persistedReducer.admin);
  if (adminInfo.allAppDeposits === null) {
    return <h6 className="text-center">NO DEPOSITS AT ALL</h6>;
  }
  let approvedDeposit = adminInfo.allApprovedAppDeposits;

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
          {approvedDeposit?.length <= 0 ? (
            <tr key="">
              <td></td>
              <td></td>
              <td className="no-result"> No Approved Deposits</td>
              <td></td>
              <td></td>
            </tr>
          ) : (
            <>
              {approvedDeposit?.map((pend: any, index: any) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{pend?.appUser?.email}</td>
                  <td>$ {pend?.amount}</td>
                  <td className="text-success">
                    <b>Approved</b>
                  </td>
                  <td className="text-success">
                    <button
                      className="approve btn btn-success"
                      onClick={() => navigate(`/topupdeposit/${pend?.id}`)}
                    >
                      Top Up
                    </button>
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
export default AuthorizedDeposit;
